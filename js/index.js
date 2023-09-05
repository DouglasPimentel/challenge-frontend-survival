// mobile menu
function handleOpenMenuMobile() {
  document.getElementById("mobile-nav").classList.add("mobile-navigation--is-active");
}

function handleCloseMenuMobile() {
  document.getElementById("mobile-nav").classList.remove("mobile-navigation--is-active");
}

// carousel
let slideIndex = 1;

showCarousel(slideIndex);

function plusSlides(n) {
  showCarousel(slideIndex += n);
}

function currentSlide(n) {
  showCarousel(slideIndex = n);
}

function showCarousel(n) {
  let i;

  let slides = document.getElementsByClassName("carousel__image");
  let dots = document.getElementsByClassName("carousel__number");

  if (n > slides.length) {
    slideIndex = 1;
  }

  if (n < 1) {
    slideIndex = slides.length;
  }
  
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" carousel__number--is-active", "");
  }

  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " carousel__number--is-active";
}


// animations
const observer_1 = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('fade-in-left');
    }
  });
});

const observer_2 = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('fade-in-right');
    }
  });
});

const section_1 = document.querySelectorAll('.hero');
const section_2 = document.querySelectorAll('.card-skill');
const section_3 = document.querySelectorAll('.challenge__mission');
const section_4 = document.querySelectorAll('.results');

section_1.forEach(section => {
  observer_2.observe(section);
});

section_2.forEach(section => {
  observer_2.observe(section);
});

section_3.forEach(section => {
  observer_1.observe(section);
});

section_4.forEach(section => {
  observer_1.observe(section);
});