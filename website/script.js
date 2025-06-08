const images = document.querySelectorAll('.gallery img');
const lightbox = document.createElement('div');

lightbox.id = 'lightbox';
lightbox.innerHTML = `
  <button class="close">&times;</button>
  <button class="prev">&#10094;</button>
  <img src="" alt="">
  <button class="next">&#10095;</button>
`;

document.body.appendChild(lightbox);

const lightboxImg = lightbox.querySelector('img');
let currentIndex = 0;

images.forEach((img, index) => {
  img.addEventListener('click', () => {
    currentIndex = index;
    showImage();
    lightbox.style.display = 'flex';
  });
});

lightbox.querySelector('.close').onclick = () => {
  lightbox.style.display = 'none';
};

lightbox.querySelector('.prev').onclick = () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  showImage();
};

lightbox.querySelector('.next').onclick = () => {
  currentIndex = (currentIndex + 1) % images.length;
  showImage();
};

document.addEventListener('keydown', (e) => {
  if (lightbox.style.display === 'flex') {
    if (e.key === 'ArrowLeft') lightbox.querySelector('.prev').click();
    if (e.key === 'ArrowRight') lightbox.querySelector('.next').click();
    if (e.key === 'Escape') lightbox.querySelector('.close').click();
  }
});

function showImage() {
  lightboxImg.src = images[currentIndex].src;
}
