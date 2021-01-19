

var box,block;


function setup() {
  createCanvas(800,400);
 fixedRectangle = createSprite(400, 200, 50, 50);
 fixedRectangle.shapeColor = "green";
 movingRectangle = createSprite(500,200,50,100);
 movingRectangle.shapeColor = "green";
 box = createSprite(200,200,50,80);
 block = createSprite(600,200,100,50);
 // fixedRectangle.debug=true;
 //movingRectangle.debug=true;
}

function draw() {
  background("black"); 
  movingRectangle.x=mouseX;
  movingRectangle.y=mouseY; 

  if(isTouching(box,movingRectangle)){
    box.shapeColor = "red";
    movingRectangle.shapeColor = "red";
    
  }
 else{
  box.shapeColor = "green";
 movingRectangle.shapeColor = "green";
  }
  
  //console.log(fixedRectangle.x-movingRectangle.x);
  //console.log(fixedRectangle.width/2+movingRectangle.width/2);

  isTouching();
  drawSprites();
}

function isTouching(object1,object2){

  if(object1.x-object2.x < object1.width/2 + object2.width/2
    && object2.x-object1.x < object1.width/2+object2.width/2
     && object1.y-object2.y < object1.height/2+object2.height/2
    && object2.y-object1.y < object1.height/2+object2.height/2){
    return true;
  }
  else{
   return false;
  }
  


}

function bounceOff(object1,object2){

  if(object1.x-object2.x < object1.width/2 + object2.width/2
    && object2.x-object1.x < object1.width/2+object2.width/2
     && object1.y-object2.y < object1.height/2+object2.height/2
    && object2.y-object1.y < object1.height/2+object2.height/2){
    return true;
  }
  else{
   return false;
  }
  


}

