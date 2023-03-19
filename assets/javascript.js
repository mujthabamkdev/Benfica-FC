$(document).ready(function() {
    $('nav a').click(function() {
      $('nav a').removeClass('active');
      $(this).addClass('active');
      $('html, body').animate({
        scrollTop: $($(this).attr('href')).offset().top
      }, 500);
      return false;
    });
  });
  