/* =========================================================
   PORTAL DE ACCESOS — configuración
   ---------------------------------------------------------
   Edita aquí el nombre, el código de validación y la página
   de destino de cada módulo. "clase" solo controla el color
   del chip en la tarjeta (mod-irci / mod-hw / mod-sw / mod-aat).

   IMPORTANTE: esto es una comprobación en el navegador (del
   lado del cliente). Cualquiera que mire el código fuente de
   esta página puede ver los códigos. Úsalo como un filtro
   simple para no repartir enlaces directos, no como seguridad
   real. Si necesitas seguridad real, valida el código en un
   backend o usa un servicio de autenticación.
   ========================================================= */

const ACCESOS = {
  irci: {
    nombre: "IRCI",
    etiqueta: "Módulo IRCI",
    codigo: "IRCI-2024",
    destino: "irci.html",
    clase: "mod-irci"
  },
  hw: {
    nombre: "Mantenimiento de HW",
    etiqueta: "Módulo HW",
    codigo: "HW-2024",
    destino: "mantenimiento-hw.html",
    clase: "mod-hw"
  },
  sw: {
    nombre: "Mantenimiento de SW",
    etiqueta: "Módulo SW",
    codigo: "SW-2024",
    destino: "mantenimiento-sw.html",
    clase: "mod-sw"
  },
  aat: {
    nombre: "AAT",
    etiqueta: "Módulo AAT",
    codigo: "AAT-2024",
    destino: "aat.html",
    clase: "mod-aat"
  }
};

const badgesContainer = document.getElementById("badges");
const modalBackdrop = document.getElementById("modalBackdrop");
const terminalTitle = document.getElementById("terminalTitle");
const moduloNombre = document.getElementById("moduloNombre");
const codeForm = document.getElementById("codeForm");
const codeInput = document.getElementById("codeInput");
const statusLine = document.getElementById("statusLine");
const closeModalBtn = document.getElementById("closeModal");
const cancelBtn = document.getElementById("cancelBtn");
const terminalPanel = document.querySelector(".terminal");

let claveActiva = null;

// --- construir las tarjetas a partir de ACCESOS ---
function renderBadges() {
  badgesContainer.innerHTML = "";
  Object.entries(ACCESOS).forEach(([clave, acceso]) => {
    const btn = document.createElement("button");
    btn.className = "badge";
    btn.type = "button";
    btn.setAttribute("data-clave", clave);
    btn.setAttribute("aria-haspopup", "dialog");
    btn.innerHTML = `
      <span class="punch" aria-hidden="true"></span>
      <span class="tag">${acceso.etiqueta}</span>
      <h2>${acceso.nombre}</h2>
      <span class="hint">Solicitar código de acceso</span>
      <span class="barcode" aria-hidden="true">${generarBarcode()}</span>
    `;
    btn.addEventListener("click", () => abrirModal(clave));
    badgesContainer.appendChild(btn);
  });
}

function generarBarcode() {
  let html = "";
  const anchos = [2, 5, 1, 3, 1, 4, 2, 6, 1, 3, 2, 5, 1, 4, 3, 1, 2, 5];
  anchos.forEach(w => {
    html += `<span style="width:${w}px"></span>`;
  });
  return html;
}

// --- modal ---
function abrirModal(clave) {
  claveActiva = clave;
  const acceso = ACCESOS[clave];
  terminalTitle.textContent = `Terminal de acceso — ${acceso.nombre}`;
  moduloNombre.textContent = acceso.nombre;
  statusLine.textContent = "";
  statusLine.className = "status-line";
  codeInput.value = "";
  modalBackdrop.classList.add("open");
  setTimeout(() => codeInput.focus(), 50);
  document.addEventListener("keydown", onKeydown);
}

function cerrarModal() {
  modalBackdrop.classList.remove("open");
  claveActiva = null;
  document.removeEventListener("keydown", onKeydown);
}

function onKeydown(e) {
  if (e.key === "Escape") cerrarModal();
}

modalBackdrop.addEventListener("click", (e) => {
  if (e.target === modalBackdrop) cerrarModal();
});
closeModalBtn.addEventListener("click", cerrarModal);
cancelBtn.addEventListener("click", cerrarModal);

// --- validación ---
codeForm.addEventListener("submit", (e) => {
  e.preventDefault();
  if (!claveActiva) return;

  const acceso = ACCESOS[claveActiva];
  const introducido = codeInput.value.trim();

  if (introducido.toUpperCase() === acceso.codigo.toUpperCase()) {
    statusLine.textContent = "Acceso concedido. Redirigiendo…";
    statusLine.className = "status-line ok";
    setTimeout(() => {
      window.location.href = acceso.destino;
    }, 500);
  } else {
    statusLine.textContent = "Código incorrecto. Inténtalo de nuevo.";
    statusLine.className = "status-line error";
    terminalPanel.classList.remove("shake");
    // forzar reflow para poder repetir la animación
    void terminalPanel.offsetWidth;
    terminalPanel.classList.add("shake");
    codeInput.select();
  }
});

renderBadges();
