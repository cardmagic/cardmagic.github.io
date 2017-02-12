
// add / remove current class
$(function(){
   $('ul li a').click(function(){
      $('ul li a').removeClass('current');
      $(this).addClass("current")
    });
});

// set page url active (current for pages)
// $(function() {
//   $('ul li a[href^="/' + location.pathname.split("/")[1] + '"]').addClass('current-pg');
// });

$(function(){
  $('a').each(function() {
    if ($(this).prop('href') == window.location.href) {
      $(this).addClass('current');
    }
  });
});
