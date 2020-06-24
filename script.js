$(function() {
  $('.signin-btn').click(function() {
    $('.signin-box').slideDown();
  });
  $('.back').click(function() {
    $('.signin-box').slideUp();
  });

  $('.menu').hover(
    function() {
      $(this).find('.dis').addClass('active');
    },
    function() {
      $(this).find('.dis').removeClass('active');
    }
  );
});