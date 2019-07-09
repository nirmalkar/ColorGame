var colors = [
	"rgb(255, 0, 0)",
	"rgb(255, 255, 0)",
	"rgb(0, 255, 100)",
	"rgb(0, 255, 255)",
	"rgb(0, 0, 255)",
	"rgb(255, 0, 255)"
];
 
var squares = document.querySelectorAll(".square");
var pickedColor = colors[2];
var colorDisplay = document.getElementById("display");
var messageDisplay = document.querySelector("#message");
display.textContent = pickedColor; 
for(var i = 0; i < squares.length; i++){
	squares[i].style.backgroundColor = colors[i];

	//add clickListeners to the squares.
	squares[i].addEventListener("click", function(){
	var clickedColor = this.style.backgroundColor;
	if(clickedColor === pickedColor){
		messageDisplay.textContent= "Correct";
	}
	else{
		this.style.background = "#232323";
		messageDisplay.textContent = "Try Again";
	}
	});
}

