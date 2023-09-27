$(document).ready(() => {
  $(".menu-icon").click(() => {
    $(".menu-items").slideToggle();
  });
  var lastScrollTop = 0;
  $(window).scroll((e) => {
    var newScroll = $(this).scrollTop();
    if (newScroll > lastScrollTop) {
      $(".header").css("display", "none");
    } else {
      $(".header").css("display", "block");
    }
    lastScrollTop = newScroll;
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
