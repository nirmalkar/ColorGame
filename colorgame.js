var colors = generateRandomColors(6);
 
var squares = document.querySelectorAll(".square");

//picking color
var pickedColor = pickColor();
var upadateHeading = document.querySelector("#updateHeading")
var displayMessage = document.querySelector("#message");
    upadateHeading.textContent = pickedColor;
var h1 = document.querySelector("h1");    
for (var i = 0; i < squares.length; i++){
    // add colors to the squares
    squares[i].style.backgroundColor = colors[i];

    // //adding click events to the squares
    squares[i].addEventListener("click", function(){
    // grab color of clicked square 
	   var clickedColor = this.style.backgroundColor;
	   
	//compare color of clicked square with picked color
    if (clickedColor === pickedColor){
		displayMessage.textContent = " Correct";
		changeColors(clickedColor);
		h1.style.backgroundColor = clickedColor;
		} else{
			this.style.backgroundColor = "#232323";
			displayMessage.textContent = "Try Again";
		}
		});
}

function changeColors(color){

	//loop through all the squares
	for(var i = 0; i < squares.length; i++){
		//change the color of squares to the same color as the picked color
		squares[i].style.backgroundColor = color;


	}
}

function pickColor(){
 var random = Math.floor(Math.random() * colors.length);
 return colors[random];  
}


function generateRandomColors(num){
//make an empty array
var arr = [];

//repeat num times
 for(var i = 0; i < num; i++){
	 arr.push(randomColor())
// get random colors and push into arr

 }

// return the array
return arr;

}

function randomColor(){
 //pick red from 0 - 255
var r = Math.floor(Math.random() * 256);

 //pick green from 0 - 255
var g = Math.floor(Math.random() * 256);
 
 //pick blue from 0 - 255
 var b = Math.floor(Math.random() * 256);
return "rgb(" + r + ", " + g + ", " + b + ")";
}