
function setup() {
  createCanvas(400,400);
  ball=createSprite(50,50,5,5)
}

function draw() 
{
  background(30);
  ball.velocityX=0
  ball.velocityY=0
  if(keyDown("left")){
    ball.velocityX = -4
  }
  if(keyDown("right")){
    ball.velocityX = 4
  }
  if(keyDown("up")){
    ball.velocityY = -4
  }
  if(keyDown("down")){
    ball.velocityY = 4
  }
drawSprites()
}




