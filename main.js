$(document).ready(() => {
  $(".menu-icon").click(() => {
    $(".menu-items").slideToggle();
  });
  $(window).scroll(() => {
    var reveals = $(".reveal");

    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 10;

      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  });
  // Get the slide elements
  const slides = $(".slide");
  const slideCaptions = $(".slide-caption");
  const slideBtn = $(".slide-btn");
  const prevBtn = $(".fa-arrow-left");
  const nextBtn = $(".fa-arrow-right");

  let slideIndex = 0;

  // Function to show the current slide
  function showSlide() {
    slides.forEach((slide) => {
      slide.classList.remove("active");
      slide.classList.add("inactive");
    });
    slideCaptions.forEach((slideCaption) => {
      slideCaption.classList.remove("active");
      slideCaption.classList.add("inactive");
    });

    slides[slideIndex].classList.remove("inactive");
    slides[slideIndex].classList.add("active");
    slideCaptions[slideIndex].classList.remove("inactive");
    slideCaptions[slideIndex].classList.add("active");
  }

  // Function to go to the next slide
  function nextSlide() {
    slideIndex++;
    if (slideIndex >= slides.length) {
      slideIndex = 0;
    }
    showSlide();
  }

  // Function to go to the previous slide
  function prevSlide() {
    slideIndex--;
    if (slideIndex < 0) {
      slideIndex = slides.length - 1;
    }
    showSlide();
  }

  // Event listeners for the slide buttons
  slideBtn.addEventListener("click", (e) => {
    if (e.target === prevBtn) {
      prevSlide();
    } else if (e.target === nextBtn) {
      nextSlide();
    }
  });

  // Auto slide functionality
  setInterval(() => {
    nextSlide();
  }, 5000); // Change slide every 5 seconds
  // Change slide every 5 seconds
});
