var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var plan1;
var plan2;
var plan3;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	
	plan1 = new Block(400,660,110,10);
	plan2 = new Block(350,620,10,80);
	plan3 = new Block(450,620,10,80);

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6;

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	var packageBody_options ={
		isStatic:true,
		restitution:1.0
	}

	packageBody = Bodies.rectangle(width/2,200,5,5,packageBody_options);
	World.add(world, packageBody);

	var ground_options ={
		isStatic:true
	}
	

	//Create a Ground
	ground = Bodies.rectangle(width/2,650,width,10,ground_options);
	 World.add(world, ground);
	 
	 console.log(packageBody.type);
	 console.log(packageBody.position.X);
	 console.log(packageBody.position.Y);

	Engine.run(engine);
  
}


function draw() {

  background(100);
	packageSprite.x= packageBody.position.x 
    packageSprite.y= packageBody.position.y 

	plan1.display();
	plan2.display();
	plan3.display();

  drawSprites();
 
}

function keyPressed() {
 if (keyCode===DOWN_ARROW) {
    Matter.Body.setStatic(packageBody,false);
	console.log("error");
  }
}



