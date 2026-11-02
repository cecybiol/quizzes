'use strict';
(() => {
  const bank = window.IRCI_QUIZ_BANK;
  const $ = id => document.getElementById(id);
  const HISTORY_KEY = 'et10-irci-tests-v1';
  const LETTERS = ['A', 'B', 'C', 'D'];
  const blocks = Array.isArray(bank) ? bank : [];
  if (blocks.length !== 22) {
    $('appStatus').textContent = 'No se pudo cargar el banco de preguntas. Comprobá que irci-test-banco.js esté junto a esta página.';
    $('startTest').disabled = true;
    return;
  }
  let attempt = null;
  let history = loadHistory();
  function el(tag, text, cls) {
    const node = document.createElement(tag);
    if (text !== undefined) node.textContent = text;
    if (cls) node.className = cls;
    return node;
  }
  function shuffled(items) {
    const copy = items.slice();
    for (let i = copy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
  }
  function loadHistory() {
    const empty = {version: 1, blocks: {}};
    try {
      const saved = JSON.parse(localStorage.getItem(HISTORY_KEY) || 'null');
      if (!saved || saved.version !== 1 || typeof saved.blocks !== 'object' || saved.blocks === null) return empty;
      for (const key of [...Array.from({length:22}, (_,i) => String(i+1)), 'mixto', 'todos']) {
        const s = saved.blocks[key];
        if (s && Number.isInteger(s.attempts) && s.attempts > 0 && Number.isFinite(s.best) && s.best >= 0 && s.best <= 100 && Number.isFinite(s.last) && s.last >= 0 && s.last <= 100) {
          empty.blocks[key] = {attempts:s.attempts, best:s.best, last:s.last, lastCount:Number.isInteger(s.lastCount) ? s.lastCount : 0, lastAt:typeof s.lastAt === 'string' ? s.lastAt : ''};
        }
      }
    } catch (_) { /* El test funciona aunque el almacenamiento esté bloqueado. */ }
    return empty;
  }
  function populateBlocks() {
    const all = el('option','Quiz completo · Todas las 176 preguntas'); all.value='todos'; $('testBlock').append(all);
    for (const b of blocks) {
      const option = el('option', `Bloque ${String(b.number).padStart(2,'0')} · ${b.title}`);
      option.value = String(b.number);
      $('testBlock').append(option);
    }
    const mixed = el('option','Repaso general · 10 preguntas de bloques distintos');
    mixed.value = 'mixto'; $('testBlock').append(mixed);
    const requested = new URLSearchParams(location.search).get('bloque');
    const number = Number(requested);
    $('testBlock').value = requested === 'mixto' ? 'mixto' : (Number.isInteger(number) && number >= 1 && number <= 22 ? String(number) : 'todos');
    updateMode();
  }
  function updateMode() {
    const all = $('testBlock').value === 'todos';
    const mixed = $('testBlock').value === 'mixto';
    $('testLength').disabled = mixed || all;
    $('testLength').closest('div').hidden = all || mixed;
    $('modeInfo').textContent = all ? 'Incluye todo el banco: 176 preguntas; cada ítem aparece una vez por intento. Se presentan de a una y podés volver a las anteriores antes de finalizar.' : mixed
      ? 'El test general elige 10 bloques distintos al azar: una pregunta por cada uno de los cinco temas, más dos conceptuales y tres de aplicación.'
      : 'El test básico incluye una pregunta de cada uno de los cinco temas y una de las tres prácticas al azar. El completo incluye los cinco temas y las tres prácticas.';
  }
  function historyView() {
    $('historyGrid').replaceChildren();
    const completed = blocks.filter(b => history.blocks[String(b.number)]).length;
    $('historyNote').textContent = `${completed} de 22 bloques practicados individualmente. El mejor porcentaje puede corresponder a un test básico o completo. El quiz completo y el test general se registran por separado.`;
    for (const b of [...blocks, {number:'mixto',title:'Repaso general'}, {number:'todos',title:'Quiz completo · 176 preguntas'}]) {
      const key = String(b.number), s = history.blocks[key];
      const card = el('article', undefined, 'history-card');
      card.append(el('h3',key === 'todos' ? 'Quiz completo' : key === 'mixto' ? 'Test general' : `Bloque ${key.padStart(2,'0')}`));
      card.append(el('p',b.title));
      card.append(el('p',s ? `Mejor: ${s.best}% · Último: ${s.last}% (${s.lastCount} preguntas)` : 'Todavía sin intentos finalizados.', 'muted'));
      if (s) card.append(el('p',`Intentos: ${s.attempts}`, 'muted'));
      const button = el('button','Practicar'); button.type='button';
      button.addEventListener('click', () => { $('testBlock').value=key; updateMode(); start(); });
      card.append(button); $('historyGrid').append(card);
    }
  }
  function start() {
    const key = $('testBlock').value;
    const count = Number($('testLength').value);
    let selected;
    if (key === 'todos') {
      selected=blocks.flatMap(block => block.questions.map(question => ({block,question})));
    } else if (key === 'mixto') {
      selected = shuffled(blocks).slice(0,10).map((block,i) => {
        const question = i < 5 ? block.questions[i] : shuffled(block.questions.filter(q => q.kind === (i < 8 ? 'practica' : 'teoria')))[0];
        return {block, question};
      });
    } else {
      const block = blocks.find(b => String(b.number) === key);
      if (!block) return;
      const questions = count === 8 ? block.questions.slice() : [
        ...block.questions.filter(q => q.kind === 'teoria'),
        ...shuffled(block.questions.filter(q => q.kind === 'practica')).slice(0,1)
      ];
      selected = questions.map(question => ({block,question}));
    }
    const items = shuffled(selected).map(({block,question}) => ({
      block, question,
      choices:shuffled(question.options.map((text,i) => ({text, isCorrect:i === question.correct})))
    }));
    const now = new Date();
    attempt = {key, items, cursor:0, startedAt:now, finishedAt:null, corrected:false, results:[], correct:0, percentage:0, id:'IRCI-'+now.getTime().toString(36)+'-'+Math.random().toString(36).slice(2,7)};
    $('setup').hidden = true; $('attempt').hidden = false;
    $('result').hidden = true; $('attemptActions').hidden = false;
    $('attemptError').textContent = ''; $('appStatus').textContent = '';
    $('quizForm').reset();
    $('attemptLabel').textContent = key === 'todos' ? 'Autoevaluación · Todo el integrador' : key === 'mixto' ? 'Autoevaluación · Test general' : `Autoevaluación · Bloque ${key.padStart(2,'0')}`;
    $('attemptTitle').textContent = key === 'todos' ? 'Quiz completo · 176 preguntas' : key === 'mixto' ? 'Repaso general aleatorio' : items[0].block.title;
    $('attemptDescription').textContent = `${items.length} preguntas · Una opción por pregunta · Respuestas y explicación al finalizar.`;
    $('studyLink').href = key === 'todos' || key === 'mixto' ? 'irci-integrador.html' : `irci-integrador.html#bloque-${key.padStart(2,'0')}`;
    $('answeredProgress').max = items.length;
    renderQuestions(); $('questionNav').hidden=false; showQuestion(0,false); updateProgress();
    $('attemptTitle').focus(); $('attempt').scrollIntoView({block:'start'});
  }
  function renderQuestions() {
    $('questions').replaceChildren();
    attempt.items.forEach((item,index) => {
      const q=item.question;
      const card=el('section',undefined,'question-card'); card.dataset.questionId=q.id; card.id='question-'+index;
      card.append(el('p',`${index+1}/${attempt.items.length} · Bloque ${String(item.block.number).padStart(2,'0')} · ${q.topic}`,'question-meta'));
      const field=el('fieldset');
      const legend=el('legend',q.prompt); field.append(legend);
      if(q.kind==='practica') {
        const details=el('details',undefined,'case-context'); details.open=true;
        details.append(el('summary','Consultar los datos de esta práctica'));
        const context=el('div',undefined,'case-content');
        // Fragmento del material local, sin respuestas. No se incorpora texto libre del estudiante.
        context.innerHTML=item.block.contextHtml;
        if(context.querySelector('table')) context.prepend(el('p','En pantallas pequeñas, deslizá la tabla de lado para ver todas las columnas.','muted'));
        details.append(context); field.append(details);
      }
      const list=el('div',undefined,'choice-list');
      item.choices.forEach((choice,j) => {
        const label=el('label',undefined,'choice');
        const input=el('input'); input.type='radio'; input.name='answer-'+index; input.value=String(j); input.id=`answer-${index}-${j}`;
        input.addEventListener('change',updateProgress);
        label.htmlFor=input.id;
        label.append(input,el('span',LETTERS[j]+'.','choice-letter'),el('span',choice.text,'choice-text'));
        list.append(label);
      });
      field.append(list); card.append(field); $('questions').append(card);
    });
  }
  function showQuestion(index, focus=true) {
    if(!attempt || attempt.corrected) return;
    attempt.cursor=Math.max(0,Math.min(index,attempt.items.length-1));
    document.querySelectorAll('.question-card').forEach((card,i) => {card.hidden=i!==attempt.cursor;});
    $('questionPosition').textContent=`Pregunta ${attempt.cursor+1} de ${attempt.items.length}`;
    $('prevQuestion').disabled=attempt.cursor===0;
    $('nextQuestion').disabled=attempt.cursor===attempt.items.length-1;
    $('questionJump').value=String(attempt.cursor);
    if(focus){const first=$('question-'+attempt.cursor).querySelector('input');first.focus({preventScroll:true});$('questionNav').scrollIntoView({block:'start'});}
  }
  function selection(index) {
    const checked=document.querySelector(`input[name="answer-${index}"]:checked`);
    return checked ? Number(checked.value) : null;
  }
  function updateProgress() {
    if(!attempt) return;
    const count=attempt.items.filter((_,i) => selection(i)!==null).length;
    $('answeredProgress').value=count;
    $('answeredCount').textContent=`${count} de ${attempt.items.length}`;
    $('attemptError').textContent='';
    const fragment=document.createDocumentFragment();
    attempt.items.forEach((item,i) => {const option=el('option',`${i+1} · Bloque ${String(item.block.number).padStart(2,'0')} · ${selection(i)===null?'Pendiente':'Respondida'}`);option.value=String(i);fragment.append(option);});
    $('questionJump').replaceChildren(fragment);$('questionJump').value=String(attempt.cursor);
  }
  function grade(event) {
    event.preventDefault();
    if(!attempt || attempt.corrected) return;
    const missing=attempt.items.map((_,i) => i).filter(i => selection(i)===null);
    if(missing.length) {
      $('attemptError').textContent=`Falta responder ${missing.length} pregunta${missing.length===1?'':'s'}. Completá todas antes de finalizar.`;
      showQuestion(missing[0],false);
      const first=$('question-'+missing[0]); first.querySelector('input').focus();
      first.scrollIntoView({block:'center'}); return;
    }
    attempt.corrected=true; attempt.finishedAt=new Date();
    $('questionNav').hidden=true;document.querySelectorAll('.question-card').forEach(c=>{c.hidden=false;});
    attempt.results=attempt.items.map((item,i) => {
      const picked=selection(i), right=item.choices.findIndex(c => c.isCorrect);
      const correct=picked===right;
      const card=$('question-'+i); card.classList.add(correct?'correct-card':'wrong-card');
      card.querySelector('fieldset').disabled=true;
      const feedback=el('div',undefined,'feedback');
      feedback.append(el('p',correct?'Respuesta correcta.':'Respuesta a revisar.','verdict'));
      feedback.append(el('p',`Tu respuesta: ${LETTERS[picked]}. ${item.choices[picked].text}`));
      if(!correct) feedback.append(el('p',`Respuesta correcta: ${LETTERS[right]}. ${item.choices[right].text}`));
      const explanation=el('details',undefined,'explanation'); explanation.open=!correct;
      explanation.append(el('summary','Por qué · explicación y repaso'),el('p',item.question.explanation));
      const source=el('a',`Repasar el bloque ${String(item.block.number).padStart(2,'0')} con sus referencias`);
      source.href=`irci-integrador.html#bloque-${String(item.block.number).padStart(2,'0')}`; source.target='_blank'; source.rel='noopener';
      explanation.append(source); feedback.append(explanation); card.append(feedback);
      return {picked,right,correct};
    });
    attempt.correct=attempt.results.filter(r => r.correct).length;
    attempt.percentage=Math.round(100*attempt.correct/attempt.items.length);
    $('resultTitle').textContent=`Resultado: ${attempt.correct} de ${attempt.items.length} · ${attempt.percentage}%`;
    $('resultMessage').textContent=attempt.correct===attempt.items.length
      ? 'Resolviste correctamente todas las preguntas de este intento. Podés repetir para practicar con otro orden o una selección diferente.'
      : 'Revisá las preguntas marcadas y sus explicaciones. Después podés repasar y volver a intentarlo.';
    const topics=new Map();
    attempt.items.forEach((item,i) => {
      const topic=item.question.topic;
      if(!topics.has(topic)) topics.set(topic,{correct:0,total:0});
      const stat=topics.get(topic);stat.total++;if(attempt.results[i].correct)stat.correct++;
    });
    const ul=el('ul',undefined,'topic-list');
    for(const [topic,stat] of topics) ul.append(el('li',`${topic}: ${stat.correct}/${stat.total}`));
    $('topicResults').replaceChildren(ul);
    const old=history.blocks[attempt.key];
    history.blocks[attempt.key]={attempts:(old?.attempts || 0)+1,best:Math.max(old?.best || 0,attempt.percentage),last:attempt.percentage,lastCount:attempt.items.length,lastAt:attempt.finishedAt.toISOString()};
    try {
      localStorage.setItem(HISTORY_KEY,JSON.stringify(history));
      $('persistenceNote').textContent='Se guardó el resumen en este navegador. No se envió a la docente. Podés descargar este resultado.';
    } catch(_) {
      $('persistenceNote').textContent='No se pudo guardar el historial en este navegador. Podés descargar este resultado para conservarlo.';
    }
    $('attemptActions').hidden=true; $('result').hidden=false;
    $('resultTitle').focus(); $('result').scrollIntoView({block:'start'});
  }
  function showSetup() {
    $('attempt').hidden=true; $('setup').hidden=false;
    attempt=null;historyView();$('testBlock').focus();$('setup').scrollIntoView({block:'start'});
  }
  function download() {
    if(!attempt?.corrected) return;
    const lines=[
      'IRCI — Resultado de autoevaluación',
      'Intento: '+attempt.id,
      'Fecha: '+attempt.finishedAt.toLocaleString('es-AR'),
      attempt.key==='todos'?'Quiz completo · 176 preguntas':attempt.key==='mixto'?'Test general':`Bloque ${attempt.key.padStart(2,'0')}`,
      `Resultado: ${attempt.correct}/${attempt.items.length} (${attempt.percentage}%)`,
      'Práctica local. Este archivo no acredita una evaluación supervisada.',''
    ];
    attempt.items.forEach((item,i) => {
      const r=attempt.results[i];
      lines.push(`${i+1}. [Bloque ${String(item.block.number).padStart(2,'0')} · ${item.question.id}] ${item.question.prompt}`,
        'Tu respuesta: '+item.choices[r.picked].text,
        'Respuesta correcta: '+item.choices[r.right].text,
        r.correct?'Resultado: correcta':'Resultado: a revisar',
        'Explicación: '+item.question.explanation,'');
    });
    const url=URL.createObjectURL(new Blob(['\uFEFF'+lines.join('\n')],{type:'text/plain;charset=utf-8'}));
    const a=el('a');a.href=url;a.download=`IRCI_resultado_${attempt.id}.txt`;
    document.body.append(a);a.click();a.remove();setTimeout(() => URL.revokeObjectURL(url),1000);
    $('appStatus').textContent='Se solicitó la descarga del resultado. Verificá la carpeta de descargas.';
  }
  $('setupForm').addEventListener('submit',e => {e.preventDefault();start();});
  $('testBlock').addEventListener('change',updateMode);
  $('randomBlock').addEventListener('click',() => {
    const previous=$('testBlock').value;
    const candidates=blocks.filter(b => String(b.number)!==previous);
    const chosen=shuffled(candidates)[0];
    $('testBlock').value=String(chosen.number); updateMode();
    $('appStatus').textContent=`Se eligió el bloque ${String(chosen.number).padStart(2,'0')}. Pulsá Comenzar test.`;
  });
  $('quizForm').addEventListener('submit',grade);
  $('retryTest').addEventListener('click',start);
  $('chooseAgain').addEventListener('click',showSetup);
  $('leaveTest').addEventListener('click',() => {
    const answered=attempt?.items.some((_,i) => selection(i)!==null);
    if(answered && !window.confirm('Se perderán las respuestas de este intento sin finalizar. ¿Volver a elegir?'))return;
    showSetup();
  });
  $('downloadResult').addEventListener('click',download);
  $('clearHistory').addEventListener('click',() => {
    try {localStorage.removeItem(HISTORY_KEY);history={version:1,blocks:{}};historyView();$('appStatus').textContent='Se borró el historial de tests. Los apuntes del material de repaso se conservan.';}
    catch(_){$('appStatus').textContent='No se pudo borrar el historial en este navegador.';}
  });
  $('prevQuestion').addEventListener('click',()=>showQuestion(attempt.cursor-1));
  $('nextQuestion').addEventListener('click',()=>showQuestion(attempt.cursor+1));
  $('questionJump').addEventListener('change',()=>showQuestion(Number($('questionJump').value)));
  addEventListener('beforeunload',event=>{if(attempt && !attempt.corrected && attempt.items.some((_,i)=>selection(i)!==null)){event.preventDefault();event.returnValue='';}});
  populateBlocks();historyView();
})();
