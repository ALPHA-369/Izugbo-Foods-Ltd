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
      $(".header").css("background-color", "#fff");
      $(".header").css("display", "block");
    }
    lastScrollTop = newScroll;
  });
});
