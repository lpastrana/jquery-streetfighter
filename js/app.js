$(document).ready(function(){
  $('.ryu').mouseenter(function(){
  	$('.ryu-still').hide();
  	$('.ryu-ready').show();
    $('.ryu-cool').hide();
    $('.ryu-throwing').hide();
   })
  .mouseleave(function(){
  	$('.ryu-ready').hide();
  	$('.ryu-still').show();
    $('.ryu-cool').hide();
    $('.ryu-throwing').hide()
  })
  .mousedown(function(){
  	playHadouken();
    $('.ryu-still').hide();
    $('.ryu-ready').hide();
    $('.ryu-cool').hide();
    $('.ryu-throwing').show();
    $('.hadouken').finish().show().animate(
      {'left': '1020px'},
      500,
      function() {
        $(this).hide();
        $(this).css('left', '520px');
      }
    );
  })
  .mouseup(function(){
    $('ryu-still').hide();
    $('.ryu-throwing').hide();    
    $('.ryu-ready').show();
    $('.ryu-cool').hide();
  });
  $(window).keydown(function(e) {
    if (e.keyCode === 88) {
    $('.ryu-cool').show();
    $('.ryu-ready').hide();
    $('.ryu-still').hide();
    $('.ryu-throwing').hide();
      } 
  });
  $(window).keyup(function(e) {
    if (e.keyCode === 88) {
    $('.ryu-cool').hide();
    $('.ryu-ready').hide();
    $('.ryu-throwing').hide();
    $('.ryu-still').show();
      } 
  });
    $('p').hide();
    $('.logo').delay(1600).fadeOut('slow');
    $('p').delay(2200).fadeIn('slow');
});
function playHadouken () {
  $('#hadouken-sound')[0].volume = 0.5;
  $('#hadouken-sound')[0].load();
  $('#hadouken-sound')[0].play();
}