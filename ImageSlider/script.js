console.log('hello');

const imageContainer = document.getElementById('image-slider');
const nextBtn = document.getElementById('next-btn');
const prevBtn = document.getElementById('prev-btn');

const fetchImages = async () => {
  let imageURLs;
  if (localStorage.getItem('imageURLs')) {
    imageURLs = JSON.parse(localStorage.getItem('imageURLs'));
  } else {
    try {
      const response = await fetch('https://fakestoreapi.com/products');
      const data = await response.json();
      localStorage.setItem('imageURLs', JSON.stringify(data.slice(0, 5)));
      imageURLs = data.slice(0, 5);
    } catch (error) {
      console.log('Something went wrong', error);
      imageURLs = [];
    }
  }
  addImages(imageURLs);
};

const addImages = (imageURLs) => {
  imageContainer.innerHTML = '';
  if (!imageURLs.length) {
    return;
  }
  imageURLs.forEach((image) => {
    const img = document.createElement('img');
    img.src = image?.image;
    img.alt = 'image';
    imageContainer.appendChild(img);
  });
};

const showNext = () => {
  if (imageContainer.children.length) {
    imageContainer.append(imageContainer.querySelector('img:first-child'));
  }
};

const showPrev = () => {
  if (imageContainer.children.length) {
    imageContainer.prepend(imageContainer.querySelector('img:last-child'));
  }
};

nextBtn.addEventListener('click', showNext);
prevBtn.addEventListener('click', showPrev);

fetchImages();
