var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	
	edge1 = createSprite(300, 608, 20, 100)
	edge2 = createSprite(500, 608, 20, 100)
	edge3 = createSprite(390, 648, 200, 20)
	edge1.shapeColor = "red"
	edge2.shapeColor = "red"
	edge3.shapeColor = "red"

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , { isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	edge10 = Bodies.rectangle(300, 608, 20, 100 , {isStatic:true} );
	edge20 = Bodies.rectangle(500, 608, 20, 100 , {isStatic:true} );
	edge30 = Bodies.rectangle(390, 648, 200, 20 , {isStatic:true} );
	World.add(world, ground);
	World.add(world, edge10);
	World.add(world, edge20);
	World.add(world, edge30);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
 
}

function keyPressed() {
 if (keyDown = "DOWN_ARROW") {
    Body.setStatic(packageBody,false);
    
  }
}
// https://github.com/rupinwhitehatjr/SupplyMissionC23