var movingRect,fixRect;
function setup() {
  createCanvas(800,800);
 
  movingRect=createSprite(100,200,40,30);
  movingRect.shapeColor="purple";
  movingRect.debug=true;
  movingRect.velocityY=-5;

  fixRect=createSprite(400,400,50,40);
  fixRect.shapeColor="green";
  fixRect.debug=true;
  fixRect.velocityY=+5;

}

function draw() {
  background("red"); 

  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;

  
  bounceOff(movingRect,fixRect);
  drawSprites();
}
