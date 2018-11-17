let timer = 60;
let points = 0;
//Setting variables of red, green, and blue
var r, g, b;
var pickedColor;
var colorText;
//Setting varible of the user input
var input;
var on = false;


function setup() {
	createCanvas(800, 800);
	//Creating an input field for the numbers
	input = createInput();
	input.position(915,650);
	//button to change colors for testing sake
	var button = createButton("Start");

	button.mousePressed(colorchange);
	input.changed(validateColor);


}


function draw() {
	background(230);
	textSize(32);
	fill(51);
	fill(r,g,b);
	rect(400, 400, 150, 150);
	baseUI();
}


function colorchange(){
	on = true;
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

}


function validateColor() {
	if (Math.floor(pickedColor) - 5 < input.value() && input.value() < Math.floor(pickedColor) + 5) {
			console.log("winner")
			colorchange();
			points = points + 1;
	} else if (on == true) {
		colorchange();
		console.log("loser")
	}
}


//Base UI contains the clock, points and other things that will be shown to the user
function baseUI(){
	text("What is the " + colorText + " value of this color?",150,300);
	text("Timer: " + timer, 550, 350);
	text("Points: " + points, 200, 350);
	if (frameCount % 60 == 0 && timer > 0 && on) {
    timer --;
  }
  if (timer == 0) {
    text("GAME OVER", 550,800);
		on = false;
		input.disabled();
  }
}
