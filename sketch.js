let blocks;

function setup() {
	new Canvas(400, 400);
	world.gravity.y = 10;

	blocks = new Group();
	blocks.w = 100;
	blocks.color = 'red';
	blocks.h = 80;
}

function draw() {
	background('blue');
}
