var bg, bgImg
var dishWasherImg;
var handAnimation;
var cleanDishes;
var dirtyDishes;
var hand
 

function preload(){

handAnimation = loadAnimation("assets_lavaplatos/left_hand.png","assets_lavaplatos/right_hand.png");



}

function setup(){

  createCanvas(windowWidth,windowHeight);
  
  hand = createSprite(400,400);
  hand.addAnimation("hands",handAnimation);
  


}

function draw() {
  
  background("black");
  drawSprites();
 
}


