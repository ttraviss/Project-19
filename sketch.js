var PLAY = 1;
var END = 0;
var gameState = PLAY;


var sprite
var ground, invisibleGround
var obstaclesGroup, obstacle

var score

function setup() 
{
  createCanvas(600,200);

  sprite = createSprite(50, 180, 20, 50);


  ground = createSprite(300,180,600,20);
  ground.velocityX = -7

  invisibleGround = createSprite(200,190,400,10);
  invisibleGround.visible = false;

  obstaclesGroup = createGroup();

  sprite.setCollider("circle", 0, 0, 40);
  sprite.debug = true;
  score = 0
}

function draw() 
{
  background(180);
 text("Score: "+ score, 500, 50);

 if(gameState === PLAY) {
   groundvelocityX = -4;
   score = score + Math.round(frameCount/60);

   if(ground.x < 150){
     ground.x = ground.width/2;
   }

   if(keyDown("space") && sprite.y >= 100) {
     sprite.velocityY = -13;
   }

   sprite.velocityY = sprite.velicityY + 0.8

   spawnObstacles();
   
   //if(obstaclesGroup.isTouching(sprite)) { 
     //gameState = END;
   //}
 }
 else if (gameState === END) {
   ground.velicityX = 0;
   sprite.velocityY = 0;

 }
   

 
 drawSprites();  
}

function spawnObstacles() {
  if (frameCount % 60 === 0) {
    obstacle = createSprite(600,165,10,40);
    obstacle.velocityX = -6;
    obstacle.shapeColor = color(random(0,255), random(0,255), random(0,255));
    obstacle.height = Math.round(random(10,50));
    obstacle.lifetime = 300;

    obstaclesGroup.add(obstacle);
  }
}