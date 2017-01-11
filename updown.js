var bird = document.getElementById('bird');
var espace=false;

document.onkeydown=function(e){
  if(e.keyCode==32) {
    espace=true;
  }
}

document.onkeyup=function(e){
    if(e.keyCode == 32){
      espace = false;
    }
}

var animate = function (){
  var top=bird.offsetTop;
  if(espace == true){
    bird.style.top = top - 10 + "px";
  }
  else{
    bird.style.top = top + 10 + "px";
  }
}


//window.setInterval(animate, 80);


var startAnimation = document.getElementById('start');
var onKeyAnimation;

   startAnimation.onclick = function () {
   window.clearInterval(onKeyAnimation);
   onKeyAnimation = window.setInterval(animate, 80);
 }


 var stopAnimation = document.getElementById('stop');

 stopAnimation.onclick = function () {
   window.clearInterval(onKeyAnimation);
 }

 