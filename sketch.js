let timer = 60;
let points = 0;
//Setting variables of red, green, and blue
var r, g, b;
var pickedColor;
var colorText;
//Setting varible of the user input
var input;


function setup() {
	createCanvas(700, 700);
	//Creating an input field for the numbers
	input = createInput();
	input.position(335,600);
	//button to change colors for testing sake
	var button = createButton("Change");

	button.mousePressed(colorchange);
	input.changed(validateColor);
	r = random(255),
	g = random(255),
	b = random(255)
}


function draw() {
	background(255,255,255);
	textSize(32);
	text('' + Math.floor(r), 50, 50);
	fill(255, 255, 255);
	fill(r, g, b);
	rect(height/2, width/2, 150, 150);
	baseUI();
}


function colorchange(){
	r = random(255);
  g = random(255);
  b = random(255);


	var randomValue = Math.floor(random(1,4));
		if(randomValue	== 1){
		colorText = "Red"
	}
	if (randomValue == 2){
	 pickedColor = g;
	 colorText = "Green"
	}
	if (randomValue == 3){
	 pickedColor = b;
	 colorText = "Blue";
	}
	console.log(Math.floor(pickedColor));
}


function validateColor() {

	if (input.value() == Math.floor(pickedColor) || input.value() <= Math.floor(pickedColor)+20 || input.value() <= Math.floor(pickedColor)-20){
			console.log("winner")
			colorchange();
			points = points + 1;
	} else {
		colorchange();
		console.log("loser")
	}
}


//Base UI contains the clock, points and other things that will be shown to the user
function baseUI(){
	text("What is the " + colorText + " value of this color?",100,300)
	text("R: " + Math.floor(r), 400, 400);
	text("G: " + Math.floor(g), 400, 440);
	text("B: " + Math.floor(b), 400, 480);
	text("Timer: " + timer, 550, 350);
	text("Points: " + points, 200, 350);
	if (frameCount % 60 == 0 && timer > 0) {
    timer --;
  }
  if (timer == 0) {
    text("GAME OVER", width/2, height*0.7);
  }
}
