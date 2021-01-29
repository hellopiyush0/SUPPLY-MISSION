var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload(){

	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")

}

function setup() {

	createCanvas(800, 600);
	
	rectMode(CENTER);
	
	packageSprite = createSprite(width/2, 80, 10, 10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale = 0.2

	helicopterSprite = createSprite(width/2, 160, 10, 10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale = 0.6

	groundSprite = createSprite(width/2, height-6, width, 10);
	groundSprite.shapeColor = color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2, 160, 5, {restitution:0.4, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 595, width, 10 , {isStatic:true});
 	World.add(world, ground);

 	boxPosition = width/2-100
 	boxY = 540;


 	boxleftSprite = createSprite(boxPosition, boxY, 20,100);
 	boxleftSprite.shapeColor = color(255,0,0);

 	boxLeftBody = Bodies.rectangle(boxPosition+20, boxY, 20,100 , {isStatic:true});
 	World.add(world, boxLeftBody);

 	boxBase=createSprite(boxPosition+100, boxY+40, 200,20);
 	boxBase.shapeColor=color(255,0,0);

 	boxBottomBody = Bodies.rectangle(boxPosition+100, boxY+45-20, 200,20 , {isStatic:true});
 	World.add(world, boxBottomBody);

 	boxleftSprite = createSprite(boxPosition+200 , boxY, 20,100);
 	boxleftSprite.shapeColor = color(255,0,0);

 	boxRightBody = Bodies.rectangle(boxPosition+200-20 , boxY, 20, 100, {isStatic:true});
 	World.add(world, boxRightBody);


	Engine.run(engine);
  
}


function draw() {

  rectMode(CENTER);
  background(0);

  packageSprite.x = packageBody.position.x 
  packageSprite.y = packageBody.position.y 

  groundSprite.y = ground.position.y 

  drawSprites();
 
}

function keyPressed() {

  if(keyCode === LEFT_ARROW && packageBody.position.y === 160){

	helicopterSprite.x = helicopterSprite.x - 20;
	translation={x:-20,y:0}
    Matter.Body.translate(packageBody, translation)
	
  }
	  
  if(keyCode === RIGHT_ARROW && packageBody.position.y === 160){
	
	helicopterSprite.x = helicopterSprite.x + 20;
	translation={x:20,y:0}
    Matter.Body.translate(packageBody, translation)
	
  }
	
  if(keyCode === DOWN_ARROW){
    
    Matter.Body.setStatic(packageBody, false); 
  
  }
  
}