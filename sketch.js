var garden,rabbit;
var gardenImg,rabbitImg;
var leaf,leafImage;
var apple,appleImage;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  leafImage = loadImage("leaf.img");
  appleImage =loadImage("apple.png");

}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
rabbit.x=World.mouseX;

}


function draw() {
  background(0);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);
  if(leaf||apple.isTouching(rabbit)){
   leaf||apple.destroy();
  }
  createApple();
  createLeaf();
  drawSprites();
}

function createApple(){
  if(frameCount%80==0){
  apple=createSprite(200,200,10,10);
  apple.addImage("r",appleImage);
  apple.velocityY=6;
  apple.scale=0.4;
  apple.lifetime=400;
  }
}
function createLeaf(){
  if(frameCount%80==0){
  leaf=createSprite(300,200,20,20);
  leaf.addImage("w",leafImage);
  leaf.velocityY=6
  leaf.scale=0.4;
  apple.lifetime=400;
 }



}
















