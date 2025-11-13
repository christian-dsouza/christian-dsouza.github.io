/* ---------------- NAVBAR HAMBURGER ---------------- */
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

if (hamburger && navLinks) {
  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });
}

/* ---------------- AGE CALCULATION (Home page only) ---------------- */
const birthDate = new Date('2002-06-10');
const today = new Date();
let age = today.getFullYear() - birthDate.getFullYear();
const hasHadBirthday =
  today.getMonth() > birthDate.getMonth() ||
  (today.getMonth() === birthDate.getMonth() && today.getDate() >= birthDate.getDate());
if (!hasHadBirthday) age--;

const ageElement = document.getElementById('age');
if (ageElement) {
  ageElement.textContent = age;
}

/* ---------------- PROJECT SLIDER (Projects page only) ---------------- */
const slider = document.querySelector('.projects-slider');
const next = document.querySelector('.next');
const prev = document.querySelector('.prev');

if (slider && next && prev) {
  const slides = document.querySelectorAll('.project-card');
  let currentSlide = 0;
  const totalSlides = slides.length;

  function updateSlider() {
    slider.style.transform = `translateX(-${currentSlide * 100}%)`;
  }

  next.addEventListener('click', () => {
    currentSlide = (currentSlide + 1) % totalSlides;
    updateSlider();
  });

  prev.addEventListener('click', () => {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    updateSlider();
  });
}
