'use strict';
(() => {
  const blocks = [...document.querySelectorAll('.block')];
  const select = document.getElementById('blockSelect');
  const search = document.getElementById('search');
  const status = document.getElementById('status');
  const saveStatus = document.getElementById('saveStatus');
  const key = 'et10-irci-integrador-v1';
  const normalize = s => s.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
  const indexed = new Map(blocks.map(b => [b.id, normalize(b.textContent)]));
  const validIds = new Set(blocks.map(b => b.id));
  let beforeSearch = null;
  function render(updateHash = true) {
    const words = normalize(search.value).trim().split(/\s+/).filter(Boolean);
    let visible = 0;
    for (const b of blocks) {
      const match = (select.value === 'todos' || b.id === select.value) && words.every(w => indexed.get(b.id).includes(w));
      b.hidden = !match;
      if (match) visible++;
    }
    document.getElementById('empty').hidden = visible !== 0;
    const completed = document.querySelectorAll('[data-done]:checked').length;
    status.textContent = `${visible} sección${visible === 1 ? '' : 'es'} visible${visible === 1 ? '' : 's'} · ${completed} de 22 bloques repasados.`;
    if (updateHash) {
      try { history.replaceState(null, '', '#' + select.value); } catch (_) { /* Reading works from file:// too. */ }
    }
  }
  function followHash() {
    const id = location.hash.slice(1);
    select.value = validIds.has(id) || id === 'todos' ? id : 'bloque-01';
    search.value = ''; beforeSearch = null; render(false);
  }
  select.addEventListener('change', () => { search.value = ''; beforeSearch = null; render(); });
  search.addEventListener('input', () => {
    if (search.value.trim()) {
      if (beforeSearch === null) beforeSearch = select.value;
      select.value = 'todos';
    } else if (beforeSearch !== null) { select.value = beforeSearch; beforeSearch = null; }
    render();
  });
  function choose(id) {
    select.value = id; search.value = ''; beforeSearch = null; render();
    document.querySelector('#' + id + ' h2').focus({preventScroll:true});
  }
  document.getElementById('random').addEventListener('click', () => choose('bloque-' + String(Math.floor(Math.random() * 22) + 1).padStart(2, '0')));
  document.getElementById('annex').addEventListener('click', () => choose('anexo'));
  document.getElementById('print').addEventListener('click', () => window.print());
  const notes = [...document.querySelectorAll('[data-note]')];
  const done = [...document.querySelectorAll('[data-done]')];
  function snapshot() {
    return {notes: Object.fromEntries(notes.map(n => [n.dataset.note, n.value])), done:done.filter(n => n.checked).map(n => n.dataset.done)};
  }
  document.getElementById('save').addEventListener('click', () => {
    try { localStorage.setItem(key, JSON.stringify(snapshot())); saveStatus.textContent = 'Apuntes guardados en este navegador. Volvé a guardar después de hacer cambios.'; }
    catch (_) { saveStatus.textContent = 'Este navegador no permite guardar. Usá Descargar mis apuntes.'; }
  });
  document.getElementById('clear').addEventListener('click', () => {
    try { localStorage.removeItem(key); saveStatus.textContent = 'Se borró la copia del navegador. El texto en pantalla sigue disponible para descargar.'; }
    catch (_) { saveStatus.textContent = 'No se pudo acceder al almacenamiento del navegador.'; }
  });
  document.getElementById('download').addEventListener('click', () => {
    const state = snapshot();
    const lines = ['IRCI — Integrador de sexto año', 'Mis apuntes de repaso', 'Fecha: ' + new Date().toLocaleString('es-AR'), ''];
    for (const b of blocks.filter(b => b.id !== 'anexo')) {
      lines.push(b.querySelector('.block-header').textContent.trim(), 'Repasado: ' + (state.done.includes(b.id) ? 'Sí' : 'No'), state.notes[b.id] || '(Sin apuntes)', '');
    }
    const url = URL.createObjectURL(new Blob(['\uFEFF' + lines.join('\n')], {type:'text/plain;charset=utf-8'}));
    const a = document.createElement('a'); a.href = url; a.download = 'IRCI_mis_apuntes.txt'; document.body.append(a); a.click(); a.remove(); setTimeout(() => URL.revokeObjectURL(url), 1000);
    saveStatus.textContent = 'Se solicitó la descarga de tus apuntes. Verificá la carpeta de descargas.';
  });
  for (const field of [...notes,...done]) field.addEventListener('input', () => { saveStatus.textContent = 'Hay cambios en pantalla. Guardá o descargá tus apuntes para conservarlos.'; render(false); });
  try {
    const raw = localStorage.getItem(key);
    if (raw) {
      const data = JSON.parse(raw);
      for (const n of notes) if (typeof data.notes?.[n.dataset.note] === 'string') n.value = data.notes[n.dataset.note];
      for (const n of done) n.checked = Array.isArray(data.done) && data.done.includes(n.dataset.done);
      saveStatus.textContent = 'Se recuperaron los apuntes guardados en este navegador.';
    }
  } catch (_) { saveStatus.textContent = 'No se recuperaron apuntes guardados. Podés usar la descarga de texto.'; }
  addEventListener('hashchange', followHash);
  followHash();
})();

// Corrección orientativa e impresión de respuestas.
(() => {
  const responses = [...document.querySelectorAll('details.answer')];
  const visibleResponses = () => responses.filter(d => !d.closest('.block').hidden);
  document.getElementById('showAnswers').addEventListener('click', () => {
    visibleResponses().forEach(d => { d.open = true; });
  });
  document.getElementById('hideAnswers').addEventListener('click', () => {
    visibleResponses().forEach(d => { d.open = false; });
  });
  let printState = null;
  addEventListener('beforeprint', () => {
    if (printState === null) printState = responses.map(d => d.open);
    const include = document.getElementById('includeAnswers').checked;
    document.body.classList.toggle('omit-print-answers', !include);
    visibleResponses().forEach(d => { d.open = include; });
  });
  addEventListener('afterprint', () => {
    if (printState !== null) responses.forEach((d, i) => { d.open = printState[i]; });
    printState = null;
    document.body.classList.remove('omit-print-answers');
  });
})();
