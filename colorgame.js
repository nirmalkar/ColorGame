var colors = generateRandomColors(6);
 
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
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
		changeColors(clickedColor);
	}
	else{
		this.style.background = "#232323";
		messageDisplay.textContent = "Try Again";
	}
	});
}
 function changeColors(color){
//loop through all squares
for( var i = 0; i < squares.length; i++){
//change color to answer color
squares[i].style.backgroundColor = color;
}	
}
function pickColor(){
var random = Math.floor(Math.random() * colors.length )
	return colors[random]; 
}

function generateRandomColors(num){
	//empty array
	var arr = [];
	//write the logic to choose random color

	//return the array
	return arr;
}