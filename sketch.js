var fixedRectrangle;
var movingRectrangle;

function setup() {
  createCanvas(800,400);
  fixedRectrangle=createSprite(400, 200, 50, 50);
  movingRectrangle=createSprite(300,100,50,50)
}

function draw() {
  background(255,255,255);  
  drawSprites();
  if(movingRect.x - fixedRect.x < fixedRect.width / 2 + movingRect.width / 2 &&
     fixedRect.x - movingRect.x < fixedRect.width / 2 + movingRect.width / 2 &&
      movingRect.y - fixedRect.y < fixedRect.height / 2 + movingRect.height / 2 &&
     fixedRect.y - movingRect.y < fixedRect.height / 2 + movingRect.height / 2)

     {
       fixedRectrangle.shapeColor ="yellow";
       movingRectRangle.shapeColor ="green";
     }
     else{ fixedRectrangle.shapeColor ="blue";
     movingRectRangle.shapeColor ="blue";

     }
}

