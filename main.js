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
});
