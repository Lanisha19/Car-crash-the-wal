var car, wall;
var speed, weight;


function setup() {
  createCanvas(1000,400);
  car = createSprite(100, 200, 40, 40);
  car.shapeColor="white";
  car.velocityX=speed=Math.round(random(55,90));

  wall = createSprite(900, 200, 40, 200);
  wall.shapeColor="grey";

  weight=Math.round(random(400,1500))

}

function draw() {
  background("black");  
  
  if(wall.x - car.x < wall.width/2 + car.width/2){
    car.velocityX=0;
    var deformation=0.5 * weight * speed * speed/22500
    
    if(deformation<100){
      car.shapeColor="green";
    }
   if(deformation>100 && deformation<180){
     car.shapeColor="yellow";
   }
   if(deformation>180){
     car.shapeColor="red";
   }

  }
  
 drawSprites();
}