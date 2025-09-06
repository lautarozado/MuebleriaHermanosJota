// Agarramos el parámetro de la URL
const params = new URLSearchParams(window.location.search);
const id = params.get("id");


const detalle = document.querySelector("#producto-detalle");
const caracteristicas = document.querySelector("#producto-caracteristicas");


if (id === null || !productos[id]) {
    detalle.innerHTML = "<p>Lo sentimos, producto no encontrado</p>";
} else {
    const producto = productos[id];

    detalle.innerHTML = `
        <h1>${producto.nombre}</h1>
        <img src="${producto.imagen}" alt="${producto.nombre}" width="300">
        <p class="descripcion-producto-ind">${producto.descripcion}</p>
        <p class="precio-ind"><strong>Precio (ARS):</strong> $${producto.precio}</p>
    `;

    caracteristicas.innerHTML = "";

    Object.entries(producto).forEach(([key, value]) => {
        // sacamos los campos que ya mostramos y los que son null
        if (key !== "nombre" && key !== "imagen" && key !== "descripcion" && key !== "precio" && value !== null) {
            const li = document.createElement('li');
            li.innerHTML = `<strong>${key}:</strong> ${value}`;
            caracteristicas.appendChild(li); 
        }});
}

