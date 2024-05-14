document.addEventListener("DOMContentLoaded", function() {
  // Datos de productos agrupados por tipo
  const productosData = {
    accesorios: [
      { id: "accesorio1-img", price: 12000 },
      { id: "accesorio2-img", price: 12000 },
      { id: "accesorio3-img", price: 12000 },
      { id: "accesorio4-img", price: 12000 },
      { id: "accesorio5-img", price: 12000 }
    ],
    monitores: [
      { id: "monitor1-img", price: 12000 },
      { id: "monitor2-img", price: 12000 },
      { id: "monitor3-img", price: 12000 },
      { id: "monitor4-img", price: 12000 },
      { id: "monitor5-img", price: 12000 }
    ],
    notebooks: [
      { id: "notebook1-img", price: 12000 },
      { id: "notebook2-img", price: 12000 },
      { id: "notebook3-img", price: 12000 },
      { id: "notebook4-img", price: 12000 },
      { id: "notebook5-img", price: 12000 }
    ]
  };
  
  const productosContainer = document.querySelector(".productos-container");
  
  // Función para generar el HTML de los productos
  function renderProductos(tipo, productos) {
    const section = document.createElement("section");
    section.classList.add("producto");
    section.id = tipo;
  
    const titleProducto = document.createElement("div");
    titleProducto.classList.add("title-producto");
    const titleH2 = document.createElement("h2");
    titleH2.classList.add("title-producto-h2");
    titleH2.textContent = tipo.charAt(0).toUpperCase() + tipo.slice(1);
    const subtitleA = document.createElement("a");
    subtitleA.href = "#";
    const subtitleP = document.createElement("p");
    subtitleP.classList.add("subtitle-producto-p");
    subtitleP.textContent = "Ver más...";
    subtitleA.appendChild(subtitleP);
    titleProducto.appendChild(titleH2);
    titleProducto.appendChild(subtitleA);
    section.appendChild(titleProducto);
  
    const productosDescripcion = document.createElement("div");
    productosDescripcion.classList.add("productos-descripcion");
  
    productos.forEach((producto, _index) => {
      const cardProducto = document.createElement("div");
      cardProducto.classList.add("card-producto");
  
      const productoImg = document.createElement("div");
      productoImg.classList.add("producto-img");
      productoImg.id = producto.id;
      cardProducto.appendChild(productoImg);
  
      const productoPrecio = document.createElement("div");
      productoPrecio.classList.add("producto-precio");
      const precioH3 = document.createElement("h3");
      precioH3.textContent = `$ ${producto.price}`;
      const cuotasP = document.createElement("p");
      cuotasP.classList.add("p-productos-cuotas");
      cuotasP.textContent = "12x $ 1.000 sin interés";
      const envioGratisP = document.createElement("p");
      envioGratisP.classList.add("p-productos-envio-gratis");
      envioGratisP.textContent = "Envío gratis";
  
      productoPrecio.appendChild(precioH3);
      productoPrecio.appendChild(cuotasP);
      productoPrecio.appendChild(envioGratisP);
      cardProducto.appendChild(productoPrecio);
  
      productosDescripcion.appendChild(cardProducto);
    });
  
    section.appendChild(productosDescripcion);
    productosContainer.appendChild(section);
  }
  
  // Generar secciones de productos
  for (const tipo in productosData) {
    if (productosData.hasOwnProperty(tipo)) {
      renderProductos(tipo, productosData[tipo]);
    }
  }
});
  