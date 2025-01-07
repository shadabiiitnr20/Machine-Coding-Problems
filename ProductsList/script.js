console.log('Hello');

let products = [];
let images = [];
const productsContainer = document.querySelector('.product-list');
const inputBox = document.querySelector('.input-search');
const imageBox = document.querySelector('.image-box');
const nextBtn = document.querySelector('.next-btn');
const prevBtn = document.querySelector('.prev-btn');

const renderProducts = (products) => {
  if (!products.length) {
    return;
  }
  productsContainer.innerHTML = products
    .map((product) => {
      return `
      <div class='product-box' onClick='showDetails(${product.id})'>
        <img src='${product?.image}' alt='image' class='product-image'/>
        <br/>
        <h3>${product.title}</h3>
        <p>Price: ${product.price}</p>
        <p>Rating: ${product.rating.rate}</p>
      </div>`;
    })
    .join('');
};

const renderImages = (images) => {
  inputBox.innerHTML = '';
  if (!images.length) {
    return;
  }
  images.forEach((image) => {
    const img = document.createElement('img');
    img.src = image;
    img.alt = 'photo';
    imageBox.appendChild(img);
  });
};

nextBtn.addEventListener('click', () => {
  if (imageBox.children.length) {
    imageBox.append(imageBox.querySelector('img:first-child'));
  }
});

prevBtn.addEventListener('click', () => {
  if (imageBox.children.length) {
    imageBox.prepend(imageBox.querySelector('img:last-child'));
  }
});

const showDetails = (id) => {
  const clickedProduct = products.filter((product) => product?.id === id);
  localStorage.setItem('clicked-product', JSON.stringify(clickedProduct));
  window.location.href = 'product-detail.html';
};

const fetchProducts = async () => {
  if (localStorage.getItem('products')) {
    products = JSON.parse(localStorage.getItem('products'));
    images = JSON.parse(localStorage.getItem('images'));
  } else {
    try {
      const response = await fetch('https://fakestoreapi.com/products');
      const data = await response.json();
      images = data.map((product) => product.image).slice(0, 5);
      products = data;
      localStorage.setItem('products', JSON.stringify(data));
      localStorage.setItem('images', JSON.stringify(images));
    } catch (error) {
      console.log('Something went wrong', error);
      products = [];
    }
  }
  renderProducts(products);
  renderImages(images);
};

const applyRating = (rating) => {
  const filterProducts = products.filter(
    (product) => product.rating.rate >= rating
  );
  renderProducts(filterProducts);
};

function debounce(func, delay) {
  let timeout;
  return function (...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), delay);
  };
}

const handleSearch = (e) => {
  const name = e.target.value.trim();
  const filterProducts = products.filter((product) =>
    product.title.toLowerCase().includes(name.toLowerCase())
  );
  renderProducts(filterProducts);
};

inputBox.addEventListener('input', debounce(handleSearch, 250));

fetchProducts();
