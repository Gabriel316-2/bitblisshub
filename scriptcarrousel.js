// Carrousel

// Array de productos (datos de las cards)
const productos = [
  { imgSrc: 'img/a02.png', alt: 'a02', price: '12.000' },
  { imgSrc: 'img/n02.png', alt: 'n02', price: '12.000' },
  { imgSrc: 'img/m01.png', alt: 'm01', price: '12.000' },
  { imgSrc: 'img/a01.png', alt: 'a01', price: '12.000' },
  { imgSrc: 'img/n01.png', alt: 'n01', price: '12.000' },
  { imgSrc: 'img/m05.png', alt: 'm05', price: '12.000' }
];

// Función para crear una card
function createCard(product) {
  const card = document.createElement('div');
  card.classList.add('carousel-item');

  const cardContent = `
    <div class="card">
      <img src="${product.imgSrc}" class="card-img-top card-destacado destacado-img" alt="${product.alt}">
      <div class="card-body">
        <h2 class="card-title">${product.price}</h2>
        <p class="card-text size-12">12x $ 1.000 sin interés.</p>
        <p class="card-text">Envío gratis.</p>
        <a href="storepage.html" class="btn btn-primary">Ver más...</a>
      </div>
    </div>
  `;

  card.innerHTML = cardContent;
  return card;
}

// Función para inicializar el carrusel
function initializeCarousel() {
  const carouselInner = document.getElementById('carouselItems');

// Crear las cards y agregarlas al carrusel
  productos.forEach((producto, index) => {
    const card = createCard(producto);
    if (index === 0) {
      card.classList.add('active'); // Marcar la primera card como activa
    }
    carouselInner.appendChild(card);
});

// Inicializar el carrusel con Bootstrap
  const carousel = new bootstrap.Carousel(document.querySelector('.carousel'), {
    interval: 3000, // Intervalo de cambio de slide en milisegundos
    wrap: true      // Volver al primer slide después del último
  });
}

// Llamar a la función para inicializar el carrusel cuando se cargue el DOM
document.addEventListener('DOMContentLoaded', initializeCarousel);

document.addEventListener('DOMContentLoaded', function() {
  var myCarousel = new bootstrap.Carousel(document.getElementById('myCarousel'), {
    interval: 3000,
    wrap: true
  });
});
