/*******************************************************/
// P5.play: t05_createWalls
// Create walls around the canvas
// Written by ???
/*******************************************************/
	
/*******************************************************/
// setup()
/*******************************************************/
function setup() {
	console.log("setup: ");
	cnv = new Canvas(1916, 953);
	world.gravity.y = 9.807/4;
	wallLH  = new Sprite(4, height/2, 8, height, 'k');
	wallLH.color = 'black';
	wallRH  = new Sprite(width, height/2, 8, height, 'k');
	wallRH.color = 'black';
	wallTop = new Sprite(1916/2, 4, 1916, 8, 'k');
	wallTop.color = 'black';
	wallBot = new Sprite(0, height/2, 8, height, 'k');
	wallBot.color = 'black';

}
	
/*******************************************************/
// draw()
/*******************************************************/
function draw() {
	
}

/*******************************************************/
//  END OF APP
/*******************************************************/