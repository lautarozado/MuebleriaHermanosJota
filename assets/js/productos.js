

function ignorarVacios(obj) {
    for (let key in obj) {
    if (obj[key] === null) {
        delete obj[key];
    }
    return obj;
    }
}
const productos = [
    {   "id": 1,
        "nombre": "Aparador Uspallata",
        "precio": 12345,
        "descripcion": "Aparador de seis puertas fabricado en nogal sostenible con tiradores metálicos en acabado latón. Su silueta minimalista realza el veteado natural de la madera, creando una pieza que combina funcionalidad y elegancia atemporal para espacios contemporáneos.",
        "medidas": "180 × 45 × 75 cm",
        "materiales": "Nogal macizo FSC®, herrajes de latón",
        "acabado": "Aceite natural ecológico",
        "colchon": null,
        "apilables": null,
        "tapizado": null,
        "confort": null,
        "relleno": null,
        "rotacion": null,
        "regulacion": null,
        "garantia": null,
        "certificacion": null,
        "estructura": null,
        "capacidad": "6 compartimentos interiores",
        "modulares": null,
        "almacenamiento": null,
        "peso": "60 kg",
        "cargaMaxima": null,
        "extension": null,
        "caracteristicas": null,
        "sostenibilidad": null,
        "incluye": null,
        "cables": null,
        "imagen": "assets/img/Aparador Uspallata.png"
    },
    {   "id": 2,
        "nombre": "Biblioteca Recoleta",
        "precio": 12345,
        "descripcion": "Sistema modular de estantes abierto que combina estructura de acero Sage Green y repisas en roble claro. Perfecta para colecciones y objetos de diseño, su diseño versátil se adapta a cualquier espacio contemporáneo con elegancia funcional.",
        "medidas": "100 × 35 × 200 cm",
        "materiales": "Estructura de acero, estantes de roble",
        "acabado": "Laca mate ecológica",
        "colchon": null,
        "apilables": null,
        "tapizado": null,
        "confort": null,
        "relleno": null,
        "rotacion": null,
        "regulacion": null,
        "garantia": null,
        "certificacion": null,
        "estructura": null,
        "capacidad": "45 kg por estante",
        "modulares": "5 estantes ajustables",
        "almacenamiento": null,
        "peso": null,
        "cargaMaxima": null,
        "extension": null,
        "caracteristicas": null,
        "sostenibilidad": null,
        "incluye": null,
        "cables": null,
        "imagen": "assets/img/Biblioteca Recoleta.png"
    },
    {   "id": 3,
        "nombre": "Butaca Mendoza",
        "precio": 12345,
        "descripcion": "Butaca tapizada en bouclé Dusty Rose con base de madera de guatambú. El respaldo curvo abraza el cuerpo y ofrece máximo confort, mientras que su diseño orgánico aporta calidez y sofisticación a cualquier ambiente contemporáneo.",
        "medidas": "80 × 75 × 85 cm",
        "materiales": "Guatambú macizo, tela bouclé",
        "acabado": "Cera vegetal, tapizado premium",
        "colchon": null,
        "apilables": null,
        "tapizado": "Repelente al agua y manchas",
        "confort": "Espuma alta densidad",
        "relleno": null,
        "rotacion": null,
        "regulacion": null,
        "garantia": null,
        "certificacion": null,
        "estructura": null,
        "capacidad": null,
        "modulares": null,
        "almacenamiento": null,
        "peso": null,
        "cargaMaxima": null,
        "extension": null,
        "caracteristicas": null,
        "sostenibilidad": null,
        "incluye": null,
        "cables": null,
        "imagen": "assets/img/Butaca Mendoza.png"        
    },    
    {   "id": 4,
        "nombre": "Sillón Copacabana",
        "precio": 12345,
        "descripcion": "Sillón lounge en cuero cognac con base giratoria en acero Burnt Sienna. Inspirado en la estética brasilera moderna de los 60, combina comodidad excepcional con un diseño icónico que trasciende tendencias y épocas.",
        "medidas": "90 × 85 × 95 cm",
        "materiales": "Cuero curtido vegetal, acero pintado",
        "acabado": "Cuero anilina premium",
        "colchon": null,
        "apilables": null,
        "tapizado": null,
        "confort": null,
        "relleno": null,
        "rotacion": "360° silenciosa y suave",
        "regulacion": null,
        "garantia": "10 años en estructura",
        "certificacion": null,
        "estructura": null,
        "capacidad": null,
        "modulares": null,
        "almacenamiento": null,
        "peso": null,
        "cargaMaxima": null,
        "extension": null,
        "caracteristicas": null,
        "sostenibilidad": null,
        "incluye": null,
        "cables": null,
        "imagen": "assets/img/Sillón Copacabana.png"
    },
    {   "id": 5,
        "nombre": "Mesa de Centro Araucaria",
        "precio": 12345,
        "descripcion": "Mesa de centro con sobre circular de mármol Patagonia y base de tres patas en madera de nogal. Su diseño minimalista se convierte en el punto focal perfecto para cualquier sala de estar contemporánea, combinando la frialdad del mármol con la calidez de la madera.",
        "medidas": "90 × 90 × 45 cm",
        "materiales": "Sobre de mármol Patagonia, patas de nogal",
        "acabado": "Mármol pulido, aceite natural en madera",
        "colchon": null,
        "apilables": null,
        "tapizado": null,
        "confort": null,
        "relleno": null,
        "rotacion": null,
        "regulacion": null,
        "garantia": null,
        "certificacion": null,
        "estructura": null,
        "capacidad": null,
        "modulares": null,
        "almacenamiento": null,
        "peso": "42 kg",
        "cargaMaxima": "25 kg distribuidos",
        "extension": null,
        "caracteristicas": null,
        "sostenibilidad": null,
        "incluye": null,
        "cables": null,
        "imagen": "assets/img/Mesa de Centro Araucaria.png"
    },
    {   "id": 6,
        "nombre": "Mesa de Noche Aconcagua",
        "precio": 12345,
        "descripcion": "Mesa de noche con cajón oculto y repisa inferior en roble certificado FSC®. Su diseño limpio y funcional permite convivir con diferentes estilos de dormitorio, ofreciendo almacenamiento discreto y elegante para objetos personales.",
        "medidas": "45 × 35 × 60 cm",
        "materiales": "Roble macizo FSC®, herrajes soft-close",
        "acabado": "Barniz mate de poliuretano",
        "colchon": null,
        "apilables": null,
        "tapizado": null,
        "confort": null,
        "relleno": null,
        "rotacion": null,
        "regulacion": null,
        "garantia": null,
        "certificacion": null,
        "estructura": null,
        "capacidad": null,
        "modulares": null,
        "almacenamiento": "1 cajón + repisa inferior",
        "peso": null,
        "cargaMaxima": null,
        "extension": null,
        "caracteristicas": "Cajón con cierre suave",
        "sostenibilidad": null,
        "incluye": null,
        "cables": null,
        "imagen": "assets/img/Mesa de Noche Aconcagua.png"
    },
    {   "id": 7,
        "nombre": "Sofá Patagonia",
        "precio": 12345,
        "descripcion": "Sofá de tres cuerpos tapizado en lino Warm Alabaster con patas cónicas de madera. Los cojines combinan espuma de alta resiliencia con plumón reciclado, ofreciendo comodidad duradera y sostenible para el hogar moderno.",
        "medidas": "220 × 90 × 80 cm",
        "materiales": null,
        "acabado": null,
        "colchon": null,
        "apilables": null,
        "tapizado": "Lino 100% natural premium",
        "confort": null,
        "relleno": "Espuma HR + plumón reciclado",
        "rotacion": null,
        "regulacion": null,
        "garantia": null,
        "certificacion": null,
        "estructura": "Madera de eucalipto certificada FSC®",
        "capacidad": null,
        "modulares": null,
        "almacenamiento": null,
        "peso": null,
        "cargaMaxima": null,
        "extension": null,
        "caracteristicas": null,
        "sostenibilidad": "Materiales 100% reciclables",
        "incluye": null,
        "cables": null,
        "imagen": "assets/img/Sofá Patagonia.png"
    },
    {   "id": 8,
        "nombre": "Mesa Comedor Pampa",
        "precio": 12345,
        "descripcion": "Mesa extensible de roble macizo con tablero biselado y sistema de apertura suave. Su diseño robusto y elegante se adapta perfectamente a reuniones íntimas o grandes celebraciones familiares, extendiéndose de 6 a 10 comensales.",
        "medidas": "160-240 × 90 × 75 cm",
        "materiales": "Roble macizo FSC®, mecanismo alemán",
        "acabado": "Aceite-cera natural",
        "colchon": null,
        "apilables": null,
        "tapizado": null,
        "confort": null,
        "relleno": null,
        "rotacion": null,
        "regulacion": null,
        "garantia": null,
        "certificacion": null,
        "estructura": null,
        "capacidad": "6-10 comensales",
        "modulares": null,
        "almacenamiento": null,
        "peso": null,
        "cargaMaxima": null,
        "extension": "Sistema de mariposa central",
        "caracteristicas": null,
        "sostenibilidad": null,
        "incluye": null,
        "cables": null,
        "imagen": "assets/img/Mesa Comedor Pampa.png"
    },
    {   "id": 9,
        "nombre": "Sillas Córdoba",
        "precio": 12345,
        "descripcion": "Set de cuatro sillas apilables en contrachapado moldeado de nogal y estructura tubular pintada en Sage Green. Su diseño ergonómico y materiales de calidad garantizan comodidad y durabilidad en el uso diario, perfectas para comedores contemporáneos.",
        "medidas": "45 × 52 × 80 cm (cada una)",
        "materiales": "Contrachapado nogal, tubo de acero",
        "acabado": "Laca mate, pintura epoxi",
        "colchon": null,
        "apilables": "Hasta 6 sillas",
        "tapizado": null,
        "confort": null,
        "relleno": null,
        "rotacion": null,
        "regulacion": null,
        "garantia": null,
        "certificacion": null,
        "estructura": null,
        "capacidad": null,
        "modulares": null,
        "almacenamiento": null,
        "peso": null,
        "cargaMaxima": null,
        "extension": null,
        "caracteristicas": null,
        "sostenibilidad": null,
        "incluye": "Set de 4 sillas",
        "cables": null,
        "imagen": "assets/img/Sillas Córdoba.png"
    },
    {   "id": 10,
        "nombre": "Escritorio Costa",
        "precio": 12345,
        "descripcion": "Escritorio compacto con cajón organizado y tapa pasacables integrada en bambú laminado. Ideal para espacios de trabajo en casa, combina funcionalidad moderna con estética minimalista y sostenible, perfecto para el trabajo remoto.",
        "medidas": "120 × 60 × 75 cm",
        "materiales": "Bambú laminado, herrajes ocultos",
        "acabado": "Laca mate resistente",
        "colchon": null,
        "apilables": null,
        "tapizado": null,
        "confort": null,
        "relleno": null,
        "rotacion": null,
        "regulacion": null,
        "garantia": null,
        "certificacion": null,
        "estructura": null,
        "capacidad": null,
        "modulares": null,
        "almacenamiento": "1 cajón con organizador",
        "peso": null,
        "cargaMaxima": null,
        "extension": null,
        "caracteristicas": null,
        "sostenibilidad": null,
        "incluye": null,
        "cables": "Pasacables integrado",
        "imagen": "assets/img/Escritorio Costa.png"
    },
    {   "id": 11,
        "nombre": "Silla de Trabajo Belgrano",
        "precio": 12345,
        "descripcion": "Silla ergonómica regulable en altura con respaldo de malla transpirable y asiento tapizado en tejido reciclado. Diseñada para largas jornadas de trabajo con máximo confort y apoyo lumbar, ideal para oficinas en casa y espacios de coworking.",
        "medidas": "60 × 60 × 90-100 cm",
        "materiales": "Malla técnica, tejido reciclado",
        "acabado": "Base cromada, tapizado premium",
        "colchon": null,
        "apilables": null,
        "tapizado": null,
        "confort": null,
        "relleno": null,
        "rotacion": null,
        "regulacion": "Altura + inclinación respaldo",
        "garantia": null,
        "certificacion": "Ergonomía europea EN 1335",
        "estructura": null,
        "capacidad": null,
        "modulares": null,
        "almacenamiento": null,
        "peso": null,
        "cargaMaxima": null,
        "extension": null,
        "caracteristicas": null,
        "sostenibilidad": null,
        "incluye": null,
        "cables": null,
        "imagen": "assets/img/Silla de Trabajo Belgrano.png"
    },
    {   "id": 12,
        "nombre": "Cama Neuquén",
        "precio": 12345,
        "descripcion": "Cama plataforma con cabecero flotante tapizado en lino natural y estructura de madera maciza. Su diseño minimalista y sofisticado crea un ambiente de serenidad y elegancia, perfecto para dormitorios contemporáneos que buscan paz y simplicidad.",
        "medidas": "160 × 200 × 90 cm",
        "materiales": "Roble macizo FSC®, tapizado lino",
        "acabado": "Aceite natural, tapizado premium",
        "colchon": "Compatible con colchón 160×200",
        "apilables": null,
        "tapizado": null,
        "confort": null,
        "relleno": null,
        "rotacion": null,
        "regulacion": null,
        "garantia": null,
        "certificacion": null,
        "estructura": null,
        "capacidad": null,
        "modulares": null,
        "almacenamiento": null,
        "peso": null,
        "cargaMaxima": null,
        "extension": null,
        "caracteristicas": "Cabecero flotante acolchado",
        "sostenibilidad": null,
        "incluye": null,
        "cables": null,
        "imagen": "assets/img/logo.svg" // no hay foto de la cama, podríamos hacer una con IA?
    }
]





