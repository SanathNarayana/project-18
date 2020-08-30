var ball, ballImage;
var paddle, paddleImage;
function preload() {
    
  ballImage=loadImage("ball.png");
  paddleImage=loadImage("paddle.png");
}
function setup() {
  createCanvas(400, 400);
  ball = createSprite(200,200);
  paddle = createSprite(380, 200);
  ball.addAnimation("ball",ballImage);
  paddle.addAnimation("paddle",paddleImage);
  ball.scale=0.5;
  paddle.scale=0.8;
  ball.velocityX=5;
  ball.velocityY=3;
}

function draw() {
  background(205,153,0);
  /* create Edge Sprites here */
  paddle.y=mouseY;
  ball.bounceOff(paddle);
  edges=createEdgeSprites();
  ball.bounceOff(edges[0]);
  ball.bounceOff(edges[2]);
  ball.bounceOff(edges[3]);
  /* Allow the ball sprite to bounceOff the left, top and bottom edges only, leaving the right edge of the canvas to be open. */
  

  /* Allow the ball to bounceoff from the paddle */
  /* Also assign a collision callback function, so that the ball can have a random y velocity, making the game interesting */
 
  /* Prevent the paddle from going out of the edges */ 
  
  
  if(keyDown(UP_ARROW))
  {
     /* what should happen when you press the UP Arrow Key */
  }
  
  if(keyDown(DOWN_ARROW))
  {
    /* what should happen when you press the UP Arrow Key */
  }
  drawSprites();
  
}

function randomVelocity()
{
  /* this function gets called when the ball bounces off the paddle */
  /* assign the ball a random vertical velocity, so it bounces off in random direction */
}

