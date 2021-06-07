var dog,dogImage,happyDogImage;
var database;
var Food,foodStock;
function preload()
{
	dogImage=loadImage("images/dogImg.png")
  happyDogImage=loadImage("images/dogImg1.png")
}

function setup() {
	createCanvas(800, 700);
dog=createSprite(400,430)
dog.addImage(dogImage)
dog.scale=0.2
database=firebase.database();
foodStock=database.ref("food")
foodStock.on("value",readStock)
}


function draw() {  
  background("green")
  if(keyWentDown(UP_ARROW)){
    writeStrock(Food)
    dog.addImage(happyDogImage)
  }
  drawSprites();
  fill("black")
  textSize(20);
  text("press UP_ARROW key to feed",100,50)
  text("food:"+Food,100,100)
}
function readStock(data){
 Food=data.val();
}
function writeStrock(x){
  if(x<=0){
    x = 1
  }
  x=x-1;
database.ref('/').update({
  food:x
})
}















