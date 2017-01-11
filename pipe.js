var column1 = document.getElementById('first-container');
var column2 = document.getElementById('second-container');
var column3 = document.getElementById('third-container');
var column4 = document.getElementById('fourth-container');

var pipes = [column1, column2, column3, column4];

function movepipe(){
	pipes.forEach(function(pipe){
		var left = pipe.offsetLeft;
		pipe.style.left = left - 10 + "px";
	});
}

function animatePipes(){
	
}
/*function retourner(){
	pipes.forEach(function(tuyaux){
		var left = tuyaux.offsetLeft;

		for (var i = pipes.length - 1; i >= 0; i--) {
		if(i >=0){
			pipes = left + 1000 + 'px;'
		}*/
	
	/*console.log(pipes.left + 1 + "px");*/

	
	/*var taille = -70 + "px";
	if(left > taille){
			return pipe.style.left = left + 100 + "%";
		}*/

window.setInterval(movepipe, 100);
/*window.setInterval(retourner, 80);*/
window.setInterval(animatePipes, 100);

