var ball,ground,log;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
function preload()
{

}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	log1 = createSprite(600,630,150,15);
	log2 = createSprite(525,600,15,75);
	log3 = createSprite(675,600,15,75);

	//Create a Ground
	ground = new Ground(400, 650, 800, 10);
	
	ball=new Ball(200,630,20);

	Engine.run(engine);
  }


function draw() {
   background(0);
    ball.display();
  drawSprites();
}

function keyPressed(){
    if (keyCode === UP_ARROW){

	Matter.Body.applyForce(ball.body,ball.body.position,{x:85,y:-85})

	}
}