const obtenerProductos = () =>
  new Promise(res => setTimeout(() => res(window.productos || productos), 200));

document.addEventListener('DOMContentLoaded', () => {
  const lista = document.getElementById('lista-productos');
  if (!lista) return;

  const params = new URLSearchParams(window.location.search);
  const q = (params.get('q') || '').toLowerCase().trim();
  const qInput = document.getElementById('q');
  if (qInput) qInput.value = params.get('q') || '';

  const coincide = (p) => {
    const nombre = (p.nombre || '').toLowerCase();
    const desc   = (p.descripcion || '').toLowerCase();
    return !q || nombre.includes(q) || desc.includes(q);
  };

  const itemHTML = (p) => {
    const id = Number.isFinite(p.id) ? p.id : 0;
    return `
      <li class="producto-item">
        <img src="${p.imagen}" alt="${p.nombre}">
        <h3><a href="producto.html?id=${encodeURIComponent(id)}">${p.nombre}</a></h3>
        <p class="precio-producto"><strong>ARS</strong> $${p.precio}</p>
        ${p.descripcion ? `<p class="descripcion-producto">${p.descripcion}</p>` : ''}
        <button class="btn primary add-to-cart" type="button" data-id="${id}">
          Agregar al Carrito
        </button>
      </li>
    `;
  };

  obtenerProductos().then(items => {
    const visibles = items.filter(coincide);
    lista.innerHTML = visibles.map(itemHTML).join('');
  });
});


document.addEventListener('click', (ev) => {
  const btn = ev.target.closest('.add-to-cart');
  if (!btn) return;
  const id = Number(btn.dataset.id);
  if (!Number.isFinite(id)) return;

  if (window.addToCart) {
    window.addToCart(id, 1);                 
    alert('Producto agregado al carrito');
  } else {
    console.error('addToCart no está definido. ¿Incluiste assets/js/common.js antes?');
  }
});
