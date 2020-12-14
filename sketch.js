var helicopterIMG, helicopterSprite, packageSprite, packageIMG;
var packageBody, ground;
var bottombox, leftbox, rightbox;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png");
	packageIMG=loadImage("package.png");
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	
	engine = Engine.create();
	world = engine.world;
	
    var options = {

		isStatic : true
	}
	
	bottombox = Bodies.rectangle(400,640,200,20,options);
	World.add(world, bottombox);
	
	leftbox = Bodies.rectangle(300,620,20,100,options);
	World.add(world, leftbox);
	
	rightbox = Bodies.rectangle(500,620,20,100,options);
    World.add(world, rightbox);
	
	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG);
	packageSprite.scale=0.2;
    
	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG);
	helicopterSprite.scale=0.6;
    
	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255);
    
    
    
	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution: 0.5, isStatic: true});
	World.add(world, packageBody);
	
    
    
	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);
    
    
	Engine.run(engine);
    
}


function draw() {
  
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x;
  packageSprite.y= packageBody.position.y;
  drawSprites();
  fill("Red");
  rect(bottombox.position.x, bottombox.position.y+20, 200, 20);
  rect(leftbox.position.x, leftbox.position.y, 20, 100);
  rect(rightbox.position.x, rightbox.position.y, 20, 100);

}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    
    Matter.Body.setStatic(packageBody, false);
    
  }
}
