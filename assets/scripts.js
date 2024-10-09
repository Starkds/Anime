document.getElementById('menu-toggle').addEventListener('click', function() {
  document.querySelector('.nav-links').classList.toggle('active');
});

let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-slide');
const totalSlides = slides.length;

function showSlide(index) {
  slides.forEach((slide, i) => {
      slide.classList.toggle('active', i === index);
  });
}

document.getElementById('next').addEventListener('click', function() {
  currentSlide = (currentSlide + 1) % totalSlides;
  showSlide(currentSlide);
});

document.getElementById('prev').addEventListener('click', function() {
  currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
  showSlide(currentSlide);
});


