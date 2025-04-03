const smallImages = document.querySelectorAll('.small-image');
const mainImage = document.getElementById('mainImage');

smallImages.forEach(image => {
  image.addEventListener('click', () => {
    mainImage.src = image.src;
  });
});
