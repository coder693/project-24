
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball,ground;

function preload()
{
	
}

function setup() {
	createCanvas(800,700);

	
	engine = Engine.create();
	world = engine.world;
	rect1=createSprite(400,650,200,20);
	rect1.shapeColor=color("red")
	rect2=createSprite(300,620,20,100);
	rect2.shapeColor=color("red")
	rect3=createSprite(500,620,20,500);
	rect3.shapeColor=color("red")
	ball = new paper(200,100,20);
	ground=new Ground(400,660,1200,20);
	//Create the Bodies Here.
	rect1=Bodies.rectangle(400,630,200,20,{isStatic:true});
	rect2=Bodies.rectangle(300,620,20,100,{isStatic:true});
	rect3=Bodies.rectangle(500,620,20,500,{isStatic:true});
	World.add(world, rect1);
	World.add(world, rect2);
	World.add(world, rect3);
	
	World.add(world, ball);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  ball.display();
  drawSprites();
  ground.display();
  
 
}
function keyPressed() {
	if (keyCode === UP_ARROW) {
	   // Look at the hints in the document and understand how to make the package body fall only on
	   Matter.Body.applyForce(ball.body,ball.body.position,{x:85,y:-85});
	   
	 }
   }



