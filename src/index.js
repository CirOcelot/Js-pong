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
	if(ballX < 0) {
		ballSpeedX = -ballSpeedX;
	}
	if(ballX > canvas.width) {
		ballSpeedX = -ballSpeedX;
	}
}

function drawEverything() {
	colorRect(0, 0, canvas.width, canvas.height, 'black');
	colorRect(2, 210, 10, 100, 'white');
	colorRect(ballX, 200, 10, 10, 'red');
}

function colorRect(leftX, topY, width, height, drawColor) {
	canvasContext.fillStyle = drawColor;
	canvasContext.fillRect(leftX, topY, width, height);
}