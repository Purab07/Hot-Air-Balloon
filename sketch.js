var balloon;


function preload(){
balloon = loadAnimation("Hot Air Ballon-01.png","Hot Air Ballon-02.png","Hot Air Ballon-03.png","Hot Air Ballon-04.png");
}

function setup() {
  createCanvas(500,500);
  createSprite(400, 200, 50, 50);
  database = firebase.database();
}

function draw() {
  background(255,255,255);  

  if(keyDown(UP_ARROW)){
    balloon.y = balloon.y+1;
  }

  if(keyDown(DOWN_ARROW)){
    balloon.y = balloon.y-1;
  }

  if(keyDown(RIGHT_ARROW)){
    balloon.y = balloon.x+1;
  }

  if(keyDown(LEFT_ARROW)){
    balloon.y = balloon.x-1;
  }
  drawSprites();
}