const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var moltenValley, moltenValleyImage;

var zep8, zep8Image;
var zorg, zorgImage;

var zorgFriend1, zorgFriend1Image;
var zorgFriend2, zorgFriend2Image;

var zepian1, zepian1Image;
var zepian2, zepian2Image;

var andromedaRobot, andromedaRobotImage;

var robot1, robot1Image;
var robot2, robot2Image;

var acherage, acherageImage; 

var heart1, heart1Image, heart2, heart2Image, heart3, heart3Image, heart4, heart4Image, heart5, heart5Image

var dheart1, dheart1Image, dheart2, dheart2Image, dheart3, dheart3Image, dheart4, dheart4Image, dheart5, dheart5Image

var playOn, playOnImage, buyAmmo, buyAmmoImage;

var bullets = 0;

var boulder1;

var score = 0;

function preload(){
  // moltenValleyImage = loadImage("MoltenValleyBg.png");
  zorgImage = loadImage("Zorg.png");
  
  zep8Image = loadImage("Zep8S.png");
  
  zorgFriend1Image = loadImage("Zorg.png");
  zorgFriend2Image = loadImage("Zorg.png");
  
  zepian1Image = loadImage("Zorg.png");
  zepian2Image = loadImage("Zorg.png");
  
  andromedaRobotImage = loadImage("AndromedaRobot.png");
  
  robot1Image = loadImage("AndromedaRobot.png");
  
  robot2Image = loadImage("AndromedaRobot.png");

  acherageImage = loadImage("Acherage.png");

  playOnImage = loadImage("playOn.png");

  buyAmmoImage = loadImage("buyAmmo.png");

  heart1Image = loadImage("heart.png");

  heart2Image = loadImage("heart.png");

  heart3Image = loadImage("heart.png");

  heart4Image = loadImage("heart.png");

  heart5Image = loadImage("heart.png");

  dheart1Image = loadImage("deadHeart.png");

  dheart2Image = loadImage("deadHeart.png");

  dheart3Image = loadImage("deadHeart.png");

  dheart4Image = loadImage("deadHeart.png");

  dheart5Image = loadImage("deadHeart.png");
  
  
}


function setup() {
  createCanvas(1000, 600);
  // moltenValley = createSprite(500,300,10,10);
  // moltenValley.addImage("MoltenValleyBg", moltenValleyImage);

  engine = Engine.create();
  world = engine.world;

  boulder1 = new boulder(880,450,50,50);
  
  zep8 = createSprite(500,300,10,10);
  zep8.addImage("Zep8", zep8Image);
  zep8.scale = 2;
  
  zorg = createSprite(100,470,50,50);
  zorg.addImage("Zorg", zorgImage);
  zorg.scale = 0.2;
  
  zorgFriend1 = createSprite(150,520,50,50);
  zorgFriend1.addImage("ZorgFriend1", zorgImage);
  zorgFriend1.scale = 0.1;
  zorgFriend1.depth = zorg.depth - 1;
  
  zorgFriend2 = createSprite(50,520,50,50);
  zorgFriend2.addImage("ZorgFriend2", zorgImage);
  zorgFriend2.scale = 0.1;
  zorgFriend2.depth = zorg.depth - 1;
  
  zepian1 = createSprite(195,520,50,50);
  zepian1.addImage("Zepian1", zorgImage);
  zepian1.scale = 0.1;
  zepian1.depth = zorg.depth - 1;
  
  zepian2 = createSprite(240,520,50,50);
  zepian2.addImage("Zepian2", zorgImage);
  zepian2.scale = 0.1;
  zepian2.depth = zorg.depth - 1;

  acherage = createSprite(880,505,50,50);
  acherage.addImage("Acherage",acherageImage);
  acherage.scale = 0.2;
  acherage.visible = false;
  
  playOn = createSprite(400,300,50,50);
  playOn.addImage("playOn",playOnImage);
  playOn.scale = 0.2;
  playOn.visible = false;

  buyAmmo = createSprite(600,300,50,50);
  buyAmmo.addImage("buyAmmo",buyAmmoImage);
  buyAmmo.scale = 0.2;
  buyAmmo.visible = false;

  heart1 = createSprite(30,40,20,20);
  heart1.addImage("heart1",heart1Image);
  heart1.scale = 0.1;

  heart2 = createSprite(80,40,20,20);
  heart2.addImage("heart2",heart2Image);
  heart2.scale = 0.1;

  heart3 = createSprite(130,40,20,20);
  heart3.addImage("heart3",heart3Image);
  heart3.scale = 0.1;

  heart4 = createSprite(180,40,20,20);
  heart4.addImage("dheart4",heart4Image);
  heart4.scale = 0.1;

  heart5 = createSprite(230,40,20,20);
  heart5.addImage("dheart5",heart5Image);
  heart5.scale = 0.1;

  dheart1 = createSprite(30,40,20,20);
  dheart1.addImage("dheart1",dheart1Image);
  dheart1.scale = 0.05;
  dheart1.depth = heart1.depth;
  heart1.depth = heart1.depth + 1

  dheart2 = createSprite(80,40,20,20);
  dheart2.addImage("dheart2",dheart2Image);
  dheart2.scale = 0.05;
  dheart2.depth = heart2.depth;
  heart2.depth = heart2.depth + 1

  dheart3 = createSprite(130,40,20,20);
  dheart3.addImage("dheart3",dheart3Image);
  dheart3.scale = 0.05;
  dheart3.depth = heart3.depth;
  heart3.depth = heart3.depth + 1

  dheart4 = createSprite(180,40,20,20);
  dheart4.addImage("dheart4",dheart4Image);
  dheart4.scale = 0.05;
  dheart4.depth = heart4.depth;
  heart4.depth = heart4.depth + 1

  dheart5 = createSprite(230,40,20,20);
  dheart5.addImage("dheart5",dheart5Image);
  dheart5.scale = 0.05;
  dheart5.depth = heart5.depth;
  heart5.depth = heart5.depth + 1

  
  
  zep8.velocityX = -1;
}

function draw() {
  background(220);
  
  if(zep8.x < 0) {
      zep8.x = zep8.width/2;
  }
  if(frameCount % 100 === 0){
    score = score + 1;
  }
    
  if(score === 3){
    acherage.visible = true;
    buyAmmo.visible = true;
    playOn.visible = true;
  }

  if(score > 4){
    acherage.visible = false;
  }
  drawSprites();
  if(score === 10){
    andromedaRobot = createSprite(880,495,50,50);
    andromedaRobot.addImage("Cirnas", andromedaRobotImage);
    andromedaRobot.scale = 0.15;
  
    robot1 = createSprite(810,520,50,50);
    robot1.addImage("Robot1", robot1Image);
    robot1.scale = 0.1;
    robot1.depth = andromedaRobot.depth - 1;
  
    robot2 = createSprite(960,520,50,50);
    robot2.addImage("Robot2", robot2Image);
    robot2.scale = 0.1;
    robot2.depth = andromedaRobot.depth - 1;
    boulder1.display();
  }
  if(mousePressedOver(buyAmmo)) {
    if(buyAmmo.visible === true) {
      bullets = bullets + 3;
      heart5.visible = false;
      playOn.visible = false;
      buyAmmo.visible = false;
    }
  }
  
  textSize(25);
  fill("chartreuse");
  text("Miles Traveled: " + score,770,50);

  text("Bullets: " + bullets,40,370);
  
  
  
}
