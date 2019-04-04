//Executes when page loads and it's ready to view

//Global variables
var step = 0;

//Array of titles
var titles = [
  'Buy a blender', //this is 0 [0], does not correspond to slide #s
  'Add milk of choice', //this is 1 [1]
  'Add bananas', //this is 2 [2]
  'Add frozen berries of choice', //this is 3
  'Add protein powder' //this is 4
 ];

$(function(){
  $('#stepinfo, section, footer, .prev').hide();
});

$('.start').on('click',function(){
  //do stuff when button is clicked
  $('.intro, .start, #berrypic, .title').hide();
  $('footer, #stepinfo').show();
  $('h1').css('text-align','left',);
  $('h1').css('text-transform','none');

  step = 1;
  $('#step'+step).show();
  //f(x) = x + 2
  //Set the title for current step
  $('#stepinfo').text('Step '+step+': '+titles[step-1]);


});

//next to advance each slide
$('.next').on('click',function(){
  $('#step'+step).hide();
  step++;
  //show previous button on step 2
  if(step == 2){
    $('.prev').show();
  }
  //hide next button on step 5
  if(step == 5) {
    $('.next').hide();
    $('#final').html('<em>Blend & Enjoy!</em');
    $('#final').css('font-size','25px')
    $('#final').css('margin','0px')
  }
  //make the change only if under number of steps; solves undefined problem
  if(step <= 5){
    $('#step'+step).show();
    $('#stepinfo').text('Step '+step+': '+titles[step-1]);
  } else {
    step--;
    $('#step'+step).show();
  }
});

//previous
$('.prev').on('click',function(){
  $('#step'+step).hide();
  step--;
  //hide previous button on step 1
  if(step == 1){
    $('.prev').hide();
  } else {
    $('.next').show();
  }

  if(step >= 1){
    $('#step'+step).show();
    $('#stepinfo').text('Step '+step+': '+titles[step-1]);
  } else {
    step--;
    $('#step'+step).show();
  }
});
