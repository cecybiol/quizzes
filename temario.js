/* =========================================================
   TEMARIO — datos
   ---------------------------------------------------------
   Edita este array con tu contenido real. Cada entrada:
     modulo:     "IRCI" | "Mantenimiento de HW" | "Mantenimiento de SW" | "AAT"
     claseModulo: clase CSS para el color del chip (mod-irci / mod-hw / mod-sw / mod-aat)
     trimestre:  1, 2 o 3
     tema:       título del tema (edítalo con tus temas reales)
   Los temas de ejemplo son solo placeholders.
   ========================================================= */

const TEMARIO = [
  // IRCI
  { modulo: "IRCI", claseModulo: "mod-irci", trimestre: 1, tema: "Tema 1: Fundamentos e introducción" },
  { modulo: "IRCI", claseModulo: "mod-irci", trimestre: 1, tema: "Tema 2: Normativa y seguridad" },
  { modulo: "IRCI", claseModulo: "mod-irci", trimestre: 2, tema: "Tema 3: Instalación de equipos" },
  { modulo: "IRCI", claseModulo: "mod-irci", trimestre: 2, tema: "Tema 4: Configuración básica" },
  { modulo: "IRCI", claseModulo: "mod-irci", trimestre: 3, tema: "Tema 5: Resolución de incidencias" },
  { modulo: "IRCI", claseModulo: "mod-irci", trimestre: 3, tema: "Tema 6: Repaso y caso práctico final" },

  // Mantenimiento de HW
  { modulo: "Mantenimiento de HW", claseModulo: "mod-hw", trimestre: 1, tema: "Tema 1: Componentes internos del equipo" },
  { modulo: "Mantenimiento de HW", claseModulo: "mod-hw", trimestre: 1, tema: "Tema 2: Herramientas y diagnóstico" },
  { modulo: "Mantenimiento de HW", claseModulo: "mod-hw", trimestre: 2, tema: "Tema 3: Sustitución de componentes" },
  { modulo: "Mantenimiento de HW", claseModulo: "mod-hw", trimestre: 2, tema: "Tema 4: Mantenimiento preventivo" },
  { modulo: "Mantenimiento de HW", claseModulo: "mod-hw", trimestre: 3, tema: "Tema 5: Periféricos y conectividad" },
  { modulo: "Mantenimiento de HW", claseModulo: "mod-hw", trimestre: 3, tema: "Tema 6: Repaso y caso práctico final" },

  // Mantenimiento de SW
  { modulo: "Mantenimiento de SW", claseModulo: "mod-sw", trimestre: 1, tema: "Tema 1: Instalación de sistemas operativos" },
  { modulo: "Mantenimiento de SW", claseModulo: "mod-sw", trimestre: 1, tema: "Tema 2: Gestión de software y licencias" },
  { modulo: "Mantenimiento de SW", claseModulo: "mod-sw", trimestre: 2, tema: "Tema 3: Copias de seguridad y recuperación" },
  { modulo: "Mantenimiento de SW", claseModulo: "mod-sw", trimestre: 2, tema: "Tema 4: Seguridad y antivirus" },
  { modulo: "Mantenimiento de SW", claseModulo: "mod-sw", trimestre: 3, tema: "Tema 5: Actualizaciones y mantenimiento" },
  { modulo: "Mantenimiento de SW", claseModulo: "mod-sw", trimestre: 3, tema: "Tema 6: Repaso y caso práctico final" },

  // AAT
  { modulo: "AAT", claseModulo: "mod-aat", trimestre: 1, tema: "Tema 1: Atención al usuario" },
  { modulo: "AAT", claseModulo: "mod-aat", trimestre: 1, tema: "Tema 2: Comunicación y protocolo" },
  { modulo: "AAT", claseModulo: "mod-aat", trimestre: 2, tema: "Tema 3: Gestión de incidencias y tickets" },
  { modulo: "AAT", claseModulo: "mod-aat", trimestre: 2, tema: "Tema 4: Documentación técnica" },
  { modulo: "AAT", claseModulo: "mod-aat", trimestre: 3, tema: "Tema 5: Resolución de casos" },
  { modulo: "AAT", claseModulo: "mod-aat", trimestre: 3, tema: "Tema 6: Repaso y caso práctico final" },
];

const listado = document.getElementById("listado");
const btnTrimestre = document.getElementById("btnTrimestre");
const btnTema = document.getElementById("btnTema");

function chipModulo(item) {
  return `<span class="chip ${item.claseModulo}">${item.modulo}</span>`;
}

function chipTrimestre(item) {
  return `<span class="trimestre-chip">${item.trimestre}º trimestre</span>`;
}

function renderPorTrimestre() {
  const trimestres = [1, 2, 3];
  listado.innerHTML = trimestres.map(t => {
    const items = TEMARIO.filter(i => i.trimestre === t);
    if (items.length === 0) return "";
    return `
      <section class="group">
        <h2>${t}º trimestre <span class="count">${items.length} temas</span></h2>
        <ul class="tema-list">
          ${items.map(i => `
            <li>
              ${chipModulo(i)}
              <span class="titulo">${i.tema}</span>
            </li>
          `).join("")}
        </ul>
      </section>
    `;
  }).join("");
}

function renderPorTema() {
  const modulos = [...new Set(TEMARIO.map(i => i.modulo))];
  listado.innerHTML = modulos.map(m => {
    const items = TEMARIO.filter(i => i.modulo === m);
    if (items.length === 0) return "";
    return `
      <section class="group">
        <h2>${m} <span class="count">${items.length} temas</span></h2>
        <ul class="tema-list">
          ${items.map(i => `
            <li>
              ${chipTrimestre(i)}
              <span class="titulo">${i.tema}</span>
            </li>
          `).join("")}
        </ul>
      </section>
    `;
  }).join("");
}

function activar(boton) {
  [btnTrimestre, btnTema].forEach(b => {
    b.classList.toggle("active", b === boton);
    b.setAttribute("aria-selected", b === boton ? "true" : "false");
  });
}

btnTrimestre.addEventListener("click", () => {
  activar(btnTrimestre);
  renderPorTrimestre();
});

btnTema.addEventListener("click", () => {
  activar(btnTema);
  renderPorTema();
});

renderPorTrimestre();
