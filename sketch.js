var car,wall,car2,wall2
var speed,weight





function setup() {
  createCanvas(1000,600);
  speed=random(55,90)
  weight=random(400,1500)

 car=createSprite(50,100,50,50)
 car.velocityX=speed
 car.shapeColor=color(255)
 car2=createSprite(50,400,50,50)
 car2.velocityX=speed
 car2.shapeColor=color(255)
 wall=createSprite(1000,100,80,200)
 wall.setStatic=true
 wall2=createSprite(1000,400,80,200)
 wall2.setStatic=true
 console.log()

  
}

function draw() {
  background(0);  
  drawSprites();

  if(wall.x-car.x <(car.width + wall.width)/2 ){

    car.velocityX=0;
    var deformation=0.5 *weight*speed*speed/22509;
    if(deformation>180)
    {
      car.shapeColor=color(255,0,0)
    }
    if(deformation<180 && deformation>100)
    {
      car.shapeColor=(230,230,0);
    }
    if(deformation<100)
    {
      car.shapeColor=color(0,255,0)
    }
  }


  if(wall.x-car2.x <(car2.width + wall.width)/2 ){

    car2.velocityX=0;
    var deformation=0.5 *weight*speed*speed/22509;
    if(deformation>180)
    {
      car2.shapeColor=color(255,0,0)
    }
    if(deformation<180 && deformation>100)
    {
      car2.shapeColor=(230,230,0);
    }
    if(deformation<100)
    {
      car2.shapeColor=color(0,255,0)
    }
  }


}