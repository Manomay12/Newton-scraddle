
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball1,r1,roof;
var ball3,ball2;
var r2,r3;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
   
    roof=Bodies.rectangle(400,100,400,10,{isStatic:true})
	World.add(world,roof)
	ball1=new ball(200,600)
    ball2=new ball(400,600) 
    ball3=new ball (600,600)
	r1=new rope(ball1.b,this.roof)
    r2=new rope(ball2.b,this.roof)
    r3=new rope(ball3.b,this.roof)
	
	Engine.run(engine);
     
}


function draw() {
  rectMode(CENTER);
  background(255);
  
ball1.Display()
ball2.Display()
ball3.Display()
rect(roof.position.x,roof.position.y,400,10)
r1.Display()
r2.Display()
r3.Display()
  drawSprites();
 
}



