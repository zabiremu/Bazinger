$(function () {
  $(window).on("scroll", function () {
    var scrollPosition = $(window).scrollTop();
    if (scrollPosition > 0) {
      $("#header_section").addClass("stickyNav");
    } else {
      $("#header_section").removeClass("stickyNav");
    }
    if (scrollPosition > 600) {
      $("#Back-to-top").fadeIn();
    } else {
      $("#Back-to-top").fadeOut();
    }
  });

  $("#Back-to-top").on("click", function () {
    $("html,body").animate(
      {
        scrollTop: 0,
      },
      1000
    );
  });

  $(window).on("load", function () {
    $("#preloader").fadeOut(2000);
  });
});
