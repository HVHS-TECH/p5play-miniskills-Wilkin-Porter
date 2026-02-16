/*******************************************************/
// P5.play: t22_keyboard
// Move sprite via keyboard
// Written by Wilkin Porter
/*******************************************************/
	
/*******************************************************/
// setup()
/*******************************************************/
function setup() {
	console.log("setup: ");
	cnv = new Canvas(windowWidth -4,  windowHeight -4);
	world.gravity.y = 9.807;
	sixsevenrect = new Sprite(6.7, 67, 67, 67);
	sixsevenrect.color = 'cyan';
	sixsevenrect.rotationSpeed = 2;
	sixsevenrect.vel.x = 2;
}
	
/*******************************************************/
// draw()
/*******************************************************/
function draw() {
	background('lightgrey'); 

	
}



/*******************************************************/
//  END OF APP
/*******************************************************/