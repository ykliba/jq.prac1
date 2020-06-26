$(function() {
  $('.signin-btn').click(function() {
    $('.signin-box').fadeIn();
  });
  $('.back').click(function() {
    $('.signin-box').fadeOut();
  });

  $('.food').hover(
    function() {
      $(this).find('.text').addClass('text-active');
    },
    function() {
      $(this).find('.text').removeClass('text-active');
    }
  );

  $('.q').click(function() {
    var $answer = $(this).find('.answer');

    if($answer.hasClass('open')) {
      $answer.removeClass('open');
      $answer.slideUp();
      $(this).find('span').text('+');
    } else {
      $answer.addClass('open');
      $answer.slideDown();
      $(this).find('span').text('-');
    };
  });
});