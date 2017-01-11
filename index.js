//--------------------- CREATE ANIMATION ---------------------//

var sprite = document.getElementById('sprite');
var spriteStepWidth = 92;
var spriteSteps = 2;
var step = 0;

//step = 2
function initSprite () {
  //'-' + (2 * 92) + 'px' -> -184px
  sprite.style.left= '-' + step * spriteStepWidth + 'px';
  // if ( 2 == 2 )
  if (step == spriteSteps) {
    step = 0;
  }
  else {
    // step = 2;
    step++;
  }
}


  
//-----------------------------------------------------------
// WITHOUT BUTTONS
//-----------------------------------------------------------

var spriteAnimation = window.setInterval(initSprite, 80);

//-----------------------------------------------------------
// WITH BUTTONS
//-----------------------------------------------------------

//--------------------- START ANIMATION ---------------------//

// var startAnimation = document.getElementById('start');
// var spriteAnimation;

// startAnimation.onclick = function () {
//   window.clearInterval(spriteAnimation);
//   spriteAnimation = window.setInterval(initSprite, 80);
// }



//--------------------- STOP ANIMATION ---------------------//

// var stopAnimation = document.getElementById('stop');

// stopAnimation.onclick = function () {
//   window.clearInterval(spriteAnimation);
// }