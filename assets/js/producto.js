// Agarramos el parámetro de la URL
const params = new URLSearchParams(window.location.search);
const id = params.get("id");


const detalle = document.querySelector("#detalle-producto");


if (id === null || !productos[id]) {
  detalle.innerHTML = "<p>Lo sentimos, producto no encontrado</p>";
} else {
  const producto = productos[id];

  detalle.innerHTML = `
    <h1>${producto.nombre}</h1>
    <img src="${producto.imagen}" alt="${producto.nombre}" width="300">
    <p>${producto.descripcion}</p>
    <p><strong>Precio:</strong> $${producto.precio}</p>
    <p><strong>Medidas:</strong> ${producto.medidas}</p>
  `;
}