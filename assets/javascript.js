// $(document).ready(function() {
//     $('nav a').click(function() {
//       $('nav a').removeClass('active');
//       $(this).addClass('active');
//       $('html, body').animate({
//         scrollTop: $($(this).attr('href')).offset().top
//       }, 500);
//       return false;
//     });
//   });

  $(document).ready(function() {
    $('.navbar-collapse').on('shown.bs.collapse', function() {
        $('.navbar-toggler-icon').removeClass('navbar-toggler-icon').addClass('navbar-close-icon');
    });
    $('.navbar-collapse').on('hidden.bs.collapse', function() {
        $('.navbar-close-icon').removeClass('navbar-close-icon').addClass('navbar-toggler-icon');
    });
});
  