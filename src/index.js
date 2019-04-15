var canvas;
var canvasContext;
var ballX = 50;
var ballSpeedX = 10;

window.onload = function(){

	canvas = document.getElementById("gameScreen");
	canvasContext = canvas.getContext("2d");

	var framesPerSecond = 30;
	setInterval(function() {
		moveEverything();
		drawEverything();
	}, 1000/framesPerSecond);
};

function moveEverything() {
	ballX = ballX + ballSpeedX;
	if(ballX > 790){
		ballSpeedX = -ballSpeedX;
	}
}

function drawEverything() {
	
	
	canvasContext.fillStyle = "black";
	canvasContext.fillRect(0,0,canvas.width,canvas.height);
	canvasContext.fillStyle = "white";
	canvasContext.fillRect(2,210,10,100);
	canvasContext.fillStyle = "red";
	canvasContext.fillRect(ballX, 200, 10, 10);
}