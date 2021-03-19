
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var hammer, stone, rubber, ground


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	hammer= new Hammer(200, 150);
	ground= new Ground(400,690,800,20)
	stone= new Stone(100, 400, 50, 50)
	rubber= new Rubber(50, 50,50 )

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 hammer.display();
 ground.display();
stone.display();
rubber.display();

}



