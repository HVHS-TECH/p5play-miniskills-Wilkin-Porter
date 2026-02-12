/*******************************************************/
// P5.play: t20_load_images
// load & display images
// Written by ???
/*******************************************************/
	
/*******************************************************/
// setup()
/*******************************************************/
function setup() {
	console.log("setup: ");
	cnv = new Canvas(windowWidth -4,  windowHeight -4);
	frameRate(60)
	world.gravity.y = 9.807;
	wallLH  = new Sprite(4, height/2, 8, height, 'k');
	wallLH.color = 'black';
	wallRH  = new Sprite(width-4, height/2, 8, height, 'k');
	wallRH.color = 'black';
	wallTop = new Sprite(width/2, 4, width, 8, 'k');
	wallTop.color = 'black';
	wallBot = new Sprite(width/2, height-4, width, 8, 'k');
	wallBot.color = 'black';
	//wallMid = new Sprite(width/2, height/2, 8, height/2, 'k');
	//wallMid.color = 'black';

	iceBall = new Sprite(width/2, height/2+100, 50, 'd');
	iceBall.color = 'black';
	iceBall.vel.x = (randomInclNegative()*40);
	iceBall.vel.y = (randomInclNegative()*40);
	iceBall.bounciness = 1;
	iceBall.friction = 0;
	iceBall.drag = 0;
	iceBall.text = "ICE";
    iceBall.textSize = 20;
    iceBall.textColor = 'white';

	alienGroup = new Group();
	alienGroup.collides(ball_1, removeAlien);

	for (i = 0; i < 100; i++) {
		alien = new Sprite(width/2, height/2, 20, 20);
		alien.vel.x = (randomInclNegative()*80);
		alien.vel.y = (randomInclNegative()*80);
		alien.bounciness = 1;
		alien.friction = 0;
		alien.drag = 0;
        alien.color = random([]);
		alienGroup.add(alien);
	}
}

/*******************************************************/
// draw()
/*******************************************************/
function draw() {
	background('lightgrey'); 
}

/*******************************************************/
// randomInclNegative()
/*******************************************************/
function randomInclNegative() {
	if (Math.random() >= 0.5) {
		return Math.random()*-1;
	}

	return Math.random();
}

/*******************************************************/
// removeAlien()
/*******************************************************/
function removeAlien(_alienCollidedWith, _ball1) {
	_alienCollidedWith.remove();
}

/*******************************************************/
//  END OF APP
/*******************************************************/