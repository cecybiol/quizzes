/* Banco de práctica. Cada pregunta tiene una sola opción correcta. */
window.IRCI_QUIZ_BANK = [
  {
    "number": 1,
    "title": "Reconocimiento de una placa madre",
    "contextHtml": "<h4>Tema Reconocimiento de una placa madre</h4><div class=\"source-p\">Observá la fotografía de la ASUS PRIME H510M-E. Trabajá sobre la imagen.</div><div class=\"source-p\"><figure><img src=\"irci-assets/image2.png\" alt=\"Fotografía del componente incluida en el documento de IRCI\" loading=\"lazy\"><figcaption>Imagen del documento original. La atribución figura en el texto del bloque.</figcaption></figure></div><div class=\"source-p\">Imagen de la placa ASUS PRIME H510M-E. Fuente: ASUS.</div>",
    "questions": [
      {
        "id": "b01-1",
        "kind": "teoria",
        "topic": "Arquitectura y CPU",
        "prompt": "¿Cuál afirmación sobre la ampliación de una portátil es correcta?",
        "options": [
          "RAM y SSD pueden reemplazarse si el diseño del modelo lo permite.",
          "Siempre permite cambiar CPU, GPU y RAM como una torre.",
          "Ninguna portátil permite reemplazar su almacenamiento.",
          "Todas las portátiles tienen la RAM extraíble."
        ],
        "correct": 0,
        "explanation": "Una PC de escritorio suele usar componentes separados y ofrece más espacio para ampliaciones; una portátil integra pantalla, teclado y batería para facilitar el traslado. En una PC de escritorio pueden reemplazarse, por ejemplo, RAM y almacenamiento. En una portátil también pueden reemplazarse RAM y SSD si el modelo usa módulos y unidades extraíbles; puede tener RAM soldada. Se consulta siempre el manual."
      },
      {
        "id": "b01-2",
        "kind": "teoria",
        "topic": "Placa madre y buses",
        "prompt": "¿Cuál es la función principal de la placa madre?",
        "options": [
          "Conectar componentes y proporcionar rutas de comunicación y alimentación.",
          "Conservar permanentemente todos los archivos del usuario.",
          "Convertir por sí sola la corriente de red en todos los voltajes de la PC.",
          "Ejecutar las instrucciones en reemplazo de la CPU."
        ],
        "correct": 0,
        "explanation": "La placa madre es la tarjeta de circuito impreso principal que conecta los componentes de la computadora. Proporciona rutas de comunicación y distribuye la alimentación mediante sus conectores y circuitos reguladores. Aloja el socket de CPU, las ranuras RAM y de expansión, el chipset y el firmware BIOS/UEFI."
      },
      {
        "id": "b01-3",
        "kind": "teoria",
        "topic": "Memoria RAM",
        "prompt": "¿Por qué se dice que la RAM es volátil?",
        "options": [
          "Pierde su contenido cuando deja de recibir alimentación.",
          "Conserva los archivos sin energía durante años.",
          "Solo permite leer datos, sin modificarlos.",
          "Cambia de capacidad según la cantidad de programas instalados."
        ],
        "correct": 0,
        "explanation": "La RAM es la memoria de trabajo del sistema: almacena temporalmente los datos y las instrucciones de los programas en ejecución que necesita el procesador. En equipos con módulos, estos incluyen chips, contactos y una muesca de orientación. Es volátil porque pierde su contenido cuando deja de recibir alimentación."
      },
      {
        "id": "b01-4",
        "kind": "teoria",
        "topic": "Almacenamiento",
        "prompt": "¿Qué diferencia distingue a un SSD de un HDD?",
        "options": [
          "El SSD usa memoria flash y no tiene platos giratorios.",
          "El SSD usa platos magnéticos y cabezales móviles.",
          "El HDD no tiene ninguna pieza mecánica.",
          "El HDD necesita RAM para conservar archivos al apagarlo."
        ],
        "correct": 0,
        "explanation": "El HDD guarda datos en platos magnéticos que giran y utiliza cabezales; el SSD usa memoria flash NAND, sin partes móviles. El SSD suele tener menor tiempo de acceso, menos ruido y mayor resistencia a golpes. El HDD suele ofrecer menor costo por GB. Ambos conservan los datos sin alimentación, pero no reemplazan una copia de seguridad."
      },
      {
        "id": "b01-5",
        "kind": "teoria",
        "topic": "Expansión y conectividad",
        "prompt": "¿Qué relación entre pantalla, GPU y tarjeta gráfica es correcta?",
        "options": [
          "La pantalla muestra la imagen; la GPU la procesa; la tarjeta puede integrar GPU y VRAM.",
          "La pantalla ejecuta el cálculo gráfico y la GPU solo lo muestra.",
          "GPU y pantalla son dos nombres del mismo dispositivo.",
          "Una tarjeta gráfica dedicada es únicamente un cable de video."
        ],
        "correct": 0,
        "explanation": "La pantalla muestra la imagen. La GPU es el procesador que realiza el trabajo gráfico. Una tarjeta gráfica dedicada es una placa de expansión que incorpora una GPU, normalmente VRAM propia, refrigeración y salidas de video. Una GPU también puede estar integrada en el procesador y usar parte de la RAM del equipo."
      },
      {
        "id": "b01-6a",
        "kind": "practica",
        "topic": "Aplicación práctica",
        "prompt": "¿Qué conjunto corresponde a conexiones de la ASUS PRIME H510M-E mostrada?",
        "options": [
          "CPU en socket, RAM en DIMM y gráfica en PCIe x16.",
          "CPU en SATA, RAM en PCIe x16 y gráfica en DIMM.",
          "CPU en DIMM, RAM en socket y gráfica en SATA.",
          "CPU en PCIe x16, RAM en SATA y gráfica en socket."
        ],
        "correct": 0,
        "explanation": "En la fotografía, con los conectores traseros a la izquierda, el socket es el alojamiento cuadrado del procesador, en la zona superior central. Las dos ranuras DIMM largas están a su derecha; la PCIe x16 larga queda debajo del socket. Los SATA se reconocen por su forma acodada en L hacia el borde derecho/inferior. Confirmar sus rótulos con el manual P1 del anexo."
      },
      {
        "id": "b01-6b",
        "kind": "practica",
        "topic": "Aplicación práctica",
        "prompt": "¿Qué se conecta normalmente a un puerto SATA de la placa del caso?",
        "options": [
          "El cable de datos de una unidad SATA.",
          "El conector principal ATX de 24 pines.",
          "La memoria RAM DDR4 directamente.",
          "El ventilador de CPU de cuatro pines."
        ],
        "correct": 0,
        "explanation": "En el socket se instala la CPU; en las ranuras DIMM, la RAM; en PCIe x16, una tarjeta gráfica compatible; y en SATA, el cable de datos de HDD, SSD SATA o unidad óptica. El ATX de 24 pines, junto al borde derecho, alimenta la placa madre. El conector de CPU de 8 pines está en la zona superior izquierda."
      },
      {
        "id": "b01-6c",
        "kind": "practica",
        "topic": "Aplicación práctica",
        "prompt": "¿Antes de agregar una gráfica, qué grupo de verificaciones corresponde?",
        "options": [
          "Ranura compatible, espacio del gabinete y alimentación suficiente.",
          "Solo que la tarjeta tenga más VRAM que la anterior.",
          "Solo coincidencia de la generación PCIe, ignorando fuente y espacio.",
          "Solo que el monitor tenga el mismo tipo de conector externo."
        ],
        "correct": 0,
        "explanation": "Para RAM verificaría generación y formato, por ejemplo DDR4 DIMM, capacidad y organización admitidas, y perfiles de tasa/voltaje compatibles. Para una tarjeta comprobaría la ranura PCIe y sus líneas, el espacio del gabinete y la potencia/conectores de la fuente. También revisaría los controladores del sistema operativo. Los requisitos de una RAM no son los mismos que los de una gráfica."
      }
    ]
  },
  {
    "number": 2,
    "title": "CPU y placa de destino",
    "contextHtml": "<h4>Tema CPU y placa de destino</h4><div class=\"source-p\">Placa de destino: ASUS PRIME H510M-E, LGA1200, DDR4 DIMM. Su lista admite el i3-10100 desde BIOS 0211; el equipo del caso tiene BIOS 0211.</div><div class=\"table-scroll\" tabindex=\"0\" role=\"region\" aria-label=\"Tabla técnica desplazable\"><table><thead><tr><th scope=\"col\"><div class=\"source-p\">Dato</div></th><th scope=\"col\"><div class=\"source-p\">Intel Core i3-10100</div></th><th scope=\"col\"><div class=\"source-p\">Intel Core i5-12400F</div></th></tr></thead><tbody><tr><td><div class=\"source-p\">Socket</div></td><td><div class=\"source-p\">LGA1200</div></td><td><div class=\"source-p\">LGA1700</div></td></tr><tr><td><div class=\"source-p\">Núcleos e hilos</div></td><td><div class=\"source-p\">4 / 8</div></td><td><div class=\"source-p\">6 / 12</div></td></tr><tr><td><div class=\"source-p\">Memoria admitida</div></td><td><div class=\"source-p\">DDR4-2666</div></td><td><div class=\"source-p\">DDR4-3200 o DDR5-4800</div></td></tr><tr><td><div class=\"source-p\">Gráfica integrada</div></td><td><div class=\"source-p\">UHD 630</div></td><td><div class=\"source-p\">No tiene</div></td></tr></tbody></table></div><div class=\"source-p\">Datos técnicos de fabricantes citados en el anexo; condiciones del caso indicadas en el ejercicio.</div>",
    "questions": [
      {
        "id": "b02-1",
        "kind": "teoria",
        "topic": "Arquitectura y CPU",
        "prompt": "¿Qué caracteriza a un servidor?",
        "options": [
          "Proporciona servicios a otros equipos, como archivos o páginas web.",
          "Solo ejecuta cálculos científicos y nunca atiende una red.",
          "Es cualquier PC que tiene una pantalla grande.",
          "Es un dispositivo dedicado exclusivamente a imprimir."
        ],
        "correct": 0,
        "explanation": "Las supercomputadoras son sistemas de gran capacidad de cálculo utilizados, por ejemplo, para simulaciones científicas. Los servidores proporcionan servicios a otros equipos, como archivos o páginas web de la escuela. Las computadoras personales están orientadas al uso individual, por ejemplo para estudiar o programar. “Servidor” describe una función: una PC también puede prestar un servicio de red."
      },
      {
        "id": "b02-2",
        "kind": "teoria",
        "topic": "Placa madre y buses",
        "prompt": "¿Qué afirmación sobre el chipset es más precisa?",
        "options": [
          "Participa en conexiones y funciones de la placa; algunas funciones están integradas en la CPU.",
          "Es la memoria que conserva los archivos del usuario.",
          "Es un programa del sistema operativo que sustituye a la BIOS.",
          "Toda comunicación CPU-RAM pasa obligatoriamente por él en cualquier arquitectura."
        ],
        "correct": 0,
        "explanation": "El chipset es un conjunto de circuitos de la placa madre que participa en la comunicación con dispositivos y en las funciones disponibles, como SATA, USB y líneas PCIe. Influye en las CPU y tecnologías compatibles. En arquitecturas modernas, el controlador de RAM y algunas líneas PCIe pueden estar integrados en la CPU; no todos los datos atraviesan el chipset."
      },
      {
        "id": "b02-3",
        "kind": "teoria",
        "topic": "Memoria RAM",
        "prompt": "¿Qué par reúne requisitos de compatibilidad de RAM?",
        "options": [
          "Generación DDR y formato DIMM o SO-DIMM.",
          "Capacidad de RAM y espacio libre del SSD.",
          "Tasa de transferencia y latencia, sin revisar el formato.",
          "Marca del módulo y cantidad de aplicaciones abiertas."
        ],
        "correct": 0,
        "explanation": "Compatibilidad: la generación de RAM debe coincidir con la admitida, por ejemplo DDR4, y el formato físico debe ser el adecuado, como DIMM o SO-DIMM. Rendimiento: la capacidad determina cuánto trabajo puede mantenerse en RAM y la tasa de transferencia indica cuántas transferencias se realizan por segundo. También importa la latencia; se compara considerando la tasa efectiva."
      },
      {
        "id": "b02-4",
        "kind": "teoria",
        "topic": "Almacenamiento",
        "prompt": "¿Qué diferencia hay entre PATA y SATA?",
        "options": [
          "PATA es paralelo y usa otro cable/conector; SATA es serial.",
          "PATA y SATA son el mismo conector con distinto nombre.",
          "SATA es paralelo y PATA es serial.",
          "PATA solo conecta RAM y SATA solo tarjetas de red."
        ],
        "correct": 0,
        "explanation": "IDE/PATA usa transferencia paralela y cables anchos; SATA utiliza transferencia serial y cables de datos más delgados. Sus conectores no son intercambiables. PATA alcanzó hasta 133 MB/s; SATA III tiene un límite de interfaz de unos 600 MB/s, que no es la velocidad garantizada del disco. El intercambio en caliente requiere soporte de equipo, controladora y configuración."
      },
      {
        "id": "b02-5",
        "kind": "teoria",
        "topic": "Expansión y conectividad",
        "prompt": "¿Qué distingue habitualmente a una gráfica dedicada de una integrada?",
        "options": [
          "La dedicada incorpora GPU separada y normalmente VRAM propia.",
          "La dedicada utiliza siempre la RAM del sistema como única memoria.",
          "La integrada se conecta siempre como tarjeta PCIe extraíble.",
          "La integrada necesita una pantalla diferente para cada núcleo de CPU."
        ],
        "correct": 0,
        "explanation": "La GPU integrada forma parte del procesador o de otro circuito integrado del sistema y habitualmente comparte RAM. Una gráfica dedicada dispone de una GPU separada y normalmente VRAM propia. Puede ofrecer más rendimiento para ciertas tareas, a cambio de costo, espacio y consumo; la comparación depende de los modelos concretos."
      },
      {
        "id": "b02-6a",
        "kind": "practica",
        "topic": "Aplicación práctica",
        "prompt": "¿Qué CPU del caso puede instalarse en la ASUS PRIME H510M-E con BIOS 0211?",
        "options": [
          "Core i3-10100, porque coincide LGA1200 y el soporte de BIOS indicado.",
          "Core i5-12400F, porque tiene más núcleos.",
          "Ambas, porque todos los Intel Core usan el mismo socket.",
          "Ninguna, porque una placa DDR4 no puede usar Intel Core."
        ],
        "correct": 0,
        "explanation": "Puede instalarse el Intel Core i3-10100: usa LGA1200 y, según los datos del ejercicio, está admitido desde BIOS 0211, que es la instalada. El Core i5-12400F usa LGA1700 y no corresponde a ese socket. La mayor cantidad de núcleos no compensa una incompatibilidad física."
      },
      {
        "id": "b02-6b",
        "kind": "practica",
        "topic": "Aplicación práctica",
        "prompt": "¿Además del socket, qué debe verificarse para la CPU del caso?",
        "options": [
          "BIOS compatible, RAM admitida y refrigeración adecuada.",
          "Solo que coincida el socket, porque eso confirma todas las demás condiciones.",
          "Solo que el disipador se pueda atornillar, sin comprobar su altura ni capacidad térmica.",
          "Solo que la CPU tenga una frecuencia mayor que la anterior."
        ],
        "correct": 0,
        "explanation": "Confirmaría el modelo de CPU en la lista oficial y la versión de BIOS requerida; que la RAM sea DDR4 y funcione con un perfil admitido por CPU y placa; y que el disipador tenga anclaje LGA1200, capacidad térmica adecuada y espacio suficiente. También revisaría la alimentación de placa y CPU."
      },
      {
        "id": "b02-6c",
        "kind": "practica",
        "topic": "Aplicación práctica",
        "prompt": "¿Qué necesita el i5-12400F para dar imagen en una placa compatible?",
        "options": [
          "Una gráfica dedicada y el monitor conectado a sus salidas.",
          "Un cable HDMI en la placa madre, sin ninguna GPU.",
          "Cambiar la RAM por un módulo de más capacidad.",
          "Formatear el SSD para activar una GPU integrada inexistente."
        ],
        "correct": 0,
        "explanation": "El i5-12400F no tiene gráfica integrada. En una placa compatible necesita una tarjeta gráfica dedicada o un dispositivo gráfico compatible para obtener imagen; el monitor debe conectarse a las salidas de esa tarjeta, no a las de la placa madre que dependen de la gráfica de la CPU."
      }
    ]
  },
  {
    "number": 3,
    "title": "Lectura y comparación de procesadores",
    "contextHtml": "<h4>Tema Lectura y comparación de procesadores</h4><div class=\"source-p\">Destino: ASUS PRIME H510M-E, LGA1200 y BIOS 0211. La lista oficial admite ambas CPU desde esa versión.</div><div class=\"table-scroll\" tabindex=\"0\" role=\"region\" aria-label=\"Tabla técnica desplazable\"><table><thead><tr><th scope=\"col\"><div class=\"source-p\">Parámetro</div></th><th scope=\"col\"><div class=\"source-p\">Intel Core i3-10100</div></th><th scope=\"col\"><div class=\"source-p\">Intel Core i5-10400</div></th></tr></thead><tbody><tr><td><div class=\"source-p\">Núcleos e hilos</div></td><td><div class=\"source-p\">4 / 8</div></td><td><div class=\"source-p\">6 / 12</div></td></tr><tr><td><div class=\"source-p\">Frecuencia base</div></td><td><div class=\"source-p\">3,60 GHz</div></td><td><div class=\"source-p\">2,90 GHz</div></td></tr><tr><td><div class=\"source-p\">Turbo máximo</div></td><td><div class=\"source-p\">4,30 GHz</div></td><td><div class=\"source-p\">4,30 GHz</div></td></tr><tr><td><div class=\"source-p\">Caché L3</div></td><td><div class=\"source-p\">6 MB</div></td><td><div class=\"source-p\">12 MB</div></td></tr><tr><td><div class=\"source-p\">Socket y TDP</div></td><td><div class=\"source-p\">LGA1200 / 65 W</div></td><td><div class=\"source-p\">LGA1200 / 65 W</div></td></tr></tbody></table></div><div class=\"source-p\">Datos técnicos de fabricantes citados en el anexo; condiciones del caso indicadas en el ejercicio.</div>",
    "questions": [
      {
        "id": "b03-1",
        "kind": "teoria",
        "topic": "Arquitectura y CPU",
        "prompt": "¿Qué componente convierte la energía de la red en corriente continua regulada?",
        "options": [
          "La fuente de alimentación.",
          "La memoria RAM.",
          "El disco SSD.",
          "El panel frontal."
        ],
        "correct": 0,
        "explanation": "La CPU ejecuta instrucciones y operaciones; la placa madre conecta y comunica los componentes; la RAM conserva temporalmente el trabajo activo; el almacenamiento HDD/SSD conserva sistema, programas y archivos sin alimentación; y la fuente transforma corriente alterna en continua regulada. También intervienen refrigeración, gabinete y, cuando corresponde, una tarjeta gráfica dedicada."
      },
      {
        "id": "b03-2",
        "kind": "teoria",
        "topic": "Placa madre y buses",
        "prompt": "¿Qué describen ATX, microATX y Mini-ITX?",
        "options": [
          "Factores de forma con dimensiones y condiciones de montaje.",
          "Generaciones eléctricas de ranuras RAM.",
          "Protocolos de transferencia entre CPU y SSD.",
          "Niveles de rendimiento de chipsets de Intel."
        ],
        "correct": 0,
        "explanation": "ATX, microATX y Mini-ITX son factores de forma que definen dimensiones y montaje. Sus tamaños de referencia son 305 × 244 mm, hasta 244 × 244 mm y 170 × 170 mm, respectivamente. Las placas pequeñas suelen ofrecer menos espacio de expansión. La cantidad real de conectores depende del modelo, y el gabinete debe admitir el formato."
      },
      {
        "id": "b03-3",
        "kind": "teoria",
        "topic": "Memoria RAM",
        "prompt": "¿Qué diferencia conceptual hay entre DDR y DIMM?",
        "options": [
          "DDR describe una tecnología de transferencia y DIMM un formato de módulo.",
          "Ambos indican exclusivamente la capacidad en GB.",
          "DDR es una interfaz de disco y DIMM un tipo de CPU.",
          "DIMM indica la velocidad de Internet y DDR el voltaje de la fuente."
        ],
        "correct": 0,
        "explanation": "DDR significa Double Data Rate: realiza transferencias en ambos flancos del reloj, dos por ciclo. DIMM identifica un formato de módulo con contactos eléctricos independientes en sus dos caras. DDR describe una tecnología de memoria; DIMM, su presentación física. Por eso puede haber módulos DIMM de distintas generaciones DDR, que no son intercambiables entre sí."
      },
      {
        "id": "b03-4",
        "kind": "teoria",
        "topic": "Almacenamiento",
        "prompt": "¿Qué comparación HDD/SSD es correcta?",
        "options": [
          "El HDD tiene platos y cabezal; el SSD usa flash y suele ofrecer menor latencia.",
          "El SSD tiene un motor de mayor velocidad que el HDD.",
          "Ambos dependen de platos magnéticos para almacenar datos.",
          "El HDD es volátil y pierde sus archivos al apagarlo."
        ],
        "correct": 0,
        "explanation": "1) HDD: platos magnéticos y piezas móviles; SSD: memoria flash. 2) El SSD suele tener menor latencia y mayor velocidad de acceso. 3) El HDD genera ruido mecánico; el SSD es silencioso. 4) El SSD tolera mejor los golpes durante el uso; el HDD suele resultar más económico por GB. El consumo y rendimiento exactos dependen del modelo."
      },
      {
        "id": "b03-5",
        "kind": "teoria",
        "topic": "Expansión y conectividad",
        "prompt": "¿Dónde conectás el monitor para utilizar una gráfica dedicada instalada?",
        "options": [
          "En una salida de video de la propia tarjeta gráfica.",
          "En el conector SATA de la placa madre.",
          "En cualquier USB, sin consultar funciones ni adaptadores.",
          "Obligatoriamente en el HDMI de la placa madre."
        ],
        "correct": 0,
        "explanation": "Para usar la tarjeta dedicada, conectaría el monitor a un puerto de salida de esa tarjeta, como HDMI o DisplayPort. Las salidas de la placa madre no se convierten automáticamente en salidas de la tarjeta instalada. Su funcionamiento depende de que exista una GPU integrada compatible y de la configuración del equipo."
      },
      {
        "id": "b03-6a",
        "kind": "practica",
        "topic": "Aplicación práctica",
        "prompt": "¿Según la tabla, qué comparación i3-10100/i5-10400 es correcta?",
        "options": [
          "El i5 tiene más núcleos, hilos y caché; el i3 tiene mayor frecuencia base.",
          "El i3 tiene más núcleos y el i5 tiene mayor frecuencia base.",
          "Ambos tienen seis núcleos y la misma caché L3.",
          "El i5 tiene menos hilos, pero el doble de frecuencia base."
        ],
        "correct": 0,
        "explanation": "El i5-10400 tiene más núcleos e hilos, 6/12 frente a 4/8, y más caché L3, 12 MB frente a 6 MB. El i3-10100 tiene mayor frecuencia base: 3,60 GHz frente a 2,90 GHz. Ambos anuncian hasta 4,30 GHz de turbo. Una sola cifra no resume todo su rendimiento."
      },
      {
        "id": "b03-6b",
        "kind": "practica",
        "topic": "Aplicación práctica",
        "prompt": "¿Entre esas CPU, qué dato justifica preferir el i5-10400 para varias aplicaciones?",
        "options": [
          "Sus 6 núcleos y 12 hilos frente a 4 núcleos y 8 hilos.",
          "Que su frecuencia base de 2,90 GHz es mayor que 3,60 GHz.",
          "Que usa LGA1700 en lugar de LGA1200.",
          "Que elimina la necesidad de memoria RAM."
        ],
        "correct": 0,
        "explanation": "Para varias aplicaciones simultáneas elegiría, entre estas opciones, el i5-10400. Sus 6 núcleos y 12 hilos ofrecen más recursos para distribuir trabajo que los 4 núcleos y 8 hilos del i3. Sus 12 MB de caché L3 también son un dato relevante. La mejora concreta dependerá de las aplicaciones y del resto del equipo."
      },
      {
        "id": "b03-6c",
        "kind": "practica",
        "topic": "Aplicación práctica",
        "prompt": "¿Por qué ambas CPU del caso son compatibles con la placa indicada?",
        "options": [
          "Comparten LGA1200 y la lista del caso las admite con BIOS 0211.",
          "Porque tienen la misma marca, sin importar el modelo.",
          "Porque tener la misma frecuencia turbo garantiza compatibilidad.",
          "Porque cualquier procesador funciona si el gabinete es ATX."
        ],
        "correct": 0,
        "explanation": "Según los datos del ejercicio, ambas CPU usan LGA1200 y están admitidas por la ASUS PRIME H510M-E desde BIOS 0211. El socket por sí solo no basta: deben coincidir también el soporte del chipset, el firmware y los requisitos eléctricos/térmicos. Aquí se confirma la BIOS porque el caso la informa; en un equipo real se comprobaría."
      }
    ]
  },
  {
    "number": 4,
    "title": "Refrigeración y espacio disponible",
    "contextHtml": "<h4>Tema Refrigeración y espacio disponible</h4><div class=\"source-p\">Las dimensiones del gabinete son una condición del ejercicio. Las de CPU y disipador corresponden a sus fichas oficiales.</div><div class=\"table-scroll\" tabindex=\"0\" role=\"region\" aria-label=\"Tabla técnica desplazable\"><table><thead><tr><th scope=\"col\"><div class=\"source-p\">Dato del material</div></th><th scope=\"col\"><div class=\"source-p\">Especificación</div></th></tr></thead><tbody><tr><td><div class=\"source-p\">CPU</div></td><td><div class=\"source-p\">Intel Core i5-10400, LGA1200, TDP 65 W</div></td></tr><tr><td><div class=\"source-p\">Disipador</div></td><td><div class=\"source-p\">Noctua NH-U12S redux</div></td></tr><tr><td><div class=\"source-p\">Anclajes relevantes</div></td><td><div class=\"source-p\">LGA1200 y LGA1700 con kit adecuado</div></td></tr><tr><td><div class=\"source-p\">Altura con ventilador</div></td><td><div class=\"source-p\">158 mm</div></td></tr><tr><td><div class=\"source-p\">Gabinete del caso</div></td><td><div class=\"source-p\">Admite disipadores de hasta 150 mm</div></td></tr></tbody></table></div><div class=\"source-p\">Datos técnicos de fabricantes citados en el anexo; condiciones del caso indicadas en el ejercicio.</div>",
    "questions": [
      {
        "id": "b04-1",
        "kind": "teoria",
        "topic": "Arquitectura y CPU",
        "prompt": "¿Qué caracteriza al modelo de Von Neumann?",
        "options": [
          "Datos e instrucciones comparten memoria y la CPU ejecuta instrucciones.",
          "Los programas se ejecutan sin memoria principal.",
          "Cada periférico reemplaza a la unidad de control.",
          "Solo se almacenan datos; las instrucciones nunca se guardan."
        ],
        "correct": 0,
        "explanation": "El modelo incluye CPU, memoria principal, dispositivos de entrada/salida y un sistema de interconexión. La CPU comprende unidad de control, unidad aritmético-lógica y registros. Datos e instrucciones comparten memoria. Los buses permiten buscarlos y ejecutar el ciclo de instrucción, intercambiando información con la memoria y los periféricos."
      },
      {
        "id": "b04-2",
        "kind": "teoria",
        "topic": "Placa madre y buses",
        "prompt": "¿Para un bus paralelo ideal de 100 MHz, 2 transferencias/ciclo y 64 bits, cuál es el ancho de banda?",
        "options": [
          "1600 MB/s, al dividir los bits por 8 para obtener bytes.",
          "12800 MB/s, sin convertir bits a bytes.",
          "800 MB/s, ignorando la segunda transferencia por ciclo.",
          "1600 MHz, porque ancho de banda y frecuencia tienen la misma unidad."
        ],
        "correct": 0,
        "explanation": "Los parámetros son ancho del bus, frecuencia o tasa de transferencias, tipo serial/paralelo, ancho de banda y latencia. Para un bus paralelo ideal: MB/s = MHz × transferencias por ciclo × ancho en bits ÷ 8. Ejemplo: 100 MHz × 2 × 64 ÷ 8 = 1600 MB/s. En enlaces seriales se consideran además líneas, codificación y sobrecarga; no basta aplicar esa fórmula sin adaptar el modelo."
      },
      {
        "id": "b04-3",
        "kind": "teoria",
        "topic": "Memoria RAM",
        "prompt": "¿Qué afirmación sobre SIMM, DIMM y SO-DIMM es correcta?",
        "options": [
          "DIMM tiene contactos independientes en sus caras y SO-DIMM es un formato más compacto.",
          "SO-DIMM es una generación de RAM que reemplaza a DDR4.",
          "SIMM y DIMM difieren solo en la capacidad y siempre usan la misma ranura.",
          "DIMM y SO-DIMM tienen el mismo tamaño y contactos, pero distinta tasa."
        ],
        "correct": 0,
        "explanation": "SIMM es un formato antiguo con contactos de ambas caras eléctricamente unidos. DIMM tiene contactos independientes en ambas caras y es habitual en equipos de escritorio. SO-DIMM es un formato más compacto usado en muchas portátiles. El formato no determina por sí solo la generación DDR; hay que comprobar ambos y no forzar módulos en ranuras distintas."
      },
      {
        "id": "b04-4",
        "kind": "teoria",
        "topic": "Almacenamiento",
        "prompt": "¿Qué se debe comprobar en una ranura M.2 para almacenamiento?",
        "options": [
          "Protocolo admitido, llave y tamaño, además del formato físico.",
          "Solo que la unidad tenga un tornillo.",
          "Solo que el SSD sea más rápido que el HDD anterior.",
          "Solo que la placa tenga algún conector parecido."
        ],
        "correct": 0,
        "explanation": "M.2 es un formato y una especificación de conexión; no identifica una única interfaz de almacenamiento. Un SSD M.2 puede usar SATA, normalmente con AHCI, o PCIe con NVMe. Deben coincidir el protocolo admitido por la placa, la llave del conector y el tamaño, por ejemplo 2280. Que entre físicamente no confirma que funcione."
      },
      {
        "id": "b04-5",
        "kind": "teoria",
        "topic": "Expansión y conectividad",
        "prompt": "¿Qué es memoria gráfica compartida?",
        "options": [
          "Una parte de la RAM del sistema utilizada por la GPU.",
          "La VRAM exclusiva de toda tarjeta dedicada.",
          "Espacio del SSD que reemplaza los conectores de la pantalla.",
          "Una memoria que se conserva sin alimentación."
        ],
        "correct": 0,
        "explanation": "La memoria gráfica dedicada es la VRAM asociada a una GPU, disponible para sus datos gráficos. La memoria compartida es una parte de la RAM del sistema que puede usar la GPU. Compartir memoria reduce la RAM disponible para otras tareas y tiene características de acceso diferentes. No debe sumarse memoria compartida como si fuera VRAM dedicada equivalente."
      },
      {
        "id": "b04-6a",
        "kind": "practica",
        "topic": "Aplicación práctica",
        "prompt": "¿Cabe el Noctua de 158 mm en el gabinete que admite 150 mm?",
        "options": [
          "No: supera el límite en 8 mm, aunque el anclaje pueda ser compatible.",
          "Sí: LGA1200 garantiza que cierre cualquier gabinete.",
          "Sí: la diferencia se compensa conectándolo a CPU_FAN.",
          "No: porque LGA1200 nunca admite disipadores por aire."
        ],
        "correct": 0,
        "explanation": "El disipador admite LGA1200 si se dispone del kit correcto, por lo que el anclaje puede ser compatible. Sin embargo, no cabe según el caso: mide 158 mm y el gabinete admite hasta 150 mm, una diferencia de 8 mm. No debe forzarse el cierre; hace falta otro disipador o un gabinete con espacio suficiente."
      },
      {
        "id": "b04-6b",
        "kind": "practica",
        "topic": "Aplicación práctica",
        "prompt": "¿Qué revisarías para elegir otro disipador para este caso?",
        "options": [
          "Anclaje, compatibilidad térmica y altura total admitida por el gabinete.",
          "Solo compatibilidad de socket; la altura y potencia térmica no influyen.",
          "Solo el mayor número de RPM, sin revisar el anclaje.",
          "Solo el TDP impreso de la CPU, ignorando gabinete y lista de compatibilidad."
        ],
        "correct": 0,
        "explanation": "Revisaría socket y kit de montaje, compatibilidad térmica con el i5-10400, altura total no mayor que el límite del gabinete y espacio con RAM y otros componentes. La coincidencia del socket y un valor de TDP aislado no garantizan que el conjunto sea adecuado; consultaría la compatibilidad y las medidas del fabricante."
      },
      {
        "id": "b04-6c",
        "kind": "practica",
        "topic": "Aplicación práctica",
        "prompt": "¿Dónde va el ventilador de la CPU y qué comprobás luego?",
        "options": [
          "En CPU_FAN; revisar giro, RPM y temperaturas.",
          "En SATA; revisar que aparezca como disco.",
          "En el conector de audio; revisar volumen.",
          "En PCIe; verificar capacidad de VRAM."
        ],
        "correct": 0,
        "explanation": "El ventilador del disipador se conecta a CPU_FAN. Después revisaría fijación, interfaz térmica y cables libres de las aspas; al encender, comprobaría giro y lectura de RPM. Controlaría temperaturas en reposo y carga frente a las especificaciones de esa CPU y su comportamiento, sin tomar el límite Tjunction como temperatura objetivo."
      }
    ]
  },
  {
    "number": 5,
    "title": "RAM y formato de la ranura",
    "contextHtml": "<h4>Tema RAM y formato de la ranura</h4><div class=\"source-p\">La placa del caso tiene ranuras DIMM DDR4 de 288 contactos y admite módulos de 8 GB, no ECC y sin búfer.</div><div class=\"table-scroll\" tabindex=\"0\" role=\"region\" aria-label=\"Tabla técnica desplazable\"><table><thead><tr><th scope=\"col\"><div class=\"source-p\">Parámetro</div></th><th scope=\"col\"><div class=\"source-p\">Kingston KVR32N22S8/8</div></th><th scope=\"col\"><div class=\"source-p\">Kingston KVR32S22S8/8</div></th></tr></thead><tbody><tr><td><div class=\"source-p\">Capacidad y tecnología</div></td><td><div class=\"source-p\">8 GB DDR4</div></td><td><div class=\"source-p\">8 GB DDR4</div></td></tr><tr><td><div class=\"source-p\">Formato</div></td><td><div class=\"source-p\">DIMM, 288 contactos</div></td><td><div class=\"source-p\">SO-DIMM, 260 contactos</div></td></tr><tr><td><div class=\"source-p\">Tasa nominal y CL</div></td><td><div class=\"source-p\">3200 MT/s / CL22</div></td><td><div class=\"source-p\">3200 MT/s / CL22</div></td></tr><tr><td><div class=\"source-p\">Voltaje</div></td><td><div class=\"source-p\">1,2 V</div></td><td><div class=\"source-p\">1,2 V</div></td></tr></tbody></table></div><div class=\"source-p\">Datos técnicos de fabricantes citados en el anexo; condiciones del caso indicadas en el ejercicio.</div>",
    "questions": [
      {
        "id": "b05-1",
        "kind": "teoria",
        "topic": "Arquitectura y CPU",
        "prompt": "¿Cuál es el orden básico del ciclo de instrucción?",
        "options": [
          "Buscar, decodificar y ejecutar.",
          "Ejecutar, formatear y almacenar.",
          "Decodificar, imprimir y apagar.",
          "Buscar, conectar y reiniciar."
        ],
        "correct": 0,
        "explanation": "El ciclo de instrucción comprende Fetch, Decode y Execute. En Fetch se busca la instrucción en memoria; en Decode la unidad de control interpreta qué operación corresponde y qué datos necesita; en Execute se realiza la operación y se actualiza el estado o resultado. Es un modelo básico: las CPU modernas pueden solapar etapas y ejecutar varias operaciones."
      },
      {
        "id": "b05-2",
        "kind": "teoria",
        "topic": "Placa madre y buses",
        "prompt": "¿Qué comparación de PCI, AGP y PCIe es correcta?",
        "options": [
          "PCI y AGP usan transferencia paralela; PCIe usa enlaces seriales.",
          "Los tres son conectores intercambiables de RAM.",
          "PCIe es paralelo y AGP es un enlace serial USB.",
          "PCI se usa exclusivamente para SSD NVMe."
        ],
        "correct": 0,
        "explanation": "PCI es un bus paralelo antiguo para tarjetas de red, sonido y otras expansiones. AGP es una interfaz paralela antigua dedicada a gráficas. PCIe usa enlaces seriales por líneas y conecta gráficas, tarjetas de red, sonido, controladoras y SSD NVMe. Sus ranuras y funcionamiento son diferentes; una tarjeta PCI o AGP no se instala directamente en PCIe."
      },
      {
        "id": "b05-3",
        "kind": "teoria",
        "topic": "Memoria RAM",
        "prompt": "¿Por qué no se instala directamente DDR4 en una ranura DDR3?",
        "options": [
          "Difieren la conexión física y las características eléctricas y de señalización.",
          "Porque DDR4 almacena archivos y DDR3 solo instrucciones.",
          "Porque basta cambiar una opción para que ambas encajen.",
          "Porque la diferencia es únicamente el color del módulo."
        ],
        "correct": 0,
        "explanation": "DDR4 y DDR3 difieren en características eléctricas, señalización, posición de la muesca y contactos. Por ejemplo, los DIMM de escritorio DDR3 usan 240 contactos y los DDR4, 288. La placa y el controlador de memoria deben admitir la generación. No se soluciona haciendo fuerza ni cambiando una opción del sistema operativo."
      },
      {
        "id": "b05-4",
        "kind": "teoria",
        "topic": "Almacenamiento",
        "prompt": "¿Qué afirmación diferencia M.2, SATA y NVMe?",
        "options": [
          "M.2 es un formato/conexión, SATA una interfaz y NVMe un protocolo sobre PCIe.",
          "M.2, SATA y NVMe son tres nombres de la misma conexión.",
          "Toda unidad M.2 utiliza necesariamente SATA.",
          "NVMe indica únicamente la capacidad en GB."
        ],
        "correct": 0,
        "explanation": "M.2 describe el formato/conexión física; SATA es una interfaz de almacenamiento; NVMe es un protocolo para almacenamiento sobre PCIe. Existen SSD de 2,5 pulgadas SATA, M.2 SATA y M.2 PCIe/NVMe. Por eso “M.2” no significa automáticamente “NVMe” ni permite afirmar que toda unidad M.2 es más rápida que una SATA."
      },
      {
        "id": "b05-5",
        "kind": "teoria",
        "topic": "Expansión y conectividad",
        "prompt": "¿Cómo confirmás si la gráfica integrada puede reemplazarse por separado?",
        "options": [
          "Consultando modelo y diseño del equipo; puede estar integrada o soldada.",
          "Contando las salidas HDMI del monitor.",
          "Buscando una opción para extraerla en el navegador.",
          "Suponiendo que toda GPU de portátil es una tarjeta extraíble."
        ],
        "correct": 0,
        "explanation": "Consultaría el modelo de CPU y la documentación del equipo; también el Administrador de dispositivos, herramientas de información o la inspección de la placa. Una GPU integrada en la CPU no suele reemplazarse por separado. Una tarjeta dedicada de escritorio puede cambiarse si es compatible; en portátiles puede estar soldada y debe consultarse el diseño concreto."
      },
      {
        "id": "b05-6a",
        "kind": "practica",
        "topic": "Aplicación práctica",
        "prompt": "¿Qué módulo corresponde a la ranura DIMM DDR4 de 288 contactos del caso?",
        "options": [
          "Kingston KVR32N22S8/8.",
          "Kingston KVR32S22S8/8.",
          "Cualquiera de los dos por tener 8 GB.",
          "Ninguno por tener tensión de 1,2 V."
        ],
        "correct": 0,
        "explanation": "Corresponde el Kingston KVR32N22S8/8: 8 GB DDR4, DIMM de 288 contactos, no ECC y sin búfer según el anexo. Coincide con las ranuras y con la capacidad admitida del caso. El número de parte permite distinguirlo del SO-DIMM aunque ambos indiquen 8 GB y DDR4."
      },
      {
        "id": "b05-6b",
        "kind": "practica",
        "topic": "Aplicación práctica",
        "prompt": "¿Por qué el módulo SO-DIMM del caso no es un reemplazo directo?",
        "options": [
          "Tiene formato y 260 contactos distintos del DIMM de 288 contactos.",
          "Porque todo SO-DIMM es DDR3.",
          "Porque sus 8 GB equivalen a menos capacidad que 8 GB DIMM.",
          "Porque un SO-DIMM solo almacena gráficos."
        ],
        "correct": 0,
        "explanation": "El KVR32S22S8/8 es SO-DIMM de 260 contactos; la placa usa DIMM de 288. Difieren el tamaño, la conexión y la ubicación de la muesca. Igual capacidad, tecnología y tasa nominal no lo vuelven físicamente intercambiable. No puede instalarse directamente en esa ranura DIMM."
      },
      {
        "id": "b05-6c",
        "kind": "practica",
        "topic": "Aplicación práctica",
        "prompt": "¿Además de DDR y formato, qué grupo de datos revisarías?",
        "options": [
          "Capacidad admitida, organización, tensión y perfiles de funcionamiento.",
          "Solo que la nueva RAM tenga la mayor tasa nominal disponible.",
          "Solo que el módulo tenga igual capacidad, aunque cambien tensión y organización.",
          "Solo que la placa tenga una ranura libre, sin consultar sus límites."
        ],
        "correct": 0,
        "explanation": "Además del formato y la generación, comprobaría capacidad máxima por ranura y total, organización y soporte ECC/registro, tensión, perfiles de tasa y latencia compatibles con CPU y placa, BIOS y ranuras libres. Si se combinará con otra RAM, revisaría sus características y la lista de compatibilidad del fabricante cuando esté disponible."
      }
    ]
  },
  {
    "number": 6,
    "title": "Ampliación de RAM con datos dados",
    "contextHtml": "<h4>Tema Ampliación de RAM con datos dados</h4><div class=\"source-p\">Se informa una ranura libre. El equipo del caso ya funciona correctamente con el módulo instalado.</div><div class=\"table-scroll\" tabindex=\"0\" role=\"region\" aria-label=\"Tabla técnica desplazable\"><table><thead><tr><th scope=\"col\"><div class=\"source-p\">Dato</div></th><th scope=\"col\"><div class=\"source-p\">Equipo del caso</div></th></tr></thead><tbody><tr><td><div class=\"source-p\">Placa</div></td><td><div class=\"source-p\">ASUS PRIME H510M-E</div></td></tr><tr><td><div class=\"source-p\">Ranuras y límite</div></td><td><div class=\"source-p\">2 DIMM DDR4 / 64 GB totales / dual channel</div></td></tr><tr><td><div class=\"source-p\">RAM instalada</div></td><td><div class=\"source-p\">1 Kingston KVR32N22S8/8 de 8 GB</div></td></tr><tr><td><div class=\"source-p\">Módulo propuesto A</div></td><td><div class=\"source-p\">Otro KVR32N22S8/8, 8 GB DIMM DDR4</div></td></tr><tr><td><div class=\"source-p\">Módulo propuesto B</div></td><td><div class=\"source-p\">KVR32S22S8/8, 8 GB SO-DIMM DDR4</div></td></tr></tbody></table></div><div class=\"source-p\">Datos técnicos de fabricantes citados en el anexo; condiciones del caso indicadas en el ejercicio.</div>",
    "questions": [
      {
        "id": "b06-1",
        "kind": "teoria",
        "topic": "Arquitectura y CPU",
        "prompt": "¿Qué función cumple el bus de direcciones?",
        "options": [
          "Identifica la posición o recurso al que se accede.",
          "Transporta exclusivamente energía a la CPU.",
          "Guarda las instrucciones al apagar el equipo.",
          "Convierte datos digitales en sonido."
        ],
        "correct": 0,
        "explanation": "El bus de datos transporta los datos e instrucciones que se intercambian. El bus de direcciones identifica la posición de memoria o el recurso al que se accede. El bus de control transporta señales para coordinar las operaciones, por ejemplo lectura, escritura e interrupciones. La distinción es funcional; una interconexión moderna no siempre usa tres grupos físicos separados."
      },
      {
        "id": "b06-2",
        "kind": "teoria",
        "topic": "Placa madre y buses",
        "prompt": "¿Qué significan x1, x4, x8 y x16 en PCIe?",
        "options": [
          "Cantidad de líneas del enlace.",
          "Cantidad de núcleos de la CPU.",
          "Capacidad obligatoria de RAM en GB.",
          "Número de pantallas que siempre soporta una tarjeta."
        ],
        "correct": 0,
        "explanation": "x1, x4, x8 y x16 indican la cantidad de líneas o lanes PCIe del enlace. Más líneas permiten más ancho de banda dentro de una misma generación. Una ranura de largo x16 puede estar cableada eléctricamente como x4: deben verificarse tanto el formato físico como las líneas disponibles y su reparto con otros dispositivos."
      },
      {
        "id": "b06-3",
        "kind": "teoria",
        "topic": "Memoria RAM",
        "prompt": "¿Qué decisión de compra de RAM está bien fundamentada?",
        "options": [
          "Verificar DDR, formato, capacidad, tensión y organización admitidas por CPU y placa.",
          "Elegir solo la RAM de mayor capacidad aunque exceda el límite por ranura.",
          "Elegir solo por la tasa nominal, aunque no coincida la generación DDR.",
          "Suponer que todo módulo de igual capacidad utiliza el mismo formato."
        ],
        "correct": 0,
        "explanation": "Verificaría generación DDR, formato DIMM/SO-DIMM, capacidad por módulo y total, tensión, organización, soporte ECC o sin ECC y con o sin registro, perfiles de tasa admitidos por CPU y placa, BIOS y ranuras libres. La RAM elegida debe satisfacer todos los requisitos relevantes; no basta comparar su capacidad en GB."
      },
      {
        "id": "b06-4",
        "kind": "teoria",
        "topic": "Almacenamiento",
        "prompt": "¿Qué condición es necesaria para instalar un SSD NVMe M.2?",
        "options": [
          "Una conexión M.2 de almacenamiento con soporte PCIe/NVMe y tamaño compatible.",
          "Cualquier M.2, aunque solo admita SATA.",
          "Un puerto SATA libre, sin adaptadores ni otras conexiones.",
          "Un conector CPU_FAN de cuatro pines."
        ],
        "correct": 0,
        "explanation": "Verificaría que exista una ranura M.2 para almacenamiento, no únicamente una de Wi-Fi; el protocolo SATA o PCIe/NVMe admitido; llave y largo, por ejemplo 2280; espacio y fijación; versión y líneas PCIe; soporte de arranque del firmware si se usará como disco del sistema; y posibles puertos compartidos según el manual."
      },
      {
        "id": "b06-5",
        "kind": "teoria",
        "topic": "Expansión y conectividad",
        "prompt": "¿Qué funciones agregan una tarjeta de red y una de sonido?",
        "options": [
          "Conectividad de red y procesamiento/entradas/salidas de audio, respectivamente.",
          "Almacenamiento y refrigeración, respectivamente.",
          "Cálculo de CPU y capacidad RAM, respectivamente.",
          "Protección eléctrica y arranque UEFI, respectivamente."
        ],
        "correct": 0,
        "explanation": "La tarjeta de red permite conectar la computadora a una red, por ejemplo mediante Ethernet o Wi-Fi. La tarjeta de sonido procesa audio y ofrece entradas/salidas para micrófonos, auriculares o altavoces. Pueden estar integradas en la placa o añadirse como expansión. Los controladores permiten que el sistema operativo las utilice."
      },
      {
        "id": "b06-6a",
        "kind": "practica",
        "topic": "Aplicación práctica",
        "prompt": "¿Qué ampliación corresponde al caso con un DIMM de 8 GB y una ranura libre?",
        "options": [
          "Agregar otro KVR32N22S8/8 y obtener 16 GB.",
          "Agregar el SO-DIMM KVR32S22S8/8 y obtener 16 GB.",
          "Agregar otro DIMM de 8 GB y obtener 64 GB.",
          "Cambiar el SSD para duplicar automáticamente la RAM."
        ],
        "correct": 0,
        "explanation": "Agregaría el módulo A, otro KVR32N22S8/8 de 8 GB DDR4 DIMM, porque coincide con el formato y el módulo que ya funciona y el caso informa una ranura libre. Quedarían 16 GB, dentro del límite total de 64 GB. El módulo B es SO-DIMM y no corresponde a las ranuras de esa placa."
      },
      {
        "id": "b06-6b",
        "kind": "practica",
        "topic": "Aplicación práctica",
        "prompt": "¿Qué mejora puede ofrecer dual channel con dos módulos adecuados?",
        "options": [
          "Más ancho de banda de memoria, sin garantizar duplicar toda aplicación.",
          "El doble de capacidad de cada módulo sin instalar más chips.",
          "Convertir DDR4 en DDR5.",
          "Eliminar la necesidad de almacenamiento secundario."
        ],
        "correct": 0,
        "explanation": "Dos módulos iguales favorecen una configuración de dos canales equilibrada: el controlador puede acceder a ambos canales y aumentar el ancho de banda disponible. No duplica la capacidad de cada módulo ni garantiza duplicar el rendimiento de todas las aplicaciones. Deben seguirse la distribución de ranuras y las indicaciones del manual."
      },
      {
        "id": "b06-6c",
        "kind": "practica",
        "topic": "Aplicación práctica",
        "prompt": "¿Qué comprueba mejor el éxito de la ampliación?",
        "options": [
          "Detección de 16 GB y una prueba de memoria sin errores observados.",
          "Solo comprobar que el sistema inicie una vez, sin comprobar capacidad ni errores.",
          "Solo sumar las capacidades impresas en las etiquetas sin revisar lo detectado.",
          "Solo verificar que estén cerradas las trabas, sin una prueba posterior."
        ],
        "correct": 0,
        "explanation": "Comprobaría que BIOS/UEFI y el sistema operativo detecten los 16 GB y una configuración estable. Consultaría los canales con una herramienta adecuada y ejecutaría MemTest86+ o un diagnóstico de memoria. Si aparecen errores, probaría módulos por separado y en distintas ranuras antes de atribuirlos a una pieza."
      }
    ]
  },
  {
    "number": 7,
    "title": "Velocidad nominal y velocidad admitida",
    "contextHtml": "<h4>Tema Velocidad nominal y velocidad admitida</h4><div class=\"source-p\">La placa es ASUS PRIME H510M-E. La configuración final requiere un perfil común admitido por módulo, CPU y placa.</div><div class=\"table-scroll\" tabindex=\"0\" role=\"region\" aria-label=\"Tabla técnica desplazable\"><table><thead><tr><th scope=\"col\"><div class=\"source-p\">Dato</div></th><th scope=\"col\"><div class=\"source-p\">Valor</div></th></tr></thead><tbody><tr><td><div class=\"source-p\">Módulo</div></td><td><div class=\"source-p\">Kingston KVR32N22S8/8, DDR4 DIMM</div></td></tr><tr><td><div class=\"source-p\">Capacidad y tasa nominal</div></td><td><div class=\"source-p\">8 GB / 3200 MT/s</div></td></tr><tr><td><div class=\"source-p\">Latencia y voltaje</div></td><td><div class=\"source-p\">CL22 / 1,2 V</div></td></tr><tr><td><div class=\"source-p\">CPU del equipo</div></td><td><div class=\"source-p\">Intel Core i3-10100</div></td></tr><tr><td><div class=\"source-p\">Límite nativo CPU y placa del caso</div></td><td><div class=\"source-p\">DDR4 hasta 2666 MT/s</div></td></tr></tbody></table></div><div class=\"source-p\">Datos técnicos de fabricantes citados en el anexo; condiciones del caso indicadas en el ejercicio.</div>",
    "questions": [
      {
        "id": "b07-1",
        "kind": "teoria",
        "topic": "Arquitectura y CPU",
        "prompt": "¿Qué par ejemplifica un enlace serial y uno paralelo, respectivamente?",
        "options": [
          "SATA y PATA.",
          "PATA y SATA.",
          "PCI convencional y SATA.",
          "AGP y USB."
        ],
        "correct": 0,
        "explanation": "Una conexión serial envía una secuencia de bits por cada línea; una paralela transmite varios bits simultáneamente por varias líneas. SATA o PCIe son ejemplos seriales; PATA o PCI convencional, paralelos. Serial no significa necesariamente lento: las altas tasas de señalización y múltiples líneas de PCIe permiten grandes anchos de banda."
      },
      {
        "id": "b07-2",
        "kind": "teoria",
        "topic": "Placa madre y buses",
        "prompt": "¿Qué afirmación sobre una tarjeta PCIe x8 en ranura x16 es correcta?",
        "options": [
          "Puede ser compatible; hay que verificar líneas eléctricas, espacio y soporte.",
          "Nunca puede funcionar porque los números son diferentes.",
          "Siempre funcionará a x16 solo por el largo de la ranura.",
          "Puede instalarse en una ranura DIMM si no cabe."
        ],
        "correct": 0,
        "explanation": "En general, una tarjeta PCIe x8 puede instalarse en una ranura física x16 compatible. Verificaría que la ranura tenga líneas activas suficientes para el funcionamiento requerido, la generación negociada, el soporte de placa/firmware, alimentación, espacio y controladores. La longitud x16 no asegura que el enlace esté cableado eléctricamente a x16."
      },
      {
        "id": "b07-3",
        "kind": "teoria",
        "topic": "Memoria RAM",
        "prompt": "¿Qué diferencia capacidad instalada de capacidad máxima de RAM?",
        "options": [
          "La instalada es la montada/reconocida; la máxima es el límite admitido del conjunto.",
          "La instalada es siempre el límite máximo de la placa, aunque queden ranuras libres.",
          "La máxima depende únicamente del sistema operativo, nunca de CPU o placa.",
          "La instalada incluye todo el espacio de intercambio del SSD como RAM física."
        ],
        "correct": 0,
        "explanation": "La capacidad instalada es la suma de RAM físicamente montada y reconocida. La capacidad máxima es el límite que admite el conjunto de placa, CPU y configuración; también puede existir un límite por ranura. El sistema operativo y la RAM reservada para hardware influyen en la memoria utilizable. Tener ranuras libres no autoriza superar esos límites."
      },
      {
        "id": "b07-4",
        "kind": "teoria",
        "topic": "Almacenamiento",
        "prompt": "¿Qué información necesitás antes de reemplazar el disco de una notebook?",
        "options": [
          "Modelo, conexión, formato, altura, capacidad necesaria y plan de respaldo/migración.",
          "Solo la capacidad del HDD anterior, aunque el formato y la conexión no coincidan.",
          "Solo la mayor velocidad secuencial anunciada por el SSD.",
          "Solo si ambos dispositivos usan el mismo sistema de archivos."
        ],
        "correct": 0,
        "explanation": "Necesitaría modelo exacto de notebook, tipo de conexión y unidad instalada, formato y altura disponible, capacidad requerida, fijaciones y soporte de arranque. Si usa bahía SATA de 2,5 pulgadas, corresponde un SSD SATA compatible, no cualquier M.2. Antes del reemplazo realizaría y verificaría un respaldo y decidiría si se clonará o reinstalará el sistema."
      },
      {
        "id": "b07-5",
        "kind": "teoria",
        "topic": "Expansión y conectividad",
        "prompt": "¿Puede una tarjeta PCIe de escritorio colocarse directamente en cualquier portátil?",
        "options": [
          "No: deben existir conexión, espacio, energía y soporte específicos.",
          "Sí: toda portátil tiene una ranura física x16 libre.",
          "Sí: cualquier USB-C equivale a una ranura PCIe x16.",
          "No: porque ninguna portátil puede tener gráfica dedicada."
        ],
        "correct": 0,
        "explanation": "No directamente: una tarjeta PCIe de escritorio necesita una ranura y espacio adecuados, además de alimentación y refrigeración. Las portátiles normalmente no disponen de esa ranura de expansión en formato de escritorio. Existen soluciones específicas, pero dependen del modelo y de una conexión compatible; un conector M.2 de notebook no equivale a una ranura x16 para esa tarjeta."
      },
      {
        "id": "b07-6a",
        "kind": "practica",
        "topic": "Aplicación práctica",
        "prompt": "¿Qué significan 8 GB, 3200 MT/s y CL22 en la tabla?",
        "options": [
          "Capacidad, tasa nominal y latencia CAS en ciclos.",
          "Tasa de red, capacidad y temperatura.",
          "Capacidad, frecuencia de reloj física de 3200 MHz y 22 ns fijos.",
          "Número de chips, tensión y tamaño del módulo."
        ],
        "correct": 0,
        "explanation": "La capacidad es 8 GB: cantidad de memoria del módulo. La tasa nominal es 3200 MT/s: millones de transferencias por segundo. CL22 es la latencia CAS expresada en ciclos de reloj; no son 22 nanosegundos. El tiempo correspondiente a esos ciclos depende de la frecuencia a la que esté funcionando."
      },
      {
        "id": "b07-6b",
        "kind": "practica",
        "topic": "Aplicación práctica",
        "prompt": "¿El módulo de 3200 MT/s funcionará necesariamente a esa tasa con el i3-10100 del caso?",
        "options": [
          "No: el perfil efectivo debe respetar el límite nativo de 2666 MT/s indicado.",
          "Sí: el rótulo del módulo obliga a la CPU a trabajar a 3200 MT/s.",
          "No: funcionará siempre a 3200 GHz.",
          "Sí: la cantidad de GB garantiza la tasa anunciada."
        ],
        "correct": 0,
        "explanation": "No. En el caso, CPU y placa limitan de forma nativa la memoria a 2666 MT/s. El conjunto funcionará con un perfil común admitido por módulo, controlador y placa, dentro de ese límite. Debe verificarse el perfil realmente seleccionado; el rótulo de 3200 MT/s no fuerza esa tasa en cualquier equipo."
      },
      {
        "id": "b07-6c",
        "kind": "practica",
        "topic": "Aplicación práctica",
        "prompt": "¿Qué revisarías antes de mezclar otro módulo en este caso?",
        "options": [
          "DDR/formato, perfiles/tensión comunes y capacidad/organización admitidas.",
          "Solo que ambos módulos anuncien 3200 MT/s, aunque cambie el formato.",
          "Solo que la suma de capacidades no exceda el total, ignorando el límite por ranura.",
          "Solo que ambos sean DDR4, aunque no compartan perfiles de tensión compatibles."
        ],
        "correct": 0,
        "explanation": "Como mínimo comprobaría: 1) misma generación y formato, DDR4 DIMM; 2) tensión y perfiles de tasa/temporización comunes; 3) capacidad y organización admitidas por ranura y por el controlador. Después revisaría si puede mantenerse una configuración de canales adecuada y realizaría una prueba de estabilidad. Igual velocidad impresa no asegura igual compatibilidad."
      }
    ]
  },
  {
    "number": 8,
    "title": "Diagnóstico de RAM después de instalarla",
    "contextHtml": "<h4>Tema Diagnóstico de RAM después de instalarla</h4><div class=\"source-p\">Es un caso para analizar; no se informa un resultado de prueba de memoria.</div><div class=\"table-scroll\" tabindex=\"0\" role=\"region\" aria-label=\"Tabla técnica desplazable\"><table><thead><tr><th scope=\"col\"><div class=\"source-p\">Material del caso</div></th><th scope=\"col\"><div class=\"source-p\">Dato</div></th></tr></thead><tbody><tr><td><div class=\"source-p\">Placa</div></td><td><div class=\"source-p\">DIMM DDR4; admite módulos de 8 GB</div></td></tr><tr><td><div class=\"source-p\">Módulo A</div></td><td><div class=\"source-p\">8 GB DDR4 DIMM de 288 contactos</div></td></tr><tr><td><div class=\"source-p\">Módulo B</div></td><td><div class=\"source-p\">8 GB DDR4 SO-DIMM de 260 contactos</div></td></tr><tr><td><div class=\"source-p\">Síntoma planteado</div></td><td><div class=\"source-p\">Después de agregar RAM, el equipo enciende sin imagen</div></td></tr></tbody></table></div><div class=\"source-p\">Datos técnicos de fabricantes citados en el anexo; condiciones del caso indicadas en el ejercicio.</div>",
    "questions": [
      {
        "id": "b08-1",
        "kind": "teoria",
        "topic": "Arquitectura y CPU",
        "prompt": "¿Qué conjunto incluye partes funcionales de una CPU?",
        "options": [
          "Unidad de control, unidad aritmético-lógica y registros.",
          "Platos magnéticos, cabezal y motor.",
          "Puertos SATA, bahía y sistema de archivos.",
          "Teclado, panel frontal y pantalla."
        ],
        "correct": 0,
        "explanation": "El procesador es un circuito integrado de silicio que ejecuta instrucciones y realiza operaciones de cálculo y control. Sus partes funcionales incluyen unidad de control, unidad aritmético-lógica y registros; las CPU actuales integran núcleos y varios niveles de caché. No debe confundirse el procesador con todo el gabinete de la computadora."
      },
      {
        "id": "b08-2",
        "kind": "teoria",
        "topic": "Placa madre y buses",
        "prompt": "¿Qué ocurrirá en general al usar una tarjeta PCIe 5.0 en una ranura compatible PCIe 4.0?",
        "options": [
          "Negociará un enlace común, sin superar la generación 4.0 del slot.",
          "Siempre alcanzará las tasas de PCIe 5.0.",
          "La tarjeta convertirá físicamente la ranura en DDR5.",
          "Nunca podrá funcionar por ser de una generación distinta."
        ],
        "correct": 0,
        "explanation": "En general sí, por la compatibilidad entre generaciones PCIe. El enlace negocia una generación y una cantidad de líneas admitidas por ambos extremos; en ese caso no excederá PCIe 4.0. Deben verificarse además la ranura física, el firmware, la fuente, el espacio y los controladores. No implica obtener el rendimiento máximo PCIe 5.0."
      },
      {
        "id": "b08-3",
        "kind": "teoria",
        "topic": "Memoria RAM",
        "prompt": "¿Qué determina principalmente la RAM admitida por un equipo?",
        "options": [
          "Controlador de memoria de la CPU y placa, con su firmware y límites.",
          "Únicamente la cantidad de ranuras, sin límites por ranura o total.",
          "Únicamente la tasa nominal del módulo que se quiere comprar.",
          "Únicamente el sistema operativo, sin importar placa ni controlador."
        ],
        "correct": 0,
        "explanation": "El controlador de memoria de la CPU y la placa madre determinan generaciones, organización, cantidad de canales, ranuras y capacidades soportadas; la BIOS también influye en el reconocimiento. El sistema operativo puede limitar la cantidad utilizable. Deben respetarse tanto el máximo por ranura como el total del conjunto."
      },
      {
        "id": "b08-4",
        "kind": "teoria",
        "topic": "Almacenamiento",
        "prompt": "¿Qué diferencia velocidad de lectura de salud de una unidad?",
        "options": [
          "La velocidad mide transferencia; la salud requiere datos de estado, desgaste y errores.",
          "Una unidad rápida siempre está sana.",
          "Una lectura lenta prueba por sí sola daño físico.",
          "La salud es igual a los MB/s publicados en la caja."
        ],
        "correct": 0,
        "explanation": "La velocidad de lectura mide cuántos datos puede entregar la unidad por segundo, por ejemplo en MB/s y bajo ciertas condiciones. La salud describe su estado, desgaste, errores y riesgos de funcionamiento. Una ficha rápida no acredita buena salud; una transferencia lenta tampoco demuestra por sí sola daño. Se requieren mediciones e información de diagnóstico."
      },
      {
        "id": "b08-5",
        "kind": "teoria",
        "topic": "Expansión y conectividad",
        "prompt": "¿Qué diferencia Wi-Fi de Internet?",
        "options": [
          "Wi-Fi conecta a una red local; esa red puede tener o no salida a Internet.",
          "Tener señal Wi-Fi garantiza acceso a cualquier página.",
          "Internet solo puede utilizarse mediante Wi-Fi.",
          "Wi-Fi es un sistema de archivos del router."
        ],
        "correct": 0,
        "explanation": "Wi-Fi es una forma de conectar dispositivos de manera inalámbrica a una red local. Internet es una red mundial de redes a la que esa red local puede tener salida. Es posible estar conectado por Wi-Fi y acceder al servidor escolar sin tener Internet; también puede usarse Internet por Ethernet sin utilizar Wi-Fi."
      },
      {
        "id": "b08-6a",
        "kind": "practica",
        "topic": "Aplicación práctica",
        "prompt": "¿Qué RAM corresponde a la placa DIMM DDR4 del caso sin imagen?",
        "options": [
          "El módulo A, DDR4 DIMM de 288 contactos.",
          "El módulo B, SO-DIMM de 260 contactos.",
          "Cualquiera por tener 8 GB.",
          "Ninguna porque la falta de imagen descarta toda la RAM."
        ],
        "correct": 0,
        "explanation": "Corresponde el módulo A: 8 GB DDR4 DIMM de 288 contactos. La placa admite ese formato y capacidad. El módulo B se descarta por ser SO-DIMM de 260 contactos. La falta de imagen después de una ampliación no basta para afirmar que la memoria está dañada."
      },
      {
        "id": "b08-6b",
        "kind": "practica",
        "topic": "Aplicación práctica",
        "prompt": "¿Qué secuencia inicial de comprobaciones es adecuada?",
        "options": [
          "Desconectar y revisar compatibilidad; comprobar montaje; probar módulos por separado.",
          "Formatear el SSD antes de tocar cualquier ajuste.",
          "Declarar RAM dañada apenas enciende sin imagen.",
          "Reinsertar módulos con el equipo encendido."
        ],
        "correct": 0,
        "explanation": "1) Apagar, desconectar la alimentación y aplicar protección ESD; revisar formato, tipo y capacidad admitidos. 2) Comprobar que el módulo esté orientado y completamente insertado, con trabas cerradas. 3) Probar el módulo anterior y luego cada módulo por separado en las ranuras permitidas por el manual. Registrar qué combinación arranca."
      },
      {
        "id": "b08-6c",
        "kind": "practica",
        "topic": "Aplicación práctica",
        "prompt": "¿Qué prueba ayuda a diferenciar módulo defectuoso de ranura defectuosa?",
        "options": [
          "Cruzar módulos y ranuras conocidas como buenas, con diagnóstico de memoria.",
          "Cambiar simultáneamente CPU, RAM y disco sin registrar resultados.",
          "Medir solo el tamaño físico del módulo.",
          "Reinstalar el navegador y comprobar su página inicial."
        ],
        "correct": 0,
        "explanation": "Usaría MemTest86+ o el diagnóstico de memoria, cuando el equipo permita iniciar esa prueba. Probaría el módulo sospechoso en una ranura que funciona y un módulo compatible conocido como bueno en la ranura sospechosa. Si el fallo sigue al módulo, sospecharía de él; si sigue a la ranura, de la ranura, placa o controlador. Los resultados todavía deben verificarse."
      }
    ]
  },
  {
    "number": 9,
    "title": "SSD y conexión disponible",
    "contextHtml": "<h4>Tema SSD y conexión disponible</h4><div class=\"source-p\">El equipo del caso tiene una bahía de 2,5 pulgadas con SATA y alimentación; no tiene ranura M.2 ni adaptador adicional.</div><div class=\"table-scroll\" tabindex=\"0\" role=\"region\" aria-label=\"Tabla técnica desplazable\"><table><thead><tr><th scope=\"col\"><div class=\"source-p\">Parámetro</div></th><th scope=\"col\"><div class=\"source-p\">Kingston A400 SA400S37/480G</div></th><th scope=\"col\"><div class=\"source-p\">Kingston NV2 SNV2S/500G</div></th></tr></thead><tbody><tr><td><div class=\"source-p\">Capacidad</div></td><td><div class=\"source-p\">480 GB</div></td><td><div class=\"source-p\">500 GB</div></td></tr><tr><td><div class=\"source-p\">Formato</div></td><td><div class=\"source-p\">2,5 pulgadas, 7 mm</div></td><td><div class=\"source-p\">M.2 2280</div></td></tr><tr><td><div class=\"source-p\">Interfaz</div></td><td><div class=\"source-p\">SATA 6 Gb/s</div></td><td><div class=\"source-p\">PCIe 4.0 x4 NVMe</div></td></tr><tr><td><div class=\"source-p\">Lectura / escritura anunciadas</div></td><td><div class=\"source-p\">Hasta 500 / 450 MB/s</div></td><td><div class=\"source-p\">Hasta 3500 / 2100 MB/s</div></td></tr></tbody></table></div><div class=\"source-p\">Datos técnicos de fabricantes citados en el anexo; condiciones del caso indicadas en el ejercicio.</div>",
    "questions": [
      {
        "id": "b09-1",
        "kind": "teoria",
        "topic": "Arquitectura y CPU",
        "prompt": "¿Qué diferencia un núcleo físico de un hilo lógico de CPU?",
        "options": [
          "Los hilos de un núcleo pueden compartir sus recursos de ejecución.",
          "Cada hilo lógico equivale siempre a un núcleo físico completo.",
          "Un núcleo físico solo puede procesar tareas si el sistema dispone de tantos módulos RAM como hilos.",
          "La cantidad de hilos siempre coincide con la cantidad de núcleos, sin excepciones."
        ],
        "correct": 0,
        "explanation": "Un núcleo es una unidad física de ejecución dentro de la CPU. Un hilo es una secuencia de instrucciones que puede programarse para ejecución; con SMT, un núcleo puede ofrecer más de un procesador lógico. Dos hilos lógicos comparten recursos del núcleo y no equivalen a dos núcleos físicos completos."
      },
      {
        "id": "b09-2",
        "kind": "teoria",
        "topic": "Placa madre y buses",
        "prompt": "¿Qué par de unidades corresponde a frecuencia y volumen transferido por tiempo?",
        "options": [
          "MHz y MB/s.",
          "MT/s y MHz, respectivamente.",
          "MB/s y MHz, respectivamente.",
          "GB y Hz."
        ],
        "correct": 0,
        "explanation": "La frecuencia indica ciclos por segundo y se expresa en Hz, MHz o GHz. Una tasa de transferencia indica transferencias por segundo, como MT/s, o volumen de datos por tiempo, como MB/s o Gb/s. Para relacionarlas hay que conocer datos por transferencia, transferencias por ciclo y sobrecarga. Debe distinguirse b de bit y B de byte."
      },
      {
        "id": "b09-3",
        "kind": "teoria",
        "topic": "Memoria RAM",
        "prompt": "¿Qué tasa DDR corresponde a un reloj de 1600 MHz con dos transferencias por ciclo?",
        "options": [
          "3200 MT/s.",
          "1600 MT/s.",
          "800 MT/s.",
          "3200 GHz."
        ],
        "correct": 0,
        "explanation": "MHz expresa millones de ciclos de reloj por segundo; MT/s, millones de transferencias por segundo. En DDR se realizan dos transferencias por ciclo: una memoria a 1600 MHz de reloj puede ofrecer 3200 MT/s. Por eso DDR4-3200 se expresa con precisión como 3200 MT/s, no como 3200 MHz de reloj físico."
      },
      {
        "id": "b09-4",
        "kind": "teoria",
        "topic": "Almacenamiento",
        "prompt": "¿Qué permite consultar S.M.A.R.T., según la unidad?",
        "options": [
          "Atributos e indicadores de estado como temperatura, uso, errores o desgaste.",
          "Una garantía de que la unidad nunca sufrirá una falla no anticipada.",
          "Un diagnóstico completo obtenido únicamente de la ficha comercial.",
          "La tasa máxima de la interfaz como prueba directa de salud de la unidad."
        ],
        "correct": 0,
        "explanation": "S.M.A.R.T. es un sistema de supervisión interna de unidades de almacenamiento. Según el modelo permite consultar temperatura, horas de uso, errores y atributos de desgaste o salud; en HDD, por ejemplo, sectores reasignados, y en SSD, indicadores de vida utilizada. No garantiza predecir todas las fallas y no reemplaza un respaldo."
      },
      {
        "id": "b09-5",
        "kind": "teoria",
        "topic": "Expansión y conectividad",
        "prompt": "¿Qué comparación entre Wi-Fi y Ethernet es adecuada?",
        "options": [
          "Wi-Fi usa radio; Ethernet usa cable y suele ofrecer un enlace más predecible.",
          "Ethernet garantiza siempre Internet, aunque no exista conexión externa.",
          "Wi-Fi siempre es más rápido y estable que cualquier enlace por cable.",
          "Tener enlace local por cualquiera de las dos vías garantiza que funcione DNS."
        ],
        "correct": 0,
        "explanation": "Wi-Fi utiliza radio y facilita movilidad; su rendimiento puede variar con distancia, obstáculos e interferencias. Ethernet usa cable de red y normalmente ofrece un enlace más estable y predecible. La velocidad concreta depende del estándar, equipos y condiciones. Ambas permiten redes locales con o sin salida a Internet."
      },
      {
        "id": "b09-6a",
        "kind": "practica",
        "topic": "Aplicación práctica",
        "prompt": "¿Qué SSD puede conectarse directamente a la bahía SATA de 2,5 pulgadas del caso?",
        "options": [
          "Kingston A400 de 480 GB y 7 mm.",
          "Kingston NV2 M.2 PCIe/NVMe de 500 GB.",
          "Cualquiera porque ambos se llaman SSD.",
          "Ninguno porque la bahía solo admite unidades magnéticas."
        ],
        "correct": 0,
        "explanation": "El Kingston A400 SA400S37/480G puede conectarse directamente: es SATA de 2,5 pulgadas y 7 mm, compatible con la bahía y las conexiones informadas. Tiene 480 GB. También verificaría fijación y espacio real, pero el formato y la interfaz coinciden con las condiciones del caso."
      },
      {
        "id": "b09-6b",
        "kind": "practica",
        "topic": "Aplicación práctica",
        "prompt": "¿Por qué el NV2 no es una conexión directa en este equipo?",
        "options": [
          "No hay ranura M.2 ni adaptador para su conexión PCIe/NVMe.",
          "Porque 500 GB no caben en ninguna notebook.",
          "Porque un SSD de mayor velocidad siempre consume 300 W.",
          "Porque NVMe requiere memoria RAM DDR5 en todos los casos."
        ],
        "correct": 0,
        "explanation": "El NV2 SNV2S/500G es M.2 2280 PCIe/NVMe. El equipo no tiene ranura M.2 ni adaptador adicional; disponer de una bahía SATA no permite conectarlo directamente. Su lectura anunciada de hasta 3500 MB/s no elimina la incompatibilidad de conexión."
      },
      {
        "id": "b09-6c",
        "kind": "practica",
        "topic": "Aplicación práctica",
        "prompt": "¿Qué conexiones necesita el A400 seleccionado?",
        "options": [
          "SATA de datos y SATA de alimentación, separadas o combinadas según el equipo.",
          "Solo datos SATA, porque el SSD siempre se alimenta por ese mismo cable.",
          "Solo alimentación SATA, porque todos los datos llegan por el socket de CPU.",
          "Dos cables SATA de datos, sin necesidad de alimentación."
        ],
        "correct": 0,
        "explanation": "El A400 requiere conexión SATA de datos y SATA de alimentación, que en una notebook pueden formar un conector combinado o caddy. Antes verificaría formato, altura, capacidad suficiente, respaldo y estrategia de migración. Después comprobaría detección, arranque y archivos. No debe manipularse con el equipo alimentado en este procedimiento de taller."
      }
    ]
  },
  {
    "number": 10,
    "title": "M2 no garantiza compatibilidad",
    "contextHtml": "<h4>Tema M2 no garantiza compatibilidad</h4><div class=\"source-p\">Condición del ejercicio: la ranura del equipo admite M.2 2280 SOLO SATA, sin PCIe/NVMe.</div><div class=\"table-scroll\" tabindex=\"0\" role=\"region\" aria-label=\"Tabla técnica desplazable\"><table><thead><tr><th scope=\"col\"><div class=\"source-p\">Parámetro</div></th><th scope=\"col\"><div class=\"source-p\">Kingston NV2 SNV2S/500G</div></th><th scope=\"col\"><div class=\"source-p\">Kingston NV2 SNV2S/250G</div></th></tr></thead><tbody><tr><td><div class=\"source-p\">Formato</div></td><td><div class=\"source-p\">M.2 2280</div></td><td><div class=\"source-p\">M.2 2280</div></td></tr><tr><td><div class=\"source-p\">Interfaz y protocolo</div></td><td><div class=\"source-p\">PCIe 4.0 x4 NVMe</div></td><td><div class=\"source-p\">PCIe 4.0 x4 NVMe</div></td></tr><tr><td><div class=\"source-p\">Capacidad</div></td><td><div class=\"source-p\">500 GB</div></td><td><div class=\"source-p\">250 GB</div></td></tr><tr><td><div class=\"source-p\">Lectura / escritura anunciadas</div></td><td><div class=\"source-p\">3500 / 2100 MB/s</div></td><td><div class=\"source-p\">3000 / 1300 MB/s</div></td></tr></tbody></table></div><div class=\"source-p\">Datos técnicos de fabricantes citados en el anexo; condiciones del caso indicadas en el ejercicio.</div>",
    "questions": [
      {
        "id": "b10-1",
        "kind": "teoria",
        "topic": "Arquitectura y CPU",
        "prompt": "¿Qué función distingue registros y caché de CPU?",
        "options": [
          "Los registros sostienen el trabajo inmediato; la caché reduce accesos a RAM.",
          "Ambos guardan todos los archivos aunque se corte la energía.",
          "La caché reemplaza el almacenamiento del sistema.",
          "Los registros controlan únicamente el color de la pantalla."
        ],
        "correct": 0,
        "explanation": "Los registros son pequeñas ubicaciones de almacenamiento de acceso muy rápido dentro de la CPU para operandos, direcciones y estado inmediato de ejecución. La caché guarda copias de datos e instrucciones de uso frecuente o reciente para reducir accesos a RAM. Ambos aceleran el procesamiento, con tamaños y funciones distintos."
      },
      {
        "id": "b10-2",
        "kind": "teoria",
        "topic": "Placa madre y buses",
        "prompt": "¿Qué dispositivo se conecta normalmente mediante SATA?",
        "options": [
          "Una unidad HDD o SSD SATA.",
          "Un módulo DDR4 DIMM.",
          "Una CPU LGA1200.",
          "Un ventilador CPU_FAN."
        ],
        "correct": 0,
        "explanation": "PCIe conecta tarjetas gráficas, de red, de sonido, controladoras y SSD NVMe. SATA conecta HDD, SSD SATA y unidades ópticas. USB conecta periféricos externos como teclado, mouse, impresora o almacenamiento externo. La conexión elegida depende de las interfaces del dispositivo y del equipo; el parecido físico de un conector no basta."
      },
      {
        "id": "b10-3",
        "kind": "teoria",
        "topic": "Memoria RAM",
        "prompt": "¿Qué conjunto puede describir una etiqueta/ficha de RAM?",
        "options": [
          "Capacidad, generación DDR, tasa y latencia.",
          "Capacidad, RPM, TBW y cantidad de particiones.",
          "Socket, núcleos, hilos y frecuencia turbo.",
          "Capacidad, resolución, ancho de bus gráfico y salidas de video."
        ],
        "correct": 0,
        "explanation": "Puede informar número de parte, capacidad, generación DDR, tasa nominal, latencia y tensión, aunque no todas las etiquetas muestran todos esos datos. Por ejemplo, 8 GB, DDR4, 3200 MT/s y CL22 son cuatro características distintas. El número de parte sirve para consultar formato, organización y detalles no impresos en la etiqueta."
      },
      {
        "id": "b10-4",
        "kind": "teoria",
        "topic": "Almacenamiento",
        "prompt": "¿Qué relación entre unidad, partición y sistema de archivos es correcta?",
        "options": [
          "La unidad es física; la partición es una división lógica; el sistema de archivos organiza datos.",
          "Cada partición es necesariamente una unidad física diferente.",
          "El sistema de archivos define la interfaz eléctrica SATA o PCIe de la unidad.",
          "Formatear una partición cambia físicamente el tipo de memoria del SSD."
        ],
        "correct": 0,
        "explanation": "El disco o unidad es el dispositivo físico de almacenamiento, HDD o SSD. Una partición es una división lógica del espacio de esa unidad. Un sistema de archivos, como NTFS o ext4, organiza archivos, directorios y metadatos dentro de un volumen. Una misma unidad puede contener varias particiones con sistemas de archivos diferentes."
      },
      {
        "id": "b10-5",
        "kind": "teoria",
        "topic": "Expansión y conectividad",
        "prompt": "¿Para qué sirve Bluetooth en este contexto?",
        "options": [
          "Para enlazar dispositivos próximos, como auriculares o mouse compatibles.",
          "Para garantizar acceso a Internet aunque no haya red.",
          "Para reemplazar físicamente la RAM del sistema.",
          "Para convertir cualquier SSD SATA en NVMe."
        ],
        "correct": 0,
        "explanation": "Bluetooth es una tecnología de comunicación inalámbrica de corto alcance para enlazar dispositivos. Puede usarse con auriculares y mouse, por ejemplo. Requiere un adaptador Bluetooth compatible y, normalmente, emparejamiento. No es lo mismo que Wi-Fi ni implica disponer de acceso a Internet."
      },
      {
        "id": "b10-6a",
        "kind": "practica",
        "topic": "Aplicación práctica",
        "prompt": "¿Funcionará directamente alguno de los dos NV2 en la ranura M.2 solo SATA del caso?",
        "options": [
          "No: los dos requieren PCIe/NVMe y la ranura admite solo SATA.",
          "Sí: ambos, por medir 2280.",
          "Sí: únicamente el de 250 GB porque es más pequeño en capacidad.",
          "Sí: únicamente el de 500 GB por ser más rápido."
        ],
        "correct": 0,
        "explanation": "Ninguno puede instalarse directamente como unidad funcional en la ranura dada: los dos SSD de la tabla son PCIe/NVMe, mientras que esa ranura M.2 2280 admite solamente SATA. Coincide el largo, pero no la interfaz/protocolo soportado. El formato físico no convierte un SSD NVMe en SATA."
      },
      {
        "id": "b10-6b",
        "kind": "practica",
        "topic": "Aplicación práctica",
        "prompt": "¿Qué unidad requiere esa ranura M.2 2280 solo SATA?",
        "options": [
          "Un SSD M.2 SATA 2280 con llave y características admitidas.",
          "Cualquier SSD de 2,5 pulgadas colocado sin adaptador.",
          "Un SSD NVMe porque M.2 y NVMe son sinónimos.",
          "Un HDD de 3,5 pulgadas con conector de ventilador."
        ],
        "correct": 0,
        "explanation": "Debería ser un SSD M.2 SATA de tamaño 2280 y con la llave física admitida por esa ranura y el fabricante del equipo. También verificaría fijación, espesor y soporte del firmware. Un SSD SATA de 2,5 pulgadas tampoco se instala dentro de una ranura M.2 por el solo hecho de utilizar SATA."
      },
      {
        "id": "b10-6c",
        "kind": "practica",
        "topic": "Aplicación práctica",
        "prompt": "¿Qué comparación muestran los dos NV2 si la ranura admitiera NVMe?",
        "options": [
          "500 GB: 3500/2100 MB/s; 250 GB: 3000/1300 MB/s anunciados.",
          "Ambos tienen 500 GB y exactamente las mismas tasas.",
          "El de 250 GB tiene el doble de capacidad que el de 500 GB.",
          "Las cifras de la tabla son mediciones ya realizadas en ese equipo."
        ],
        "correct": 0,
        "explanation": "El de 500 GB ofrece el doble de capacidad nominal que el de 250 GB. Sus velocidades anunciadas son 3500/2100 MB/s de lectura/escritura frente a 3000/1300 MB/s. Son valores de ficha, no mediciones de ese equipo; el rendimiento real depende del enlace, la carga y las condiciones de la unidad."
      }
    ]
  },
  {
    "number": 11,
    "title": "Especificaciones y salud de un SSD",
    "contextHtml": "<h4>Tema Especificaciones y salud de un SSD</h4><div class=\"source-p\">Se dispone de esta ficha técnica, pero no de un informe de la unidad usada.</div><div class=\"table-scroll\" tabindex=\"0\" role=\"region\" aria-label=\"Tabla técnica desplazable\"><table><thead><tr><th scope=\"col\"><div class=\"source-p\">Dato de ficha</div></th><th scope=\"col\"><div class=\"source-p\">Kingston NV2 SNV2S/500G</div></th></tr></thead><tbody><tr><td><div class=\"source-p\">Capacidad y protocolo</div></td><td><div class=\"source-p\">500 GB / PCIe 4.0 x4 NVMe</div></td></tr><tr><td><div class=\"source-p\">Lectura / escritura anunciadas</div></td><td><div class=\"source-p\">Hasta 3500 / 2100 MB/s</div></td></tr><tr><td><div class=\"source-p\">Resistencia publicada</div></td><td><div class=\"source-p\">160 TBW</div></td></tr><tr><td><div class=\"source-p\">Temperatura de operación</div></td><td><div class=\"source-p\">0 a 70 °C</div></td></tr></tbody></table></div>",
    "questions": [
      {
        "id": "b11-1",
        "kind": "teoria",
        "topic": "Arquitectura y CPU",
        "prompt": "¿Qué afirmación sobre caché L1, L2 y L3 es correcta?",
        "options": [
          "Son niveles de caché de CPU con tamaños, proximidad y latencias diferentes.",
          "Son particiones del SSD que la CPU utiliza como RAM física.",
          "Son generaciones de módulos RAM instalados en tres ranuras distintas.",
          "Son tamaños obligatorios de memoria compartida de la GPU."
        ],
        "correct": 0,
        "explanation": "L1, L2 y L3 son niveles de caché integrados en el procesador. Habitualmente L1 es la menor y más cercana a las unidades de ejecución; L2 es mayor y algo más lenta; L3 suele ser mayor y compartida entre varios núcleos. La distribución exacta depende de la arquitectura. Ayudan a reducir accesos a la RAM."
      },
      {
        "id": "b11-2",
        "kind": "teoria",
        "topic": "Placa madre y buses",
        "prompt": "¿Qué alimentan el ATX principal y el conector de CPU, respectivamente?",
        "options": [
          "La placa madre y los circuitos de alimentación de la CPU.",
          "El monitor y el teclado, respectivamente.",
          "El SSD y los auriculares, respectivamente.",
          "Exclusivamente dos tarjetas gráficas distintas."
        ],
        "correct": 0,
        "explanation": "El conector ATX principal, normalmente de 24 pines, lleva alimentación a la placa madre. El conector EPS/ATX12V de CPU, de 4 u 8 pines según el equipo, suministra energía a sus circuitos de alimentación. Ambos deben conectarse según el manual. No debe confundirse EPS de CPU con PCIe de alimentación de una gráfica."
      },
      {
        "id": "b11-3",
        "kind": "teoria",
        "topic": "Memoria RAM",
        "prompt": "¿Qué se verifica antes de combinar RAM de distinta tasa?",
        "options": [
          "Compatibilidad y un perfil común de funcionamiento, seguido de una prueba.",
          "Solo que ambos módulos tengan la misma marca aunque no coincidan sus formatos.",
          "Solo la mayor tasa publicada: el módulo más rápido obliga al otro a igualarla.",
          "Solo que sumen la capacidad deseada, ignorando perfiles y tensión."
        ],
        "correct": 0,
        "explanation": "Comprobaría misma generación y formato, tensión, capacidades y organización admitidas, y al menos un perfil de tasa y temporizaciones común a ambos módulos, CPU y placa. Normalmente se utiliza una configuración común conservadora, pero no se garantiza estabilidad solo por bajar la velocidad. Ejecutaría una prueba de memoria y revisaría la configuración detectada."
      },
      {
        "id": "b11-4",
        "kind": "teoria",
        "topic": "Almacenamiento",
        "prompt": "¿Qué afirmación sobre MBR y GPT es correcta?",
        "options": [
          "Son esquemas de particiones; GPT permite superar límites habituales de MBR.",
          "Son interfaces físicas: MBR corresponde a SATA y GPT a NVMe.",
          "GPT es un sistema de archivos equivalente a NTFS.",
          "MBR no tiene límites de direccionamiento con ningún tamaño de sector."
        ],
        "correct": 0,
        "explanation": "MBR y GPT son esquemas para describir particiones. MBR es más antiguo y, con sectores lógicos de 512 bytes, limita el espacio direccionable a unos 2 TiB; permite cuatro particiones primarias, o una extendida dentro de esas entradas. GPT admite unidades mayores y más particiones, con redundancia de su información. El arranque depende además del firmware y sistema operativo; en Windows moderno se asocia UEFI con GPT."
      },
      {
        "id": "b11-5",
        "kind": "teoria",
        "topic": "Expansión y conectividad",
        "prompt": "¿Qué es una tarjeta de expansión?",
        "options": [
          "Hardware que añade funciones mediante una ranura compatible de la placa.",
          "Software que habilita una función de la placa sin añadir hardware.",
          "Memoria integrada en la CPU destinada exclusivamente a instrucciones.",
          "Un conector externo que siempre puede reemplazar cualquier ranura interna."
        ],
        "correct": 0,
        "explanation": "Una tarjeta de expansión es una placa que añade o mejora funciones, como gráficos, sonido o red. Se instala en una ranura compatible de la placa madre, normalmente PCIe en equipos de escritorio actuales. Deben comprobarse conexión, espacio, alimentación y soporte del sistema operativo. PCI y AGP son interfaces antiguas diferentes."
      },
      {
        "id": "b11-6a",
        "kind": "practica",
        "topic": "Aplicación práctica",
        "prompt": "¿Dónde se conecta el NV2 de 500 GB de la ficha?",
        "options": [
          "En una ranura M.2 de almacenamiento con PCIe/NVMe y tamaño 2280 admitido.",
          "En una ranura DIMM DDR4.",
          "En cualquier M.2 solo SATA sin soporte PCIe.",
          "En el conector ATX principal de 24 pines."
        ],
        "correct": 0,
        "explanation": "El Kingston NV2 SNV2S/500G se conecta a una ranura M.2 para almacenamiento que admita PCIe/NVMe y el tamaño 2280. Puede negociar una generación PCIe inferior si el sistema lo soporta; no funciona en una ranura únicamente M.2 SATA. Debe verificarse la placa concreta y su manual."
      },
      {
        "id": "b11-6b",
        "kind": "practica",
        "topic": "Aplicación práctica",
        "prompt": "¿Qué tecnología identifica al Kingston NV2 del caso?",
        "options": [
          "SSD de memoria flash, sin platos magnéticos.",
          "HDD con platos magnéticos y cabezal móvil.",
          "Memoria DRAM volátil que necesita energía para conservar los archivos.",
          "Unidad híbrida cuya parte principal de almacenamiento es un plato magnético."
        ],
        "correct": 0,
        "explanation": "Es un SSD, una unidad de estado sólido con memoria flash NAND, sin platos magnéticos ni cabezal mecánico. “Disco” suele usarse informalmente para referirse a unidades de almacenamiento, pero este modelo no es un HDD. NVMe identifica su protocolo, no cambia su condición de SSD."
      },
      {
        "id": "b11-6c",
        "kind": "practica",
        "topic": "Aplicación práctica",
        "prompt": "¿La ficha del NV2 demuestra que esa unidad usada alcanza su máximo anunciado?",
        "options": [
          "No: faltan mediciones y datos del equipo, enlace y estado de la unidad.",
          "Sí: los MB/s impresos son la medición de cualquier equipo.",
          "Sí: los 160 TBW prueban la velocidad real actual.",
          "No: porque ningún SSD puede leer datos de forma secuencial."
        ],
        "correct": 0,
        "explanation": "No puede confirmarse solo con la ficha. Esta anuncia hasta 3500 MB/s de lectura y 2100 MB/s de escritura, pero no informa placa, enlace negociado, temperatura ni medición. Se necesita una prueba controlada y revisar configuración y salud. Los 160 TBW son una especificación de resistencia, no la cantidad ya escrita ni la salud actual de esa unidad."
      }
    ]
  },
  {
    "number": 12,
    "title": "Reemplazo de disco con el material dado",
    "contextHtml": "<h4>Tema Reemplazo de disco con el material dado</h4><div class=\"source-p\">La notebook del caso tiene HDD SATA en bahía de 2,5 pulgadas y 7 mm, sin M.2. Sus archivos ocupan 180 GB.</div><div class=\"table-scroll\" tabindex=\"0\" role=\"region\" aria-label=\"Tabla técnica desplazable\"><table><thead><tr><th scope=\"col\"><div class=\"source-p\">Dato</div></th><th scope=\"col\"><div class=\"source-p\">Opción A</div></th><th scope=\"col\"><div class=\"source-p\">Opción B</div></th></tr></thead><tbody><tr><td><div class=\"source-p\">Modelo</div></td><td><div class=\"source-p\">Kingston A400 480 GB</div></td><td><div class=\"source-p\">Kingston NV2 500 GB</div></td></tr><tr><td><div class=\"source-p\">Formato</div></td><td><div class=\"source-p\">2,5 pulgadas, 7 mm</div></td><td><div class=\"source-p\">M.2 2280</div></td></tr><tr><td><div class=\"source-p\">Interfaz</div></td><td><div class=\"source-p\">SATA</div></td><td><div class=\"source-p\">PCIe/NVMe</div></td></tr><tr><td><div class=\"source-p\">Lectura anunciada</div></td><td><div class=\"source-p\">Hasta 500 MB/s</div></td><td><div class=\"source-p\">Hasta 3500 MB/s</div></td></tr></tbody></table></div><div class=\"source-p\">Datos técnicos de fabricantes citados en el anexo; condiciones del caso indicadas en el ejercicio.</div>",
    "questions": [
      {
        "id": "b12-1",
        "kind": "teoria",
        "topic": "Arquitectura y CPU",
        "prompt": "¿Qué debe coincidir para instalar una CPU en una placa?",
        "options": [
          "Socket y soporte de modelo/chipset/BIOS, además de condiciones eléctricas y térmicas.",
          "Solo el nombre comercial Core o Ryzen.",
          "Solo la cantidad de puertos USB.",
          "Solo la capacidad del SSD."
        ],
        "correct": 0,
        "explanation": "Revisaría socket, CPU incluida en la lista oficial de soporte, generación/chipset y versión de BIOS requerida; memoria admitida por CPU y placa; suministro eléctrico y capacidad de los reguladores; y disipador, anclajes y espacio. La identificación exacta de la CPU y la revisión de la placa es necesaria para confirmar compatibilidad."
      },
      {
        "id": "b12-2",
        "kind": "teoria",
        "topic": "Placa madre y buses",
        "prompt": "¿Qué función tiene Power SW del panel frontal?",
        "options": [
          "Conecta el botón de encendido del gabinete.",
          "Conecta la alimentación principal de 24 pines de la placa.",
          "Indica actividad de disco mediante un LED, sin accionar el encendido.",
          "Activa un reinicio inmediato del sistema como Reset SW."
        ],
        "correct": 0,
        "explanation": "En el panel frontal se conectan habitualmente Power SW, para encender/apagar; Reset SW, para reiniciar; Power LED y HDD LED, para indicadores de encendido y actividad. También se conectan puertos USB y audio frontales a sus headers específicos. Debe seguirse el pinout del manual y la polaridad de los LED; no todos van en el mismo conector."
      },
      {
        "id": "b12-3",
        "kind": "teoria",
        "topic": "Memoria RAM",
        "prompt": "¿Qué requiere dual channel?",
        "options": [
          "Controlador y placa compatibles, y módulos en las ranuras/configuración adecuadas.",
          "Solo un SSD con dos particiones.",
          "Dos módulos de cualquier tecnología aunque no sean admitidos.",
          "Dos monitores conectados a la tarjeta gráfica."
        ],
        "correct": 0,
        "explanation": "Dual channel es el uso de dos canales de memoria por el controlador para ampliar el ancho de banda disponible. Requiere CPU y placa compatibles y módulos instalados en las ranuras que indica el manual; un par de características iguales facilita la configuración equilibrada. No es lo mismo que tener simplemente dos ranuras o duplicar la capacidad."
      },
      {
        "id": "b12-4",
        "kind": "teoria",
        "topic": "Almacenamiento",
        "prompt": "¿Qué grupo de datos importa para comprar un SSD SATA como reemplazo?",
        "options": [
          "Interfaz, formato/espesor, capacidad necesaria y estrategia de migración.",
          "Solo la mayor tasa publicada, aunque se trate de un SSD M.2 NVMe.",
          "Solo capacidad igual a la anterior, aunque no coincida el formato.",
          "Solo que el conector de datos coincida, ignorando altura y fijación."
        ],
        "correct": 0,
        "explanation": "Comprobaría interfaz SATA, formato y espesor compatibles, capacidad suficiente para los datos y crecimiento, alimentación y fijación disponibles. Compararía también rendimiento, resistencia y garantía del modelo. Si reemplaza una unidad con datos, definiría respaldo y migración antes de intervenir. Un SSD NVMe no es reemplazo directo de una unidad SATA por tener más velocidad."
      },
      {
        "id": "b12-5",
        "kind": "teoria",
        "topic": "Expansión y conectividad",
        "prompt": "¿Para investigar Wi-Fi lento, qué comparación ayuda?",
        "options": [
          "Rendimiento de la red local frente a acceso a Internet y otros dispositivos.",
          "Medir únicamente Internet, sin verificar señal ni transferencias de la red local.",
          "Atribuir siempre la lentitud a la placa Wi-Fi porque muestra señal.",
          "Cambiar el SSD antes de comparar el problema con otro dispositivo."
        ],
        "correct": 0,
        "explanation": "Revisaría intensidad de señal, distancia y obstáculos, interferencias, banda y estándar de adaptador y punto de acceso, saturación de la red y controladores. Compararía una transferencia local y el acceso a Internet para distinguir Wi-Fi lento de una conexión externa lenta. También comprobaría si el problema ocurre en otros dispositivos."
      },
      {
        "id": "b12-6a",
        "kind": "practica",
        "topic": "Aplicación práctica",
        "prompt": "¿Qué reemplazo directo corresponde al HDD SATA de 2,5 pulgadas y 7 mm del caso?",
        "options": [
          "Kingston A400 de 480 GB, SATA de 2,5 pulgadas y 7 mm.",
          "Kingston NV2 M.2 de 500 GB, aunque no hay M.2.",
          "Cualquiera por ser una unidad de estado sólido.",
          "Ninguno porque 180 GB ocupados no caben en 480 GB."
        ],
        "correct": 0,
        "explanation": "La opción A, Kingston A400 de 480 GB, es el reemplazo directo: SATA de 2,5 pulgadas y 7 mm. Coincide con la bahía y los conectores; los 180 GB ocupados caben, dejando margen sujeto a la capacidad utilizable y particiones. La opción B es M.2 NVMe y la notebook del caso no dispone de esa conexión."
      },
      {
        "id": "b12-6b",
        "kind": "practica",
        "topic": "Aplicación práctica",
        "prompt": "¿Qué mejora se espera del cambio de HDD a SSD en ese caso?",
        "options": [
          "Menor latencia y mejor respuesta en acceso a archivos, sin acelerar toda la CPU o red.",
          "Duplicar automáticamente los núcleos del procesador.",
          "Aumentar físicamente la cantidad de RAM instalada.",
          "Garantizar que Internet funcione más rápido."
        ],
        "correct": 0,
        "explanation": "Esperaría menos tiempo de acceso y mejor respuesta al iniciar el sistema o abrir programas, frente al HDD sustituido. La CPU, la RAM y la red no aumentan sus prestaciones por cambiar el disco. El valor de hasta 500 MB/s es anunciado y no implica que todas las tareas o transferencias se aceleren en la misma proporción."
      },
      {
        "id": "b12-6c",
        "kind": "practica",
        "topic": "Aplicación práctica",
        "prompt": "¿Qué orden general de reemplazo es adecuado?",
        "options": [
          "Respaldar y verificar; preparar migración; desconectar e instalar; comprobar arranque y archivos.",
          "Formatear el HDD original antes de hacer el respaldo.",
          "Instalar con el equipo encendido y luego buscar archivos.",
          "Desechar el disco anterior antes de verificar la copia."
        ],
        "correct": 0,
        "explanation": "Primero respaldar y verificar que se puedan recuperar los archivos; preparar clonación o instalación y disponer de claves de recuperación si hay cifrado. Después apagar, desconectar y aplicar protección ESD; retirar el HDD e instalar el SSD con sus fijaciones. Finalmente verificar detección, arranque, particiones y archivos. Conservar el original hasta comprobar la migración."
      }
    ]
  },
  {
    "number": 13,
    "title": "Reconocimiento de una tarjeta gráfica",
    "contextHtml": "<h4>Tema Reconocimiento de una tarjeta gráfica</h4><div class=\"source-p\">Fotografía del fabricante: MSI GeForce GT 1030 2G LP OC. Tiene 2 GB GDDR5, conector físico PCIe x16 y utiliza cuatro líneas.</div><div class=\"source-p\"><figure><img src=\"irci-assets/image1.png\" alt=\"Fotografía del componente incluida en el documento de IRCI\" loading=\"lazy\"><figcaption>Imagen del documento original. La atribución figura en el texto del bloque.</figcaption></figure></div><div class=\"source-p\">Imagen de MSI GeForce GT 1030 2G LP OC. Fuente: MSI.</div>",
    "questions": [
      {
        "id": "b13-1",
        "kind": "teoria",
        "topic": "Arquitectura y CPU",
        "prompt": "¿Qué comparación de rendimiento de CPU está mejor fundamentada?",
        "options": [
          "Considerar núcleos, hilos, frecuencia, caché, arquitectura y tarea.",
          "Elegir siempre por el mayor número de GHz.",
          "Elegir siempre por el mayor número de versión de Windows.",
          "Usar únicamente el color del disipador."
        ],
        "correct": 0,
        "explanation": "Frecuencia de reloj, cantidad y tipo de núcleos, hilos, niveles/capacidad de caché e IPC son parámetros relevantes. Su efecto depende de la arquitectura y del programa. La potencia y la refrigeración condicionan las frecuencias sostenidas. El TDP orienta el diseño térmico; no es una puntuación de rendimiento ni permite comparar CPU por sí solo."
      },
      {
        "id": "b13-2",
        "kind": "teoria",
        "topic": "Placa madre y buses",
        "prompt": "¿Qué distingue al panel frontal del trasero?",
        "options": [
          "El frontal integra botones/puertos del gabinete; el trasero expone conexiones de placa y expansiones.",
          "El frontal contiene siempre la controladora de memoria de la CPU.",
          "El trasero está conectado exclusivamente a tarjetas dedicadas y nunca a la placa.",
          "Los puertos frontales no necesitan conectarse a headers de la placa."
        ],
        "correct": 0,
        "explanation": "El panel frontal pertenece al gabinete e incluye botones, LED y, según el modelo, puertos USB y audio conectados mediante cables a la placa. El panel trasero I/O reúne conectores accesibles desde atrás, como USB, Ethernet, audio y posibles salidas de video. Las tarjetas de expansión pueden añadir sus propios conectores traseros."
      },
      {
        "id": "b13-3",
        "kind": "teoria",
        "topic": "Memoria RAM",
        "prompt": "¿Qué puede ocurrir al combinar módulos compatibles de 4 GB y 8 GB?",
        "options": [
          "Pueden reconocerse 12 GB; la distribución en canales depende del controlador.",
          "Siempre se reconocen solo 4 GB.",
          "Siempre se convierte cada módulo en uno de 8 GB.",
          "Siempre se daña la placa por tener capacidades diferentes."
        ],
        "correct": 0,
        "explanation": "Pueden funcionar juntos si ambos son compatibles con CPU y placa en generación, formato, tensión, organización y perfiles comunes. Sumarían 12 GB si son reconocidos. No garantizan una configuración de dos canales completamente simétrica; algunos controladores permiten una parte en dos canales y otra en uno. Hay que consultar el soporte y comprobar estabilidad."
      },
      {
        "id": "b13-4",
        "kind": "teoria",
        "topic": "Almacenamiento",
        "prompt": "¿Qué describe a NTFS, FAT32 y ext4?",
        "options": [
          "Sistemas de archivos utilizados para organizar datos.",
          "Interfaces de disco que determinan si un SSD es SATA o PCIe.",
          "Esquemas de particiones equivalentes a MBR y GPT.",
          "Protocolos que describen la generación de la memoria RAM."
        ],
        "correct": 0,
        "explanation": "Son sistemas de archivos. NTFS se usa habitualmente en volúmenes de Windows y ofrece permisos y registro de cambios. FAT32 se usa en dispositivos removibles y entornos de amplia compatibilidad, pero tiene un límite de archivo de 4 GiB menos un byte. ext4 es habitual en Linux. No son tipos de disco físico ni esquemas de particiones."
      },
      {
        "id": "b13-5",
        "kind": "teoria",
        "topic": "Expansión y conectividad",
        "prompt": "¿Si Wi-Fi está conectado pero una página no abre, qué conviene revisar primero?",
        "options": [
          "Si falla una sola página o todas, y el acceso local/configuración de red.",
          "Reinstalar el sistema antes de comprobar si solo falla una página.",
          "Dar por confirmada la conexión a Internet al ver el ícono de Wi-Fi.",
          "Atribuir el problema a DNS sin comprobar enlace ni configuración IP."
        ],
        "correct": 0,
        "explanation": "Comprobaría si falla una sola página o todas y si otros equipos pueden acceder. Revisaría la configuración IP, la puerta de enlace y el acceso al router; después DNS y salida a Internet. Estar asociado al Wi-Fi solo confirma un enlace local, no que funcionen todos los servicios. Anotaría el mensaje de error antes de cambiar configuraciones."
      },
      {
        "id": "b13-6a",
        "kind": "practica",
        "topic": "Aplicación práctica",
        "prompt": "¿Qué parte de la GT 1030 se inserta en la ranura PCIe?",
        "options": [
          "Los contactos dorados de su borde.",
          "El conector HDMI externo.",
          "Las aspas del ventilador.",
          "La chapa del gabinete."
        ],
        "correct": 0,
        "explanation": "Los contactos dorados están en el borde inferior de la tarjeta y se insertan en PCIe. El ventilador es la pieza con aspas, sobre la zona de refrigeración. El disipador es el bloque con aletas bajo el ventilador. Los conectores de video están en la chapa trasera; no deben confundirse con los contactos que van a la placa."
      },
      {
        "id": "b13-6b",
        "kind": "practica",
        "topic": "Aplicación práctica",
        "prompt": "¿Qué ranura física corresponde a la GT 1030 del caso?",
        "options": [
          "PCIe x16 compatible, aunque la tarjeta utiliza cuatro líneas eléctricas.",
          "DIMM DDR4 de 288 contactos.",
          "SATA de datos de siete contactos.",
          "Socket LGA1200."
        ],
        "correct": 0,
        "explanation": "La instalaría en una ranura física PCIe x16 compatible; la tarjeta utiliza cuatro líneas eléctricas según la ficha. Comprobaría los 159 mm de largo, altura, espesor y bracket adecuado al gabinete; además, una fuente suficiente para todo el sistema y sus conexiones. La recomendación de 300 W es para el sistema, no el consumo de esta gráfica."
      },
      {
        "id": "b13-6c",
        "kind": "practica",
        "topic": "Aplicación práctica",
        "prompt": "¿Dónde conectás el monitor para usar esa GT 1030?",
        "options": [
          "En HDMI o DisplayPort de la tarjeta gráfica.",
          "En la entrada de micrófono del gabinete.",
          "En CPU_FAN.",
          "Obligatoriamente en el HDMI de la placa madre."
        ],
        "correct": 0,
        "explanation": "El monitor se conecta a HDMI o DisplayPort de la tarjeta. El disipador conduce y distribuye el calor hacia sus aletas; el ventilador mueve aire para evacuarlo. Debe quedar ventilación libre. La presencia de una tarjeta no hace que sus imágenes salgan automáticamente por el HDMI de la placa madre."
      }
    ]
  },
  {
    "number": 14,
    "title": "Gráfica y espacio del gabinete",
    "contextHtml": "<h4>Tema Gráfica y espacio del gabinete</h4><div class=\"source-p\">Condición del caso: placa con PCIe x16 disponible, gabinete con 155 mm libres para la tarjeta y fuente de 300 W en buen estado.</div><div class=\"table-scroll\" tabindex=\"0\" role=\"region\" aria-label=\"Tabla técnica desplazable\"><table><thead><tr><th scope=\"col\"><div class=\"source-p\">Parámetro</div></th><th scope=\"col\"><div class=\"source-p\">MSI GT 1030 2G LP OC</div></th><th scope=\"col\"><div class=\"source-p\">MSI GT 1030 2GD4 LP OC</div></th></tr></thead><tbody><tr><td><div class=\"source-p\">VRAM</div></td><td><div class=\"source-p\">2 GB GDDR5</div></td><td><div class=\"source-p\">2 GB DDR4</div></td></tr><tr><td><div class=\"source-p\">Largo</div></td><td><div class=\"source-p\">159 mm</div></td><td><div class=\"source-p\">150 mm</div></td></tr><tr><td><div class=\"source-p\">Consumo de tarjeta</div></td><td><div class=\"source-p\">30 W</div></td><td><div class=\"source-p\">20 W</div></td></tr><tr><td><div class=\"source-p\">Fuente recomendada</div></td><td><div class=\"source-p\">300 W</div></td><td><div class=\"source-p\">300 W</div></td></tr></tbody></table></div><div class=\"source-p\">Datos técnicos de fabricantes citados en el anexo; condiciones del caso indicadas en el ejercicio.</div>",
    "questions": [
      {
        "id": "b14-1",
        "kind": "teoria",
        "topic": "Arquitectura y CPU",
        "prompt": "¿Qué diferencia turbo de overclock?",
        "options": [
          "Turbo es un ajuste dinámico dentro de límites del fabricante; overclock supera la configuración estándar.",
          "Turbo exige soldar un núcleo adicional.",
          "Overclock es el nombre de la frecuencia base de todo procesador.",
          "Turbo y overclock garantizan siempre idéntica frecuencia sostenida."
        ],
        "correct": 0,
        "explanation": "La frecuencia base es una referencia de funcionamiento publicada bajo condiciones definidas por el fabricante. Turbo es un aumento dinámico dentro de los límites térmicos, eléctricos y de carga permitidos; no significa que todos los núcleos alcancen siempre el máximo. Overclock es configurar funcionamiento por encima de las especificaciones estándar y requiere soporte, refrigeración y comprobación de estabilidad."
      },
      {
        "id": "b14-2",
        "kind": "teoria",
        "topic": "Placa madre y buses",
        "prompt": "¿Por qué importa conectar el ventilador a CPU_FAN?",
        "options": [
          "Permite alimentarlo y supervisar/controlar su funcionamiento según el equipo.",
          "Porque CPU_FAN almacena el firmware de arranque.",
          "Porque el ventilador reemplaza al cable EPS de la CPU.",
          "Porque aumenta automáticamente los GB de RAM."
        ],
        "correct": 0,
        "explanation": "CPU_FAN es el header destinado al ventilador de refrigeración de la CPU. Permite alimentarlo y, según el tipo, medir y regular sus RPM. Conectarlo correctamente facilita que el firmware supervise la refrigeración y evita avisos de ventilador ausente. Un disipador instalado sin refrigeración efectiva puede provocar sobretemperatura."
      },
      {
        "id": "b14-3",
        "kind": "teoria",
        "topic": "Memoria RAM",
        "prompt": "¿A igual frecuencia de memoria, qué implica CL16 frente a CL18?",
        "options": [
          "Menor cantidad de ciclos de latencia CAS.",
          "Más capacidad de RAM sin cambiar el módulo.",
          "Una demora fija de 16 frente a 18 nanosegundos a cualquier frecuencia.",
          "Una tasa de transferencia de 16 frente a 18 MT/s."
        ],
        "correct": 0,
        "explanation": "CL16 y CL18 indican latencia CAS de 16 o 18 ciclos de reloj. A igual frecuencia, 16 ciclos representan menor demora que 18. Si las tasas de transferencia difieren, debe convertirse a tiempo para comparar: latencia CAS aproximada en ns = CL × 2000 ÷ MT/s, para DDR. No debe compararse únicamente el número CL."
      },
      {
        "id": "b14-4",
        "kind": "teoria",
        "topic": "Almacenamiento",
        "prompt": "¿Para qué sirve normalmente la partición EFI?",
        "options": [
          "Contiene archivos usados para el arranque UEFI.",
          "Contiene necesariamente todos los archivos personales del usuario.",
          "Es la memoria RAM reservada para la GPU integrada.",
          "Es espacio vacío que se puede borrar sin afectar el arranque."
        ],
        "correct": 0,
        "explanation": "La partición EFI contiene archivos que utiliza el firmware UEFI para iniciar sistemas operativos. La de recuperación aloja herramientas o archivos de recuperación según el sistema y fabricante. No son espacio vacío ni deben borrarse para “acelerar” el disco. Su función y necesidad deben comprobarse antes de modificar particiones."
      },
      {
        "id": "b14-5",
        "kind": "teoria",
        "topic": "Expansión y conectividad",
        "prompt": "¿Cómo comprobás que el equipo puede usar Ethernet?",
        "options": [
          "Consultar especificaciones y controladora, puerto RJ45 y funcionamiento del enlace.",
          "Suponer compatibilidad con Ethernet porque existe cualquier puerto parecido a RJ45.",
          "Dar por operativo Ethernet porque la placa tiene Wi-Fi.",
          "Instalar un cable sin verificar controladora ni controladores del sistema."
        ],
        "correct": 0,
        "explanation": "Buscaría un puerto RJ45 de red y consultaría las especificaciones del equipo. Revisaría si el sistema detecta una controladora Ethernet y sus controladores; después conectaría un cable conocido como bueno a un puerto de red activo. Un conector parecido no basta: debe confirmarse que sea Ethernet y que el enlace funcione."
      },
      {
        "id": "b14-6a",
        "kind": "practica",
        "topic": "Aplicación práctica",
        "prompt": "¿Qué tarjeta cabe en los 155 mm de largo disponibles del caso?",
        "options": [
          "La GT 1030 2GD4 LP OC de 150 mm.",
          "La GT 1030 2G LP OC de 159 mm.",
          "Ambas porque tienen 2 GB de VRAM.",
          "Ninguna porque todas las GT 1030 miden 300 mm."
        ],
        "correct": 0,
        "explanation": "Cabe, según el largo, la MSI GT 1030 2GD4 LP OC, de 150 mm, dentro de los 155 mm disponibles. La GT 1030 2G LP OC de 159 mm excede el espacio por 4 mm. Esa diferencia impide instalarla en las condiciones dadas, aunque pueda ofrecer mejores prestaciones gráficas."
      },
      {
        "id": "b14-6b",
        "kind": "practica",
        "topic": "Aplicación práctica",
        "prompt": "¿Qué representan los 300 W de fuente recomendada en la tabla?",
        "options": [
          "Una recomendación para el sistema completo, no el consumo de la tarjeta.",
          "El consumo exacto de cada GT 1030.",
          "La potencia de salida del puerto HDMI.",
          "La temperatura máxima del procesador."
        ],
        "correct": 0,
        "explanation": "No. Los 300 W son la fuente recomendada para el sistema completo según las fichas. El consumo de tarjeta informado es 30 W para la versión GDDR5 y 20 W para la DDR4. No se interpreta como que cada tarjeta consuma 300 W ni se confirma la fuente solo por su potencia nominal."
      },
      {
        "id": "b14-6c",
        "kind": "practica",
        "topic": "Aplicación práctica",
        "prompt": "¿Además del largo, qué verificaciones faltan antes de instalar?",
        "options": [
          "Altura/espesor y bracket, alimentación, ventilación y soporte de software.",
          "Solo que la tarjeta use la misma GPU, sin comparar sus dimensiones reales.",
          "Solo que la potencia nominal de fuente sea 300 W, sin comprobar el resto.",
          "Solo que la tarjeta tenga una salida compatible con el monitor."
        ],
        "correct": 0,
        "explanation": "Además del largo, comprobaría altura, espesor, bracket de perfil bajo o normal, ranuras libres y flujo de aire. Revisaría potencia y conexiones reales de la fuente para todo el conjunto, estado de la ranura, compatibilidad de firmware y controladores del sistema. También verificaría entradas del monitor y cable disponible."
      }
    ]
  },
  {
    "number": 15,
    "title": "Comparación de memoria gráfica",
    "contextHtml": "<h4>Tema Comparación de memoria gráfica</h4><div class=\"source-p\">Los valores de velocidad conservan la unidad que usa la ficha del fabricante. Ambas tarjetas tienen salida HDMI y DisplayPort.</div><div class=\"table-scroll\" tabindex=\"0\" role=\"region\" aria-label=\"Tabla técnica desplazable\"><table><thead><tr><th scope=\"col\"><div class=\"source-p\">Parámetro</div></th><th scope=\"col\"><div class=\"source-p\">MSI GT 1030 2G LP OC</div></th><th scope=\"col\"><div class=\"source-p\">MSI GT 1030 2GD4 LP OC</div></th></tr></thead><tbody><tr><td><div class=\"source-p\">GPU y VRAM</div></td><td><div class=\"source-p\">GT 1030 / 2 GB</div></td><td><div class=\"source-p\">GT 1030 / 2 GB</div></td></tr><tr><td><div class=\"source-p\">Tipo de memoria</div></td><td><div class=\"source-p\">GDDR5</div></td><td><div class=\"source-p\">DDR4</div></td></tr><tr><td><div class=\"source-p\">Bus de memoria</div></td><td><div class=\"source-p\">64 bits</div></td><td><div class=\"source-p\">64 bits</div></td></tr><tr><td><div class=\"source-p\">Velocidad publicada por MSI</div></td><td><div class=\"source-p\">6008 MHz</div></td><td><div class=\"source-p\">2100 MHz</div></td></tr></tbody></table></div><div class=\"source-p\">Datos técnicos de fabricantes citados en el anexo; condiciones del caso indicadas en el ejercicio.</div>",
    "questions": [
      {
        "id": "b15-1",
        "kind": "teoria",
        "topic": "Arquitectura y CPU",
        "prompt": "¿Qué afirmación sobre una arquitectura de 64 bits es correcta?",
        "options": [
          "Su aprovechamiento requiere CPU y sistema compatibles; no duplica automáticamente la velocidad.",
          "Siempre ejecuta cualquier tarea al doble de velocidad que 32 bits.",
          "Solo puede utilizar exactamente 64 GB de RAM.",
          "Elimina la necesidad de almacenamiento secundario."
        ],
        "correct": 0,
        "explanation": "32 y 64 bits describen características de la arquitectura, como el ancho de registros y capacidades de direccionamiento. En el modelo básico, 32 bits permiten 2³² direcciones, equivalentes a 4 GiB si cada una refiere a un byte; existen extensiones y límites particulares. Para aprovechar un sistema de 64 bits se requieren CPU y sistema operativo compatibles; no significa duplicar automáticamente la velocidad."
      },
      {
        "id": "b15-2",
        "kind": "teoria",
        "topic": "Placa madre y buses",
        "prompt": "¿Qué función cumplen BIOS/UEFI y la pila de placa?",
        "options": [
          "El firmware inicializa el equipo; la pila mantiene el reloj y, según el diseño, ajustes.",
          "La pila guarda el sistema operativo y el firmware solo actúa tras iniciar Windows.",
          "BIOS/UEFI necesita que el SSD esté formateado para inicializar la RAM.",
          "La pila alimenta CPU y GPU durante el uso normal del equipo."
        ],
        "correct": 0,
        "explanation": "BIOS/UEFI es firmware que inicializa el hardware y prepara el arranque del sistema operativo. La pila mantiene el reloj en tiempo real y, según el diseño, ayuda a conservar ajustes cuando falta alimentación. No almacena el sistema operativo ni “alimenta toda la BIOS”. En placas modernas muchas configuraciones y el firmware residen en memoria no volátil."
      },
      {
        "id": "b15-3",
        "kind": "teoria",
        "topic": "Memoria RAM",
        "prompt": "¿Qué caracteriza a la memoria ECC?",
        "options": [
          "Detecta y corrige ciertos errores y requiere soporte del conjunto.",
          "Es compatible con cualquier placa por tener un formato DIMM.",
          "Corrige cualquier fallo de aplicación, incluso si no se origina en memoria.",
          "Es una configuración de dual channel que no depende del controlador."
        ],
        "correct": 0,
        "explanation": "ECC significa código de corrección de errores. Es memoria capaz de detectar y corregir ciertos errores de datos, según su implementación. Se utiliza en servidores y estaciones donde importa la integridad. Necesita soporte de CPU, placa y configuración; no cualquier módulo ECC funciona en una PC común ni corrige todos los tipos de fallo."
      },
      {
        "id": "b15-4",
        "kind": "teoria",
        "topic": "Almacenamiento",
        "prompt": "¿Si el disco se detecta pero no arranca, qué verificarías?",
        "options": [
          "Orden/modo de arranque, cargador/sistema y estado de la unidad.",
          "Solo si el monitor es de la misma marca.",
          "Reemplazar el disco sin comprobar nada.",
          "Que el ventilador use un cable HDMI."
        ],
        "correct": 0,
        "explanation": "Revisaría orden de arranque, presencia del cargador y del sistema operativo, modo UEFI/Legacy y compatibilidad con el particionado. También comprobaría cables, salud de la unidad y mensajes de error. Que aparezca en BIOS indica detección, no que el sistema esté íntegro. Respaldaría antes de intentar reparaciones que alteren el disco."
      },
      {
        "id": "b15-5",
        "kind": "teoria",
        "topic": "Expansión y conectividad",
        "prompt": "¿Un puerto USB-C garantiza salida de video?",
        "options": [
          "No: hay que confirmar funciones como DisplayPort Alt Mode y compatibilidad de cable/adaptador.",
          "Sí: la forma USB-C garantiza todas las funciones.",
          "Sí: aunque solo esté diseñado para carga y datos.",
          "No: ningún USB-C puede transmitir video."
        ],
        "correct": 0,
        "explanation": "No. USB-C describe un conector, pero no todas sus funciones. Consultaría las especificaciones del puerto y equipo para confirmar salida de video, por ejemplo DisplayPort Alternate Mode, y que adaptador, cable y monitor sean compatibles. No alcanza con que el cable tenga USB-C en ambos extremos."
      },
      {
        "id": "b15-6a",
        "kind": "practica",
        "topic": "Aplicación práctica",
        "prompt": "¿Dos GT 1030 de 2 GB de la tabla deben rendir igual?",
        "options": [
          "No: difieren tipo y características de transferencia de memoria.",
          "Sí: igual GPU y capacidad aseguran el mismo rendimiento.",
          "Sí: la tecnología GDDR5 y DDR4 es idéntica.",
          "No: porque una es obligatoriamente una GPU integrada."
        ],
        "correct": 0,
        "explanation": "No. Aunque ambas usan GT 1030 y tienen 2 GB, una incorpora GDDR5 y la otra DDR4; las fichas informan 6008 MHz y 2100 MHz, respectivamente. La tecnología y las características de transferencia de memoria son distintas. Igual nombre de GPU y cantidad de VRAM no aseguran igual rendimiento."
      },
      {
        "id": "b15-6b",
        "kind": "practica",
        "topic": "Aplicación práctica",
        "prompt": "¿Qué versión tiene mejores características de transferencia según la ficha?",
        "options": [
          "La GT 1030 2G LP OC con GDDR5 y 6008 MHz publicados.",
          "La GT 1030 2GD4 LP OC solo por indicar DDR4.",
          "Ambas necesariamente transfieren lo mismo por tener 64 bits de bus.",
          "No puede compararse ningún dato porque ambas tienen HDMI."
        ],
        "correct": 0,
        "explanation": "La GT 1030 2G LP OC con GDDR5 tiene mejores características de transferencia de memoria entre las opciones del caso: usa GDDR5 y la ficha publica mayor velocidad con el mismo bus de 64 bits. No corresponde prometer un porcentaje de mejora en aplicaciones: depende de la carga y de cómo informa el fabricante esos valores."
      },
      {
        "id": "b15-6c",
        "kind": "practica",
        "topic": "Aplicación práctica",
        "prompt": "¿Qué debe verificarse para conectar cualquiera de las dos al equipo y monitor?",
        "options": [
          "Ranura, espacio/fuente, soporte de software y entrada/cable de video compatibles.",
          "Solo capacidad en GB del disco del equipo.",
          "Solo el tamaño del teclado.",
          "Solo que la fuente tenga un cable SATA libre."
        ],
        "correct": 0,
        "explanation": "Revisaría ranura PCIe compatible, líneas disponibles, espacio, bracket, ventilación y fuente adecuada al sistema. Confirmaría además soporte del sistema operativo y controladores. Para el monitor verificaría HDMI o DisplayPort y un cable o adaptador compatible con la señal y resolución requerida; no asumiría compatibilidad por el aspecto del conector."
      }
    ]
  },
  {
    "number": 16,
    "title": "Ubicación de conectores en una placa",
    "contextHtml": "<h4>Tema Ubicación de conectores en una placa</h4><div class=\"source-p\">Fotografía de ASUS PRIME H510M-E. La placa admite RAM DIMM DDR4, unidades SATA y M.2 PCIe/NVMe o SATA.</div><div class=\"source-p\"><figure><img src=\"irci-assets/image2.png\" alt=\"Fotografía del componente incluida en el documento de IRCI\" loading=\"lazy\"><figcaption>Imagen del documento original. La atribución figura en el texto del bloque.</figcaption></figure></div><div class=\"source-p\">Imagen de la placa ASUS PRIME H510M-E. Fuente: ASUS.</div>",
    "questions": [
      {
        "id": "b16-1",
        "kind": "teoria",
        "topic": "Arquitectura y CPU",
        "prompt": "¿Qué informa el sufijo F en el Core i5-12400F del caso?",
        "options": [
          "Ese modelo no dispone de gráfica integrada utilizable.",
          "Que usa un socket diferente del mismo modelo sin sufijo F.",
          "Que dispone de una GPU integrada con mayor frecuencia.",
          "Que su frecuencia turbo coincide obligatoriamente con la base."
        ],
        "correct": 0,
        "explanation": "El nombre puede orientar sobre fabricante, familia, gama, generación y variantes, pero debe confirmarse con la ficha. Ejemplo: Intel Core i5-12400F pertenece a la familia Core, gama i5 y generación 12; el sufijo F indica que ese modelo requiere gráfica dedicada. El nombre no informa por sí solo rendimiento, consumo o compatibilidad completa."
      },
      {
        "id": "b16-2",
        "kind": "teoria",
        "topic": "Placa madre y buses",
        "prompt": "¿Qué descripción corresponde a una placa madre?",
        "options": [
          "La tarjeta principal que interconecta componentes y distribuye alimentación.",
          "La unidad que convierte corriente alterna de red en corriente continua.",
          "La memoria de trabajo temporal que ejecuta las instrucciones de CPU.",
          "El firmware que se carga como un programa dentro del sistema operativo."
        ],
        "correct": 0,
        "explanation": "La placa madre es la tarjeta principal de circuitos impresos que integra conexiones y rutas de comunicación entre CPU, RAM, almacenamiento y periféricos. Distribuye alimentación mediante sus conectores y reguladores y aloja chipset, firmware y controladoras. El modelo exacto determina qué componentes pueden instalarse y qué funciones están disponibles."
      },
      {
        "id": "b16-3",
        "kind": "teoria",
        "topic": "Memoria RAM",
        "prompt": "¿Qué diferencia RAM y VRAM?",
        "options": [
          "RAM es memoria de trabajo general; VRAM está asociada al trabajo gráfico de una GPU.",
          "Ambas son memoria permanente que conserva datos sin alimentación.",
          "La VRAM de una tarjeta dedicada equivale siempre a RAM disponible para cualquier proceso.",
          "La RAM del sistema es exclusivamente almacenamiento de texturas de la GPU."
        ],
        "correct": 0,
        "explanation": "La RAM es memoria de trabajo para el sistema y sus programas; la VRAM es memoria asociada a la tarjeta gráfica para texturas, buffers y otros datos gráficos. Ambas suelen ser volátiles, pero cumplen funciones y usan conexiones diferentes. Una GPU integrada puede compartir RAM; eso no convierte la RAM común en un módulo de VRAM de la tarjeta."
      },
      {
        "id": "b16-4",
        "kind": "teoria",
        "topic": "Almacenamiento",
        "prompt": "¿Aproximadamente cuántos GiB son 500 GB decimales?",
        "options": [
          "465,7 GiB.",
          "500 GiB exactos.",
          "512 GiB.",
          "1000 GiB."
        ],
        "correct": 0,
        "explanation": "Los fabricantes suelen expresar GB como 10⁹ bytes; muchos sistemas muestran cantidades calculadas en GiB, donde 1 GiB = 2³⁰ bytes, a veces rotuladas como GB. Por ejemplo, 500 GB decimales son aproximadamente 465,7 GiB. Además influyen particiones y metadatos. Esa diferencia de unidades no demuestra una pérdida ni una falla."
      },
      {
        "id": "b16-5",
        "kind": "teoria",
        "topic": "Expansión y conectividad",
        "prompt": "¿Por qué puede haber más dispositivos USB detectados que conectores externos ocupados?",
        "options": [
          "Hubs internos y dispositivos compuestos pueden exponer varias funciones.",
          "Cada dispositivo USB necesita necesariamente cuatro conectores externos.",
          "El sistema cuenta todos los archivos del pendrive como dispositivos.",
          "Un puerto vacío duplica automáticamente la cantidad de dispositivos."
        ],
        "correct": 0,
        "explanation": "Un puerto puede conectarse a un hub con varios dispositivos; también existen hubs internos y dispositivos compuestos que exponen varias funciones, como cámara y micrófono. A la inversa, un puerto vacío no representa un dispositivo conectado. El listado del sistema muestra dispositivos/controladores lógicos, no un conteo directo de conectores externos."
      },
      {
        "id": "b16-6a",
        "kind": "practica",
        "topic": "Aplicación práctica",
        "prompt": "¿Qué combinación de conectores de la foto es correcta?",
        "options": [
          "ATX 24 pines: placa; ATX12V de CPU: procesador; CPU_FAN: ventilador.",
          "ATX 24 pines: monitor; SATA: CPU; CPU_FAN: SSD.",
          "DIMM: fuente; M.2: ventilador; HDMI: RAM.",
          "ATX12V: archivos; USB: pasta térmica; CPU_FAN: teclado."
        ],
        "correct": 0,
        "explanation": "En la ASUS PRIME H510M-E, el ATX de 24 pines se ubica junto al borde derecho, cerca de los DIMM. El conector de alimentación de CPU de 8 pines está hacia el borde superior izquierdo. CPU_FAN es un header pequeño de ventilador próximo al socket, identificado por su serigrafía; confirmar su ubicación en el manual P1 para no confundirlo con un header de gabinete."
      },
      {
        "id": "b16-6b",
        "kind": "practica",
        "topic": "Aplicación práctica",
        "prompt": "¿Qué diferencia la conexión de un SSD SATA de 2,5 pulgadas de un M.2?",
        "options": [
          "El SATA de 2,5 usa datos/alimentación por cables o conector combinado; M.2 conecta datos y energía en su ranura.",
          "Todo M.2 necesita dos cables SATA separados.",
          "El SSD de 2,5 pulgadas se inserta directamente en DIMM.",
          "M.2 siempre significa NVMe y nunca SATA."
        ],
        "correct": 0,
        "explanation": "Los SATA son conectores de datos con llave en L; el M.2 es un conector pequeño sobre la placa, acompañado de posiciones de tornillo para distintos largos. Un SSD SATA de 2,5 pulgadas requiere datos y alimentación separados o un conector combinado; el M.2 toma datos y energía de su ranura y se fija con tornillo. Hay que comprobar si ese M.2 usa SATA o PCIe/NVMe."
      },
      {
        "id": "b16-6c",
        "kind": "practica",
        "topic": "Aplicación práctica",
        "prompt": "¿Qué verificás para agregar RAM y gráfica a esta placa?",
        "options": [
          "Requisitos propios de cada componente: memoria admitida y ranura/espacio/fuente para gráfica.",
          "Solo coincidencia de marca entre placa, RAM y gráfica.",
          "Solo que RAM y tarjeta gráfica tengan igual capacidad en GB.",
          "Solo disponer de una ranura larga, sin revisar alimentación ni formato de RAM."
        ],
        "correct": 0,
        "explanation": "Para RAM: DDR4 DIMM, capacidad por ranura y total, tensión, organización y perfiles admitidos por CPU y placa. Para gráfica: PCIe físico y eléctrico, dimensiones, fuente, conectores y controladores. En ambos casos apagaría y desconectaría antes de instalar y usaría protección ESD. Comprobaría reconocimiento y funcionamiento después."
      }
    ]
  },
  {
    "number": 17,
    "title": "Compatibilidad de un conjunto dado",
    "contextHtml": "<h4>Tema Compatibilidad de un conjunto dado</h4><div class=\"source-p\">Analizá exclusivamente los componentes indicados. El gabinete y la fuente todavía no fueron informados.</div><div class=\"table-scroll\" tabindex=\"0\" role=\"region\" aria-label=\"Tabla técnica desplazable\"><table><thead><tr><th scope=\"col\"><div class=\"source-p\">Componente</div></th><th scope=\"col\"><div class=\"source-p\">Especificación dada</div></th></tr></thead><tbody><tr><td><div class=\"source-p\">Placa</div></td><td><div class=\"source-p\">ASUS PRIME H510M-E: LGA1200, DIMM DDR4</div></td></tr><tr><td><div class=\"source-p\">CPU propuesta</div></td><td><div class=\"source-p\">Intel Core i5-12400F: LGA1700</div></td></tr><tr><td><div class=\"source-p\">RAM propuesta</div></td><td><div class=\"source-p\">Kingston KVR32N22S8/8: 8 GB DIMM DDR4</div></td></tr><tr><td><div class=\"source-p\">SSD propuesto</div></td><td><div class=\"source-p\">Kingston NV2: M.2 2280 PCIe/NVMe</div></td></tr><tr><td><div class=\"source-p\">Ranura M.2 de la placa</div></td><td><div class=\"source-p\">2280, PCIe 3.0 x4 y SATA</div></td></tr></tbody></table></div><div class=\"source-p\">Datos técnicos de fabricantes citados en el anexo; condiciones del caso indicadas en el ejercicio.</div>",
    "questions": [
      {
        "id": "b17-1",
        "kind": "teoria",
        "topic": "Arquitectura y CPU",
        "prompt": "¿Qué diferencia generación de gama de CPU?",
        "options": [
          "Generación refiere a una evolución/familia; gama ubica el producto dentro de una familia comercial.",
          "La generación indica siempre el socket y la gama la cantidad exacta de núcleos.",
          "La gama más alta supera a cualquier CPU de una generación posterior.",
          "Generación y gama son dos nombres de una misma característica física."
        ],
        "correct": 0,
        "explanation": "La generación identifica una familia o evolución de arquitectura; la gama ubica al producto dentro de una familia comercial, por ejemplo Core i3/i5/i7 o Ryzen 3/5/7. Un procesador de gama mayor pero antiguo no es necesariamente más rápido que uno de gama menor reciente. Se comparan modelos concretos, tareas y especificaciones."
      },
      {
        "id": "b17-2",
        "kind": "teoria",
        "topic": "Placa madre y buses",
        "prompt": "¿Qué identifica H510 en ASUS PRIME H510M-E?",
        "options": [
          "El chipset de la placa.",
          "La tasa máxima de RAM en MT/s de cualquier configuración.",
          "El socket exacto de todos los procesadores Intel que existan.",
          "La revisión física instalada del firmware BIOS."
        ],
        "correct": 0,
        "explanation": "No existe una nomenclatura universal. En ASUS PRIME H510M-E: ASUS es el fabricante; PRIME, la familia; H510, el chipset; M suele indicar una variante microATX y E identifica una variante del fabricante. Sufijos como D4 o WIFI pueden indicar características en otras series. Su significado se confirma en la ficha, no se generaliza a todas las marcas."
      },
      {
        "id": "b17-3",
        "kind": "teoria",
        "topic": "Memoria RAM",
        "prompt": "¿Qué es la memoria virtual?",
        "options": [
          "Una abstracción de direcciones administrada por el sistema, con apoyo de RAM y posible paginación.",
          "RAM física que aparece al crear una partición.",
          "La VRAM de cualquier tarjeta gráfica.",
          "Una función exclusiva de discos mecánicos que no usa el sistema operativo."
        ],
        "correct": 0,
        "explanation": "La memoria virtual es una abstracción de memoria que administra el sistema operativo con apoyo del hardware de gestión de memoria. Asigna espacios de direcciones a los procesos y puede respaldar páginas con RAM y con almacenamiento, como archivo de paginación o swap. No es RAM física adicional; un uso intenso del disco para paginar puede ralentizar el equipo."
      },
      {
        "id": "b17-4",
        "kind": "teoria",
        "topic": "Almacenamiento",
        "prompt": "¿Un HDD conectado a SATA de 6 Gb/s alcanza siempre esa transferencia?",
        "options": [
          "No: la interfaz no garantiza la tasa real del mecanismo y la carga de trabajo.",
          "Sí: todo HDD SATA III entrega unos 600 MB/s de forma constante.",
          "Sí: el cable fija por sí solo la velocidad sostenida del mecanismo.",
          "No: porque SATA III solo permite conectar SSD y no HDD."
        ],
        "correct": 0,
        "explanation": "No. SATA 6 Gb/s indica la capacidad de la interfaz, no la velocidad que los platos y cabezales del HDD pueden entregar. Influyen velocidad mecánica, patrón de acceso, caché y tamaño de archivos. Un HDD puede estar correctamente conectado a SATA III y rendir muy por debajo del techo de unos 600 MB/s de la interfaz."
      },
      {
        "id": "b17-5",
        "kind": "teoria",
        "topic": "Expansión y conectividad",
        "prompt": "¿Qué prueba ayuda a identificar si falla un mouse USB o el puerto?",
        "options": [
          "Cruzar mouse y puerto con otros conocidos como buenos.",
          "Cambiar simultáneamente todos los periféricos sin observar resultados.",
          "Reinstalar siempre el sistema operativo como primera prueba.",
          "Aumentar la resolución del monitor."
        ],
        "correct": 0,
        "explanation": "Probaría el mouse en otro puerto que funcione y, si es posible, en otra PC; después probaría un mouse conocido como bueno en el puerto sospechoso. Si el fallo sigue al mouse, sospecharía de él o de su cable; si sigue al puerto, de ese puerto o su conexión. También revisaría detección y controladores, sin cambiar varias cosas a la vez."
      },
      {
        "id": "b17-6a",
        "kind": "practica",
        "topic": "Aplicación práctica",
        "prompt": "¿Qué incompatibilidad segura tiene el conjunto propuesto del caso?",
        "options": [
          "El i5-12400F LGA1700 no corresponde a la placa LGA1200.",
          "La RAM DDR4 DIMM no coincide con una placa DDR4 DIMM.",
          "El SSD NVMe nunca puede trabajar en PCIe 3.0.",
          "El gabinete no tiene espacio, aunque sus medidas no se informan."
        ],
        "correct": 0,
        "explanation": "La CPU propuesta es incompatible: el i5-12400F requiere LGA1700 y la ASUS PRIME H510M-E tiene LGA1200. No debe montarse ni forzarse. Actualizar BIOS no cambia el socket físico. Es una incompatibilidad segura con los datos dados."
      },
      {
        "id": "b17-6b",
        "kind": "practica",
        "topic": "Aplicación práctica",
        "prompt": "¿Qué puede concluirse sobre RAM y SSD del conjunto propuesto?",
        "options": [
          "Coinciden sus tipos de conexión, pero faltan verificaciones y no es compatible todo el conjunto.",
          "Todo el conjunto ya está confirmado porque coinciden RAM y SSD.",
          "La fuente tiene potencia suficiente aunque no se informó.",
          "La BIOS instalada está actualizada aunque no se informó."
        ],
        "correct": 0,
        "explanation": "La RAM DDR4 DIMM y el SSD M.2 2280 PCIe/NVMe coinciden con los tipos de conexión informados. Falta comprobar una CPU compatible y su BIOS, capacidad/organización/perfiles de RAM, espacio y fijación del SSD, y recursos compartidos. Gabinete y fuente no están informados: no se puede declarar compatible el conjunto completo ni afirmar que ya funciona."
      },
      {
        "id": "b17-6c",
        "kind": "practica",
        "topic": "Aplicación práctica",
        "prompt": "¿Qué pasa con el enlace del SSD PCIe 4.0 en esa ranura PCIe 3.0 x4 compatible?",
        "options": [
          "Negocia como máximo PCIe 3.0 x4; la tasa real también depende de la unidad y la carga.",
          "Se transforma en un SSD SATA por bajar de generación.",
          "Trabaja obligatoriamente a exactamente la mitad de cualquier medición anterior.",
          "La ranura aumenta automáticamente a PCIe 4.0."
        ],
        "correct": 0,
        "explanation": "El SSD y la ranura negocian el enlace común: como máximo PCIe 3.0 x4 en este caso. El SSD puede funcionar, pero no usar la capacidad de enlace de PCIe 4.0. La tasa real también está limitada por la propia unidad y la carga; no se deduce que su velocidad se reduzca exactamente a la mitad."
      }
    ]
  },
  {
    "number": 18,
    "title": "Equipo armado sin imagen",
    "contextHtml": "<h4>Tema Equipo armado sin imagen</h4><div class=\"source-p\">El equipo enciende y no muestra imagen. Este es un caso didáctico con los datos anteriores.</div><div class=\"table-scroll\" tabindex=\"0\" role=\"region\" aria-label=\"Tabla técnica desplazable\"><table><thead><tr><th scope=\"col\"><div class=\"source-p\">Dato del caso</div></th><th scope=\"col\"><div class=\"source-p\">Información</div></th></tr></thead><tbody><tr><td><div class=\"source-p\">Placa</div></td><td><div class=\"source-p\">MSI PRO H610M-E DDR4, LGA1700</div></td></tr><tr><td><div class=\"source-p\">CPU</div></td><td><div class=\"source-p\">Intel Core i5-12400F, sin gráfica integrada</div></td></tr><tr><td><div class=\"source-p\">Gráfica dedicada</div></td><td><div class=\"source-p\">Instalada en PCIe</div></td></tr><tr><td><div class=\"source-p\">Conexión del monitor</div></td><td><div class=\"source-p\">Salida HDMI de la placa madre</div></td></tr></tbody></table></div><div class=\"source-p\">Datos técnicos de fabricantes citados en el anexo; condiciones del caso indicadas en el ejercicio.</div>",
    "questions": [
      {
        "id": "b18-1",
        "kind": "teoria",
        "topic": "Arquitectura y CPU",
        "prompt": "¿Qué diferencia PGA, LGA y BGA?",
        "options": [
          "PGA tiene pines en el chip; LGA contactos en el socket; BGA unión soldada mediante bolas.",
          "PGA tiene contactos planos en CPU; LGA tiene pines en CPU; BGA usa una ranura extraíble.",
          "Los tres usan zócalos intercambiables y solo cambia la marca.",
          "BGA tiene un mecanismo de trabas que permite extraer el chip sin soldar."
        ],
        "correct": 0,
        "explanation": "PGA tiene pines en el encapsulado del procesador que entran en el zócalo. LGA tiene contactos planos en el procesador y contactos elásticos en el socket. BGA usa bolas de soldadura para unir el chip a la placa; no es un reemplazo sencillo mediante zócalo. El tipo de conexión no debe atribuirse de manera absoluta a una sola marca."
      },
      {
        "id": "b18-2",
        "kind": "teoria",
        "topic": "Placa madre y buses",
        "prompt": "¿Para qué puede utilizarse Clear CMOS?",
        "options": [
          "Restablecer determinados ajustes del firmware siguiendo el manual.",
          "Actualizar automáticamente el firmware a su última versión.",
          "Reinstalar Windows sin usar almacenamiento.",
          "Reparar físicamente un módulo RAM quemado."
        ],
        "correct": 0,
        "explanation": "Clear CMOS restablece determinados ajustes del firmware a sus valores predeterminados; puede utilizarse ante configuraciones que impiden arrancar, como parámetros de memoria incorrectos. Se realiza siguiendo el manual, con el equipo desconectado y el método indicado. Puede requerir reconfigurar fecha, arranque y otros ajustes; no reinstala el sistema operativo ni actualiza el firmware."
      },
      {
        "id": "b18-3",
        "kind": "teoria",
        "topic": "Memoria RAM",
        "prompt": "¿Qué conclusión permite una PC sin imagen tras colocar RAM?",
        "options": [
          "Hay que comprobar compatibilidad/montaje y hacer pruebas antes de atribuir daño.",
          "La RAM está obligatoriamente destruida.",
          "La CPU tiene obligatoriamente el socket incorrecto.",
          "La fuente nunca puede estar involucrada."
        ],
        "correct": 0,
        "explanation": "Puede causar falta de POST o de imagen, códigos o LED de error, bloqueos, reinicios, cierres de programas y corrupción de datos. Estos síntomas también pueden tener otras causas. Deben comprobarse compatibilidad y montaje y realizar pruebas por módulo y ranura antes de concluir que la RAM está dañada."
      },
      {
        "id": "b18-4",
        "kind": "teoria",
        "topic": "Almacenamiento",
        "prompt": "¿Puede funcionar directamente un SSD NVMe en una ranura M.2 solo SATA?",
        "options": [
          "No: falta el soporte de interfaz/protocolo PCIe/NVMe.",
          "Sí: por compartir el nombre M.2.",
          "Sí: si se reduce la capacidad de la partición.",
          "Sí: si se actualiza únicamente el navegador."
        ],
        "correct": 0,
        "explanation": "No funciona directamente. Una ranura M.2 solo SATA no proporciona el enlace PCIe y el soporte NVMe que necesita ese SSD. La coincidencia de forma o largo no modifica los protocolos. Debe elegirse un SSD M.2 SATA admitido o una conexión compatible alternativa diseñada para el equipo."
      },
      {
        "id": "b18-5",
        "kind": "teoria",
        "topic": "Expansión y conectividad",
        "prompt": "¿Qué verificarías antes de elegir un adaptador USB a Ethernet?",
        "options": [
          "Versión/puerto USB, velocidad de red, controladores y compatibilidad del sistema.",
          "Solo la velocidad Ethernet anunciada, aunque el USB limite la transferencia.",
          "Solo que el conector entre, sin verificar controladores del sistema.",
          "Solo que el equipo tenga una conexión Wi-Fi activa."
        ],
        "correct": 0,
        "explanation": "Verificaría tipo de puerto y versión USB, velocidad del adaptador Ethernet y de la red, soporte y controladores del sistema, alimentación requerida y cable de red. Un adaptador Gigabit conectado a una interfaz USB lenta no garantiza transferencias Gigabit útiles. Después comprobaría enlace y configuración IP."
      },
      {
        "id": "b18-6a",
        "kind": "practica",
        "topic": "Aplicación práctica",
        "prompt": "¿Cuál es la primera conexión de video a revisar en el caso del i5-12400F?",
        "options": [
          "El cable en la placa madre, porque esa CPU no tiene gráfica integrada.",
          "La conexión al SSD, porque NVMe siempre es necesario para obtener imagen de BIOS.",
          "La RAM, porque agregar una gráfica desactiva automáticamente todos los DIMM.",
          "La CPU_FAN, porque ese header proporciona directamente la señal HDMI."
        ],
        "correct": 0,
        "explanation": "Primero revisaría dónde está conectado el monitor. El cable va al HDMI de la placa madre, pero el i5-12400F no tiene gráfica integrada. Esa salida no puede generar imagen a partir de esta CPU. El caso informa que hay una tarjeta dedicada, por lo que corresponde utilizar sus salidas."
      },
      {
        "id": "b18-6b",
        "kind": "practica",
        "topic": "Aplicación práctica",
        "prompt": "¿A dónde debería trasladarse el cable de monitor del caso?",
        "options": [
          "A una salida compatible de la gráfica dedicada instalada.",
          "A una ranura DIMM libre.",
          "Al conector ATX de 24 pines.",
          "A otro puerto de placa madre que dependa igualmente de una gráfica integrada ausente."
        ],
        "correct": 0,
        "explanation": "Trasladaría el cable a una salida compatible de la gráfica dedicada instalada en PCIe, por ejemplo HDMI o DisplayPort con el cable adecuado. También seleccionaría la entrada correspondiente en el monitor. No se conecta el monitor a una ranura PCIe: se conecta a los puertos externos de la tarjeta."
      },
      {
        "id": "b18-6c",
        "kind": "practica",
        "topic": "Aplicación práctica",
        "prompt": "¿Si continúa sin imagen, qué grupo de pruebas es apropiado?",
        "options": [
          "Monitor/cable/entrada, montaje y alimentación de gráfica, RAM y señales POST.",
          "Formatear el disco antes de observar señales de POST.",
          "Cambiar pasta térmica sin revisar cable ni entrada seleccionada.",
          "Declarar dañada la GPU sin una prueba de aislamiento."
        ],
        "correct": 0,
        "explanation": "Comprobaría: 1) monitor, entrada seleccionada y cable con otro equipo o cable conocido como bueno; 2) montaje de gráfica y sus conexiones de alimentación si las requiere; 3) RAM correctamente instalada y señales de diagnóstico POST. Apagar y desconectar antes de recolocar piezas. Si persiste, aislar componentes con pruebas y piezas compatibles, sin declarar daño solo por la pantalla negra."
      }
    ]
  },
  {
    "number": 19,
    "title": "Secuencia de cambio de pasta térmica",
    "contextHtml": "<h4>Tema Secuencia de cambio de pasta térmica</h4><div class=\"source-p\">Resolvé por escrito el procedimiento. No es necesario desmontar un equipo durante la evaluación.</div><div class=\"table-scroll\" tabindex=\"0\" role=\"region\" aria-label=\"Tabla técnica desplazable\"><table><thead><tr><th scope=\"col\"><div class=\"source-p\">Material</div></th><th scope=\"col\"><div class=\"source-p\">Dato</div></th></tr></thead><tbody><tr><td><div class=\"source-p\">CPU</div></td><td><div class=\"source-p\">Intel Core i5-10400 con disipador ya usado</div></td></tr><tr><td><div class=\"source-p\">Disipador</div></td><td><div class=\"source-p\">Noctua NH-U12S redux, anclaje LGA1200</div></td></tr><tr><td><div class=\"source-p\">Interfaz del caso</div></td><td><div class=\"source-p\">Pasta térmica usada entre CPU y disipador</div></td></tr><tr><td><div class=\"source-p\">Elementos disponibles</div></td><td><div class=\"source-p\">Pasta nueva, isopropílico y paño sin pelusa</div></td></tr></tbody></table></div><div class=\"source-p\">Datos técnicos de fabricantes citados en el anexo; condiciones del caso indicadas en el ejercicio.</div>",
    "questions": [
      {
        "id": "b19-1",
        "kind": "teoria",
        "topic": "Arquitectura y CPU",
        "prompt": "¿Alcanza con que coincida el socket de CPU y placa?",
        "options": [
          "No: también se confirma soporte de chipset/BIOS y requisitos eléctricos/térmicos.",
          "Sí: el socket garantiza todas las compatibilidades.",
          "Sí: aunque la CPU no esté soportada por el firmware.",
          "No: porque el socket no tiene ninguna importancia física."
        ],
        "correct": 0,
        "explanation": "No. Además del socket se requieren chipset y generación soportados, CPU en la lista oficial y BIOS adecuada, alimentación suficiente y refrigeración compatible. El gabinete debe ofrecer espacio. Dos procesadores que encajan en el mismo socket pueden necesitar soporte eléctrico y de firmware diferente; se verifica el modelo exacto."
      },
      {
        "id": "b19-2",
        "kind": "teoria",
        "topic": "Placa madre y buses",
        "prompt": "¿Qué función cumplía el puente norte en diseños antiguos?",
        "options": [
          "Gestionar enlaces rápidos como CPU, RAM y gráfica.",
          "Gestionar exclusivamente periféricos lentos, como el puente sur.",
          "Alimentar la CPU y sustituir los reguladores de voltaje.",
          "Guardar el firmware y todos los archivos del sistema operativo."
        ],
        "correct": 0,
        "explanation": "En diseños antiguos, el puente norte gestionaba enlaces rápidos como CPU, RAM y gráfica; el puente sur atendía funciones como almacenamiento, USB y otros periféricos. En diseños modernos muchas funciones del norte pasaron a la CPU y el chipset concentra otras entradas/salidas. No debe trasladarse literalmente el esquema antiguo a todas las placas actuales."
      },
      {
        "id": "b19-3",
        "kind": "teoria",
        "topic": "Memoria RAM",
        "prompt": "¿Qué práctica protege la RAM frente a ESD?",
        "options": [
          "Desconectar y usar protección antiestática, sujetándola por los bordes.",
          "Tocar los contactos con los dedos para descargarlos.",
          "Instalarla sobre una alfombra mientras el equipo funciona.",
          "Frotar los chips con ropa sintética."
        ],
        "correct": 0,
        "explanation": "Una descarga electrostática es una transferencia súbita de carga entre cuerpos a distinto potencial y puede dañar chips. Para proteger RAM, apagar y desconectar el equipo, usar protección ESD con punto de tierra apropiado, sujetar el módulo por los bordes, evitar tocar contactos y conservarlo en bolsa antiestática. Evitar alfombras y prendas que acumulen estática."
      },
      {
        "id": "b19-4",
        "kind": "teoria",
        "topic": "Almacenamiento",
        "prompt": "¿Qué diferencia cable SATA de datos de SATA de alimentación?",
        "options": [
          "Uno comunica con la controladora y el otro aporta energía desde la fuente.",
          "Ambos llevan exclusivamente audio.",
          "El de datos alimenta directamente la CPU.",
          "Son conectores siempre intercambiables."
        ],
        "correct": 0,
        "explanation": "El cable SATA de datos comunica la unidad con la controladora de almacenamiento y normalmente tiene 7 contactos. El SATA de alimentación lleva energía desde la fuente y tiene 15 contactos. No son intercambiables. En portátiles pueden presentarse unidos en un conector combinado; la unidad necesita ambas funciones."
      },
      {
        "id": "b19-5",
        "kind": "teoria",
        "topic": "Expansión y conectividad",
        "prompt": "¿Ante falta de audio, qué revisás primero?",
        "options": [
          "Conexión, encendido/volumen y salida seleccionada, antes de aislar otras causas.",
          "Reinstalar controladores antes de revisar si la salida elegida está silenciada.",
          "Dar por dañado el circuito de audio sin probar otros auriculares.",
          "Cambiar la fuente porque todo problema de audio indica falta de potencia."
        ],
        "correct": 0,
        "explanation": "Revisaría que altavoces o auriculares estén encendidos, conectados a la salida correcta y con volumen; después silencio y dispositivo de salida seleccionado en el sistema y la aplicación. Comprobaría controladores y conexiones de audio frontal si falla solo ese panel. Una prueba con otros auriculares o salida ayuda a distinguir conexión, configuración y hardware."
      },
      {
        "id": "b19-6a",
        "kind": "practica",
        "topic": "Aplicación práctica",
        "prompt": "¿Dónde va “dejar secar” en la secuencia de cambio de pasta del caso?",
        "options": [
          "Después de limpiar y antes de aplicar la pasta nueva: se evapora el limpiador.",
          "Después de aplicar pasta nueva, esperando que se endurezca antes de montar.",
          "Después de encender la CPU sin disipador.",
          "Antes de desconectar el equipo."
        ],
        "correct": 0,
        "explanation": "Desconectar y aplicar protección ESD → retirar el disipador con el método del fabricante → limpiar la pasta anterior → dejar secar completamente el producto de limpieza → aplicar pasta nueva → montar el disipador → verificar conexiones y funcionamiento. “Dejar secar” se refiere al limpiador usado, no a esperar que seque la pasta nueva antes del montaje."
      },
      {
        "id": "b19-6b",
        "kind": "practica",
        "topic": "Aplicación práctica",
        "prompt": "¿Entre qué superficies se coloca pasta térmica en este caso?",
        "options": [
          "Entre la tapa metálica de CPU y la base del disipador.",
          "Entre los pines del socket y los contactos de RAM.",
          "Dentro del conector de alimentación ATX.",
          "Sobre las aspas del ventilador."
        ],
        "correct": 0,
        "explanation": "Se limpian la tapa metálica de la CPU y la base de contacto del disipador, sin introducir suciedad o líquido en el socket. La pasta nueva se coloca entre ambas superficies con la cantidad y patrón recomendados. Evitar reutilizar pasta contaminada, aplicar exceso o sumar una capa a otra existente. No se aplica sobre pines ni contactos."
      },
      {
        "id": "b19-6c",
        "kind": "practica",
        "topic": "Aplicación práctica",
        "prompt": "¿Qué comprobación final corresponde al cambio de pasta?",
        "options": [
          "Montaje/conexiones, giro/RPM y temperatura en reposo y carga controlada.",
          "Solo observar que el equipo arranque una vez, sin revisar el ventilador.",
          "Solo controlar la temperatura máxima publicada, sin medir la real.",
          "Ejecutar carga intensa sin revisar temperatura ni fijación del disipador."
        ],
        "correct": 0,
        "explanation": "Comprobaría conexión a CPU_FAN, alimentación de CPU, fijación uniforme y que los cables no toquen el ventilador. Verificaría RPM, temperatura en reposo y después con carga controlada, comparando con límites y comportamiento esperados del modelo. Si la temperatura sube anormalmente o hay apagados, detendría la prueba y revisaría el montaje."
      }
    ]
  },
  {
    "number": 20,
    "title": "Limpieza y reinstalación de RAM",
    "contextHtml": "<h4>Tema Limpieza y reinstalación de RAM</h4><div class=\"source-p\">Describí el procedimiento para este material; no se pide buscar un módulo ni realizar una reparación.</div><div class=\"table-scroll\" tabindex=\"0\" role=\"region\" aria-label=\"Tabla técnica desplazable\"><table><thead><tr><th scope=\"col\"><div class=\"source-p\">Material del ejercicio</div></th><th scope=\"col\"><div class=\"source-p\">Dato</div></th></tr></thead><tbody><tr><td><div class=\"source-p\">Módulo</div></td><td><div class=\"source-p\">Kingston KVR32N22S8/8</div></td></tr><tr><td><div class=\"source-p\">Tipo</div></td><td><div class=\"source-p\">8 GB DDR4 DIMM, 288 contactos</div></td></tr><tr><td><div class=\"source-p\">Placa</div></td><td><div class=\"source-p\">DIMM DDR4, admite módulos de 8 GB</div></td></tr><tr><td><div class=\"source-p\">Situación planteada</div></td><td><div class=\"source-p\">Polvo en la ranura y suciedad visible en contactos</div></td></tr></tbody></table></div><div class=\"source-p\">Datos técnicos de fabricantes citados en el anexo; condiciones del caso indicadas en el ejercicio.</div>",
    "questions": [
      {
        "id": "b20-1",
        "kind": "teoria",
        "topic": "Arquitectura y CPU",
        "prompt": "¿Cómo debe interpretarse el TDP al elegir refrigeración?",
        "options": [
          "Como orientación de diseño térmico, junto con límites y compatibilidad del modelo.",
          "Como consumo máximo idéntico en toda circunstancia.",
          "Como capacidad de almacenamiento en GB.",
          "Como garantía de rendimiento superior entre arquitecturas."
        ],
        "correct": 0,
        "explanation": "El TDP orienta sobre los requisitos de diseño térmico y ayuda a elegir la refrigeración. No equivale necesariamente al consumo máximo ni a una medida de rendimiento. Deben consultarse también las potencias y límites definidos para el modelo, el soporte real del disipador, la carga prevista y la ventilación del gabinete."
      },
      {
        "id": "b20-2",
        "kind": "teoria",
        "topic": "Placa madre y buses",
        "prompt": "¿Por qué importa la revisión exacta de la placa?",
        "options": [
          "Puede cambiar conectores, circuitos y soporte de BIOS/componentes.",
          "Porque el número de revisión garantiza por sí solo mayor velocidad.",
          "Porque todas las revisiones de un modelo necesariamente usan la misma BIOS.",
          "Porque conocer el chipset reemplaza cualquier consulta del modelo exacto."
        ],
        "correct": 0,
        "explanation": "Variantes y revisiones pueden cambiar conectores, circuitos, BIOS y componentes admitidos. Un nombre parecido, o el mismo chipset, no confirma igual soporte de CPU, memoria o almacenamiento. Se identifica fabricante, modelo completo y revisión física y se consulta su manual y lista de compatibilidad; no se usa la documentación de una variante por su apariencia."
      },
      {
        "id": "b20-3",
        "kind": "teoria",
        "topic": "Memoria RAM",
        "prompt": "¿Qué cuidado corresponde al manipular RAM?",
        "options": [
          "Desconectar, controlar ESD, sujetar por bordes y respetar muesca y trabas.",
          "Retirarla con la PC encendida para comprobar su temperatura.",
          "Forzar un módulo cuando la muesca no coincide.",
          "Mojar las ranuras para facilitar la inserción."
        ],
        "correct": 0,
        "explanation": "Apagaría y desconectaría; en portátiles seguiría el procedimiento de desconexión de batería del fabricante. Aplicaría protección ESD, abriría trabas y sujetaría la RAM por los bordes. Retiraría polvo y solo limpiaría contactos si hace falta, con método apropiado sin residuos. Esperaría a que esté seca y la reinstalaría respetando muesca y trabas, sin forzar."
      },
      {
        "id": "b20-4",
        "kind": "teoria",
        "topic": "Almacenamiento",
        "prompt": "¿Cuándo puede convenir combinar SSD y HDD?",
        "options": [
          "SSD para respuesta rápida de sistema/programas y HDD para capacidad de archivos.",
          "Para que el HDD duplique los núcleos del procesador.",
          "Para sustituir automáticamente cualquier respaldo externo.",
          "Para convertir SATA en PCIe sin adaptadores."
        ],
        "correct": 0,
        "explanation": "Conviene cuando se busca respuesta rápida para sistema y programas en SSD y capacidad económica para archivos voluminosos en HDD. Debe haber espacio y conexiones suficientes. Usar ambos dentro de la misma PC no constituye por sí solo un respaldo seguro: una falla, robo o malware puede afectar a ambos. Se necesita una copia independiente."
      },
      {
        "id": "b20-5",
        "kind": "teoria",
        "topic": "Expansión y conectividad",
        "prompt": "¿Qué función cumple un driver?",
        "options": [
          "Permite al sistema operativo comunicarse con un dispositivo de hardware.",
          "Modifica el hardware para cambiar físicamente su socket.",
          "Es el firmware que necesariamente se guarda en la pila de la placa.",
          "Es un programa que sustituye los requisitos eléctricos de un componente."
        ],
        "correct": 0,
        "explanation": "Un driver o controlador es software que permite al sistema operativo comunicarse y trabajar con un dispositivo de hardware. Debe corresponder al dispositivo y a la versión del sistema. Una tarjeta físicamente instalada puede no funcionar bien si falta su controlador. Se obtiene del fabricante o de las fuentes confiables del sistema."
      },
      {
        "id": "b20-6a",
        "kind": "practica",
        "topic": "Aplicación práctica",
        "prompt": "¿Cómo sujetarías el DIMM del caso antes de limpiarlo?",
        "options": [
          "Por los bordes, con el equipo desconectado y protección ESD.",
          "Por los contactos dorados con los dedos.",
          "Por un chip haciendo palanca con un destornillador.",
          "Mientras continúa insertado y el equipo está encendido."
        ],
        "correct": 0,
        "explanation": "Apagar, desconectar alimentación y aplicar protección ESD antes de abrir las trabas. Sujetaría el módulo por sus bordes, evitando tocar chips y contactos dorados. Lo apoyaría sobre una superficie o bolsa adecuada para electrónica. No retiraría ni insertaría RAM con el equipo alimentado."
      },
      {
        "id": "b20-6b",
        "kind": "practica",
        "topic": "Aplicación práctica",
        "prompt": "¿Qué procedimiento de limpieza es adecuado para contactos sucios del DIMM?",
        "options": [
          "Limpieza suave sin residuos, isopropílico de alta pureza si hace falta y secado completo.",
          "Abrasivo fuerte para raspar el dorado.",
          "Agua de la canilla dentro de la ranura.",
          "Soplar con la boca y reinstalar húmedo."
        ],
        "correct": 0,
        "explanation": "Retiraría polvo con aire para electrónica en ráfagas suaves y con el envase en la posición indicada. Si los contactos tienen suciedad, usaría una mínima cantidad de isopropílico de alta pureza sobre un aplicador que no deje pelusa y dejaría evaporar. Evitaría abrasivos, goma de borrar, líquidos domésticos, exceso de líquido y soplar con la boca. No introduciría objetos en la ranura."
      },
      {
        "id": "b20-6c",
        "kind": "practica",
        "topic": "Aplicación práctica",
        "prompt": "¿Qué prueba verifica reconocimiento y errores tras reinstalar?",
        "options": [
          "Comprobar los 8 GB detectados y ejecutar diagnóstico de memoria.",
          "Solo comprobar que el sistema detecte 8 GB, sin probar errores.",
          "Solo que las trabas estén cerradas, sin iniciar el equipo.",
          "Solo comparar la capacidad impresa con el espacio libre del SSD."
        ],
        "correct": 0,
        "explanation": "Alinearía la muesca del DIMM DDR4, insertaría uniformemente hasta asegurar sus trabas y comprobaría que queda asentado. Al iniciar, verificaría los 8 GB en BIOS/UEFI y sistema operativo y ejecutaría MemTest86+ o diagnóstico de memoria. Que la cantidad sea reconocida no prueba por sí solo ausencia de errores."
      }
    ]
  },
  {
    "number": 21,
    "title": "Diagnóstico y limpieza de un SSD SATA",
    "contextHtml": "<h4>Tema Diagnóstico y limpieza de un SSD SATA</h4><div class=\"source-p\">Situación del ejercicio: el equipo tarda en abrir archivos. No se informa todavía el estado S.M.A.R.T. del SSD.</div><div class=\"table-scroll\" tabindex=\"0\" role=\"region\" aria-label=\"Tabla técnica desplazable\"><table><thead><tr><th scope=\"col\"><div class=\"source-p\">Dato del material</div></th><th scope=\"col\"><div class=\"source-p\">Especificación</div></th></tr></thead><tbody><tr><td><div class=\"source-p\">SSD</div></td><td><div class=\"source-p\">Kingston A400 SA400S37/480G</div></td></tr><tr><td><div class=\"source-p\">Formato e interfaz</div></td><td><div class=\"source-p\">2,5 pulgadas / SATA</div></td></tr><tr><td><div class=\"source-p\">Lectura / escritura anunciadas</div></td><td><div class=\"source-p\">Hasta 500 / 450 MB/s</div></td></tr><tr><td><div class=\"source-p\">Temperatura de operación</div></td><td><div class=\"source-p\">0 a 70 °C</div></td></tr></tbody></table></div><div class=\"source-p\">Datos técnicos de fabricantes citados en el anexo; condiciones del caso indicadas en el ejercicio.</div>",
    "questions": [
      {
        "id": "b21-1",
        "kind": "teoria",
        "topic": "Arquitectura y CPU",
        "prompt": "¿Qué conjunto reúne parámetros relevantes de rendimiento de CPU?",
        "options": [
          "Frecuencia, núcleos/hilos y caché.",
          "Socket, generación y formato de zócalo, sin considerar la tarea.",
          "TDP, tamaño físico y tipo de anclaje como única medida de rapidez.",
          "Cantidad de ranuras RAM, puertos SATA y conectores USB."
        ],
        "correct": 0,
        "explanation": "El procesador es un circuito integrado de silicio que ejecuta instrucciones y realiza operaciones de cálculo y control. Tres parámetros de rendimiento son frecuencia de reloj, núcleos/hilos y caché; también influyen IPC y carga. Tres comprobaciones de compatibilidad son socket, soporte de chipset/BIOS para ese modelo y memoria admitida. Además deben verificarse alimentación y refrigeración."
      },
      {
        "id": "b21-2",
        "kind": "teoria",
        "topic": "Placa madre y buses",
        "prompt": "¿Qué clasificación corresponde a SATA, USB y PCIe?",
        "options": [
          "Los tres son seriales; SATA se orienta a almacenamiento y USB/PCIe tienen usos más generales.",
          "Los tres son buses paralelos exclusivos para RAM.",
          "USB es paralelo y SATA conecta cualquier tarjeta PCIe.",
          "PCIe conecta únicamente discos SATA."
        ],
        "correct": 0,
        "explanation": "SATA conecta HDD, SSD SATA y unidades ópticas: transferencia serial y propósito específico de almacenamiento. USB conecta diversos periféricos externos: serial y propósito general. PCIe conecta gráficas, red, sonido, controladoras y SSD NVMe: serial, por líneas y full-duplex, de propósito general para expansión de alta velocidad. Propósito general no significa que todos compartan conector o protocolo de dispositivo."
      },
      {
        "id": "b21-3",
        "kind": "teoria",
        "topic": "Memoria RAM",
        "prompt": "¿Qué almacena la RAM mientras funciona el equipo?",
        "options": [
          "Datos e instrucciones de programas activos y del sistema.",
          "Solo datos permanentes que se conservan al apagar.",
          "Exclusivamente la configuración que mantiene la pila de la placa.",
          "Solo texturas y cuadros de una tarjeta gráfica dedicada."
        ],
        "correct": 0,
        "explanation": "La RAM es memoria de acceso aleatorio, volátil y de trabajo rápido para la CPU. En un módulo se observan chips, contactos y una muesca de orientación. Almacena temporalmente instrucciones y datos de programas activos y del sistema. Su capacidad, tasa, latencia, tipo y formato son características distintas. Al cortar la alimentación no conserva ese trabajo."
      },
      {
        "id": "b21-4",
        "kind": "teoria",
        "topic": "Almacenamiento",
        "prompt": "¿Qué comprobarías para usar un SSD PCIe 4.0 en un equipo PCIe 3.0?",
        "options": [
          "NVMe/PCIe, formato y llave, líneas disponibles y soporte de firmware.",
          "Solo que el SSD tenga más capacidad que el anterior.",
          "Que toda ranura M.2 sea necesariamente NVMe.",
          "Que el monitor tenga una salida HDMI."
        ],
        "correct": 0,
        "explanation": "Verificaría una ranura que realmente admita PCIe/NVMe, el formato y tamaño del SSD, su llave, las líneas disponibles y soporte del firmware, incluido el arranque si corresponde. Con compatibilidad entre generaciones, el enlace negociará como máximo PCIe 3.0. Que la unidad sea M.2 no basta si la ranura admite únicamente SATA."
      },
      {
        "id": "b21-5",
        "kind": "teoria",
        "topic": "Expansión y conectividad",
        "prompt": "¿Qué diferencia agregar una tarjeta PCIe de usar un adaptador USB?",
        "options": [
          "PCIe suele ser interno; USB externo; ambos requieren verificar soporte y límites concretos.",
          "USB siempre supera a PCIe en transferencia, sin importar versiones.",
          "Toda tarjeta PCIe funciona sin verificar fuente ni controladores.",
          "Cualquier adaptador USB ofrece las mismas funciones y rendimiento que su alternativa interna."
        ],
        "correct": 0,
        "explanation": "Una tarjeta PCIe se instala dentro del gabinete en una ranura compatible; puede disponer de mayor ancho de banda y recibir energía del slot o conectores adicionales. Un adaptador USB se conecta externamente y facilita traslado e instalación, pero depende de la versión USB, potencia disponible y controladores. El resultado se compara por función y modelos; PCIe no garantiza por sí solo más rendimiento en toda tarea."
      },
      {
        "id": "b21-6a",
        "kind": "practica",
        "topic": "Aplicación práctica",
        "prompt": "¿Qué conexiones revisarías en el A400 SATA del caso?",
        "options": [
          "Datos SATA y alimentación SATA con el equipo desconectado.",
          "HDMI y DisplayPort del monitor.",
          "DIMM y socket del procesador.",
          "Audio frontal y USB del teclado."
        ],
        "correct": 0,
        "explanation": "Revisaría la conexión SATA de datos a la placa y la conexión SATA de alimentación desde la fuente, o el conector combinado del equipo. Lo haría con el sistema apagado y desconectado, usando protección ESD. Comprobaría ajuste y daños; si hace falta, probaría cable/puerto conocidos como buenos sin alterar los datos."
      },
      {
        "id": "b21-6b",
        "kind": "practica",
        "topic": "Aplicación práctica",
        "prompt": "¿Qué información falta para evaluar la salud del SSD lento del caso?",
        "options": [
          "Un informe real de diagnóstico, errores y temperatura, además de pruebas de conexión.",
          "La velocidad anunciada, que por sí sola ya demuestra una falla física.",
          "Solo la cantidad de particiones, que determina directamente la salud de la memoria flash.",
          "Solo los TBW publicados como si fueran una medición de desgaste actual."
        ],
        "correct": 0,
        "explanation": "Usaría una herramienta compatible, por ejemplo smartctl o CrystalDiskInfo, para consultar temperatura, avisos de salud, errores y atributos disponibles. Errores de enlace pueden orientar a cable/puerto; temperatura alta, a ventilación; avisos y fallos internos, a la unidad. Un atributo aislado no confirma causa y debe leerse según el fabricante. La ficha no es un informe S.M.A.R.T.; ante errores de lectura, priorizaría respaldar."
      },
      {
        "id": "b21-6c",
        "kind": "practica",
        "topic": "Aplicación práctica",
        "prompt": "¿Qué diferencia limpiar polvo de formatear un SSD?",
        "options": [
          "Limpiar es mantenimiento físico; formatear cambia estructuras lógicas y no garantiza reparar hardware.",
          "Ambos son la misma tarea y siempre recuperan datos.",
          "Formatear retira el polvo de los conectores.",
          "Limpiar polvo restaura obligatoriamente celdas flash dañadas."
        ],
        "correct": 0,
        "explanation": "Con el equipo desconectado retiraría polvo exterior y del entorno con aire apropiado y limpieza suave, sin abrir la carcasa del SSD ni mojarlo. Limpiar polvo es mantenimiento físico; formatear modifica estructuras lógicas del sistema de archivos y puede comprometer datos. Ninguna de esas acciones garantiza reparar memoria flash o electrónica dañada. Después repetiría las comprobaciones y documentaría resultados."
      }
    ]
  },
  {
    "number": 22,
    "title": "Mantenimiento de una tarjeta gráfica",
    "contextHtml": "<h4>Tema Mantenimiento de una tarjeta gráfica</h4><div class=\"source-p\">Fotografía de MSI GeForce GT 1030 2G LP OC. Situación planteada: hay polvo en el disipador y el ventilador.</div><div class=\"source-p\"><figure><img src=\"irci-assets/image1.png\" alt=\"Fotografía del componente incluida en el documento de IRCI\" loading=\"lazy\"><figcaption>Imagen del documento original. La atribución figura en el texto del bloque.</figcaption></figure></div><div class=\"source-p\">Imagen de MSI GeForce GT 1030 2G LP OC. Fuente: MSI.</div>",
    "questions": [
      {
        "id": "b22-1",
        "kind": "teoria",
        "topic": "Arquitectura y CPU",
        "prompt": "¿Es mejor elegir CPU por más GHz o más núcleos?",
        "options": [
          "Depende de arquitectura, rendimiento por núcleo, paralelismo y tarea.",
          "Siempre gana la de más GHz, sin importar el modelo.",
          "Siempre gana la de más núcleos, aun si el programa no los aprovecha.",
          "La cantidad de conectores SATA decide por sí sola."
        ],
        "correct": 0,
        "explanation": "Depende de la tarea, arquitectura e IPC. Una aplicación con poco paralelismo puede beneficiarse de buen rendimiento por núcleo; renderizado o varias tareas pueden aprovechar más núcleos e hilos. Más GHz no asegura más trabajo entre arquitecturas diferentes y más núcleos no aceleran un programa que no los utiliza. Se comparan modelos y cargas equivalentes."
      },
      {
        "id": "b22-2",
        "kind": "teoria",
        "topic": "Placa madre y buses",
        "prompt": "¿Qué debe admitir el gabinete respecto de la placa madre?",
        "options": [
          "Factor de forma, dimensiones, fijaciones y espacio para conexiones y componentes.",
          "Únicamente el socket del procesador, sin importar dimensiones ni montaje.",
          "Solo la misma marca comercial de la placa.",
          "Solo que la fuente tenga suficiente potencia, aunque la placa no quepa."
        ],
        "correct": 0,
        "explanation": "El gabinete debe admitir el factor de forma y dimensiones de la placa, sus puntos de fijación, el panel de conectores y las ranuras de expansión. También se comprueban altura del disipador, largo/espesor de tarjetas, fuente y conectores frontales. Un gabinete puede admitir varios formatos; no se requiere que ambos lleven exactamente la misma etiqueta comercial."
      },
      {
        "id": "b22-3",
        "kind": "teoria",
        "topic": "Memoria RAM",
        "prompt": "¿Cómo puede afectar RAM insuficiente para la carga?",
        "options": [
          "Puede aumentar la paginación y ralentizar el equipo.",
          "Siempre aumenta la velocidad al usar menos chips.",
          "Impide que el SSD conserve datos al apagar.",
          "Cambia físicamente la CPU a otra generación."
        ],
        "correct": 0,
        "explanation": "Con poca RAM disponible para la carga, el sistema puede recurrir más a paginación en almacenamiento y volverse lento al cambiar de programas. También pueden aparecer cierres o errores por falta de memoria. Se comprueba uso real y reserva de hardware antes de ampliar; estos síntomas no demuestran que el módulo esté defectuoso."
      },
      {
        "id": "b22-4",
        "kind": "teoria",
        "topic": "Almacenamiento",
        "prompt": "¿Qué puede causar temperatura excesiva en un SSD?",
        "options": [
          "Protección térmica con menor rendimiento y posibles problemas de estabilidad/fiabilidad.",
          "Un aumento garantizado de su resistencia TBW.",
          "Una ampliación automática de su capacidad.",
          "Conversión del protocolo SATA en NVMe."
        ],
        "correct": 0,
        "explanation": "Una temperatura elevada puede provocar reducción de rendimiento por protección térmica y afectar estabilidad y fiabilidad, según modelo y condiciones. No demuestra por sí sola que los datos estén dañados. Se consulta la temperatura operativa del fabricante y la medición real; se revisan ventilación y disipación adecuadas. El intervalo de ficha no es una temperatura objetivo ni garantiza buena salud."
      },
      {
        "id": "b22-5",
        "kind": "teoria",
        "topic": "Expansión y conectividad",
        "prompt": "¿Qué función aporta una tarjeta de red?",
        "options": [
          "Conectividad Ethernet o Wi-Fi según el modelo.",
          "Aumentar la cantidad física de RAM disponible para todos los procesos.",
          "Gestionar exclusivamente los niveles RAID de los discos del equipo.",
          "Procesar audio analógico como función principal."
        ],
        "correct": 0,
        "explanation": "Tarjeta gráfica: añade o mejora procesamiento gráfico y salidas de video. Tarjeta de red: proporciona conectividad Ethernet o Wi-Fi. Tarjeta de sonido: agrega entradas/salidas y procesamiento de audio. También existen controladoras de almacenamiento y capturadoras. Se comprueban ranura, fuente, espacio y controladores para cada una."
      },
      {
        "id": "b22-6a",
        "kind": "practica",
        "topic": "Aplicación práctica",
        "prompt": "¿Qué función cumple el disipador de la gráfica mostrada?",
        "options": [
          "Transferir calor hacia sus aletas y al aire del entorno.",
          "Almacenar instrucciones para que la GPU siga funcionando sin energía.",
          "Transmitir la señal de video entre la tarjeta y el monitor.",
          "Aumentar la capacidad de VRAM en proporción a su tamaño."
        ],
        "correct": 0,
        "explanation": "El ventilador es el conjunto de aspas: mueve aire. El disipador es el bloque de aletas bajo él: recibe calor de la GPU y lo transfiere al aire. Los contactos dorados PCIe del borde conectan la tarjeta a la placa madre para comunicación y alimentación del slot. No son salidas para el monitor."
      },
      {
        "id": "b22-6b",
        "kind": "practica",
        "topic": "Aplicación práctica",
        "prompt": "¿Por qué se sujetan las aspas al limpiar con aire?",
        "options": [
          "Para evitar giro excesivo y posibles daños en los rodamientos.",
          "Para duplicar la velocidad del ventilador después.",
          "Para convertir la energía del aire en más VRAM.",
          "Para poder limpiarlo bajo agua con el equipo encendido."
        ],
        "correct": 0,
        "explanation": "Apagaría, desconectaría y aplicaría protección ESD; limpiaría polvo con aire para electrónica en ráfagas suaves y un cepillo antiestático apropiado, sin forzar piezas. Sujetaría las aspas para evitar giro excesivo, que puede dañar los rodamientos. No es necesario desmontar el disipador solo para quitar polvo accesible. Evitaría agua y soplar con la boca."
      },
      {
        "id": "b22-6c",
        "kind": "practica",
        "topic": "Aplicación práctica",
        "prompt": "¿Qué harías si persisten fallas de imagen o temperatura tras limpiar?",
        "options": [
          "Revisar conexiones, monitor/cable, controladores y pruebas con componentes compatibles.",
          "Añadir más pasta sin comprobar montaje ni estado de los ventiladores.",
          "Declarar la GPU dañada por el solo hecho de que persista el síntoma.",
          "Continuar la prueba de carga ignorando una temperatura anormal."
        ],
        "correct": 0,
        "explanation": "Comprobaría asentamiento en PCIe, fijación, cable de monitor, ventilador y cualquier alimentación requerida. Observaría imagen y temperaturas en uso controlado. Si persisten fallas, revisaría cable/monitor y controladores y, si es posible, probaría con hardware compatible conocido. No concluiría que limpiar o cambiar pasta resolverá cualquier falla; registraría síntomas y resultados antes de otra intervención."
      }
    ]
  }
];
