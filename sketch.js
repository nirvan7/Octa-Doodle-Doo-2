var ground;
var prince,princeImg;
var score=0;
var bckground,backgroundImg;
var batAnimation,bat;
var crystal,crystalImg;
var flower,flowerImg;

function preload(){
princeImg=loadImage("images/Prince.jpg");
backgroundImg=loadImage("images/Forest.jpg");
crystalImg=loadImage("images/Crystal.jpg");
flowerImg=loadImage("images/Flower.jpg");

batAnimation = loadAnimation("images/bat1.png","images/bat2.png","images/bat3.png",
                        "images/bat4.png","images/bat5.png","images/bat6.png",
                        "images/bat7.png","images/bat8.png","images/bat9.png",
                        "images/bat10.png","images/bat11.png","images/bat12.png");
}

function setup(){
createCanvas(1000,380);

crystalGroup=new Group();
flowerGroup=new Group();
ground=createSprite(500,380,1000,10);
ground.x=ground.width/2;
ground.velocityX=-7;

bckground=createSprite(0,100,1000,380);
bckground.addImage("backgroundImg",backgroundImg);
bckground.x=bckground.width/2;
prince=createSprite(80,330,30,100);
}
function draw(){
    textSize(24)
    text("Score:"+score,300,100);
//console.log("hi" + bckground.x);
if(bckground.x<350)
  {
   bckground.x=bckground.width/2; 
  }
 bckground.velocityX=-7;

if (crystalGroup.isTouching(prince)) {
    score=score+2; 
     crystalGroup.destroyEach();
}
     if (flowerGroup.isTouching(prince)) {
        score=score+1; 
         flowerGroup.destroyEach();
     }
prince.addImage(princeImg);
	prince.scale = 0.3;
    ground.velocityX=-7;
if (ground.x<500){
    ground.x=ground.width/2
}

spawnCrystals();
spawnFlowers();

if (keyDown("UP")||keyDown("space")){
prince.velocityY=-8.5;
//prince.velocityY=prince.velocityY+1;
//prince.collide(ground);
}
prince.velocityY=prince.velocityY+1;
prince.collide(ground);
if(keyDown("RIGHT")){;
    prince.x=prince.x+10;
    }

   // bat= createSprite(Math.round(random(0,400)),Math.round(random(0,400)));
    //bat.addAnimation("moving_bat",batAnimation);
   // bat.visible = false;
  //  if(frameCount % 100 === 0){
    //    bat.visible = true;
     //   bat.velocityX = Math.round(random(-4,4));
     //   bat.velocityY = Math.round(random(-4,4));
      //  bat.scale=0.4;

drawSprites();
}

function spawnCrystals(){
if (frameCount %150 === 0){
    crystal=createSprite(200,200,20,20);
    crystal.y=Math.round(random(120,200));
    crystal.addImage(crystalImg);
    crystal.scale=0.04;  
    crystal.velocityX=-6;
    crystalGroup.add(crystal);
    }
}

function spawnFlowers(){
if (frameCount %100 === 0){
    flower=createSprite(250,250,20,20);
    flower.y=Math.round(random(120,200));
    flower.addImage(flowerImg);
    flower.scale=0.05;  
    flower.velocityX=-6;
    flowerGroup.add(flower);
    }
}
