var numSquares = 6;
var colors = generateRandomColors(numSquares);
 
var squares = document.querySelectorAll(".square");

//picking color
var pickedColor = pickColor();
var upadateHeading = document.querySelector("#updateHeading")
var displayMessage = document.querySelector("#message");
    upadateHeading.textContent = pickedColor;
var h1 = document.querySelector("h1");    
var resetButton =document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");


//eventListener for easy and hardBtn

//easy
easyBtn.addEventListener("click",function(){
	displayMessage.textContent = " ";
	hardBtn.classList.remove("selected");
	easyBtn.classList.add("selected");
	numSquares = 3;
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	upadateHeading.textContent = pickedColor;
	for(var i=0; i<squares.length; i++){
		if(colors[i]){
			squares[i].style.backgroundColor = colors[i];
		} else{
			squares[i].style.display = "none";
		}
		
		}
});
hardBtn.addEventListener("click",function(){
	displayMessage.textContent = " ";
easyBtn.classList.remove("selected");
hardBtn.classList.add("selected");
numSquares = 6;
colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	upadateHeading.textContent = pickedColor;
	for(var i=0; i<squares.length; i++){
		squares[i].style.backgroundColor = colors[i];
		squares[i].style.display = "block";
		}
		
		
		
});


//reset button
resetButton.addEventListener("click",function(){
	//making text content blank
	displayMessage.textContent = " ";
	//changing Try Again text to New Color
	this.textContent = "New Color"

//generate all new colors
numSquares = 6;
colors = generateRandomColors(numSquares);
//pick a new random color from array
pickedColor = pickColor();
// change 
upadateHeading.textContent = pickedColor;

//change colors of squares
for(var i=0; i<squares.length; i++){
squares[i].style.backgroundColor = colors[i];
squares[i].style.display = "block"
}
h1.style.backgroundColor = "purple"
}); 
for (var i = 0; i < squares.length; i++){
    // add colors to the squares
    squares[i].style.backgroundColor = colors[i];

    // //adding click events to the squares
    squares[i].addEventListener("click", function(){
    // grab color of clicked square 
	   var clickedColor = this.style.backgroundColor;
	   

	//where USER wins the game!!  
	//compare color of clicked square with picked color
    if (clickedColor === pickedColor){
		displayMessage.textContent = " Correct!!";
		resetButton.textContent = "Play Again"
		changeColors(clickedColor);
		h1.style.backgroundColor = clickedColor;
		} else{
			this.style.backgroundColor = "#232323";
			displayMessage.textContent = "Try Again!!";
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