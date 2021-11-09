var retFixo, retMovendo;

function setup() {
  createCanvas(1200,800);
  retFixo = createSprite(600, 400, 50, 80);
  retFixo.shapeColor = "green";
  retFixo.debug = true;

  retMovendo = createSprite(400,200,80,30);
  retMovendo.shapeColor = "green";
  retMovendo.debug = true;

  objeto1 = createSprite(100,100,50,50);
  objeto1.shapeColor = "green";
  objeto2 = createSprite(200,100,50,50);
  objeto2.shapeColor = "green";
  objeto3 = createSprite(300,100,50,50);
  objeto3.shapeColor = "green";
  objeto4 = createSprite(400,100,50,50);
  objeto4.shapeColor = "green";
}

function draw() {
  background(0,0,0);  
  retMovendo.x = World.mouseX;
  retMovendo.y = World.mouseY;

 if(isTouching(retMovendo, objeto1)) {
    retMovendo.shapeColor = "blue";
    objeto1.shapeColor = "blue";
 } else {
    retMovendo.shapeColor = "green";
    objeto1.shapeColor = "green";
 }

  drawSprites();
}

function isTouching(object1, object2){
   if (object1.x - object2.x < object2.width/2 + object1.width/2
      && object2.x - object1.x < object2.width/2 + object1.width/2
      && object1.y - object2.y < object2.height/2 + object1.height/2
      && object2.y - object1.y < object2.height/2 + object1.height/2) {
     return true;
  }
  else{
    return false;
  }
}
