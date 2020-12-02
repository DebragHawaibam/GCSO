var wall,wall2,car1,car2,carImag,carCrashImg1,carCrashImg2,carCrashImg3;
var speed1,weight1,speed2,weight2;

function preload() {
  carImg = loadImage("redcar.jpg");
  carCrashImg1 = loadImage("orangecar.jpg");
  carCrashImg2 = loadImage("green.jpg");
  carCrashImg3 = loadImage("yellowcar.jpg");
}
function setup() {
  createCanvas(1600,400);

  speed1 = random(55,90);
  weight1 = random(400,1500);

  speed2 = random(55,90);
  weight2 = random(400,1500);


  car1=createSprite(50,50,50,50);
  car1.velocityX = speed1;

  car1.addImage("before",carImg);
  car1.addImage("after1",carCrashImg1);
  car1.addImage("after2",carCrashImg2);
  car1.addImage("after3",carCrashImg3);

  car1.scale = 0.4;

  car2=createSprite(150,150,50,50);
  car2.velocityX = speed2;

  car2.addImage("before",carImg);
  car2.addImage("after1",carCrashImg1);
  car2.addImage("after2",carCrashImg2);
  car2.addImage("after3",carCrashImg3);


  car2.scale = 0.4;

  wall=createSprite(1500, 60, 50, height/5);
  wall.shapeColor = "green";

  wall2=createSprite(1500, 150, 50, height/5);
  wall2.shapeColor = "green";
}

function draw() {
   
  background("white");

if(wall.x-car1.x < (car1.width+wall.width)/2){
   car1.velocityX = 0;
   var deformation = 0.5 * weight1 * speed1 * speed1/22509;
   if (deformation > 180)
   {
    car1.changeImage("after1",carCrashImg1);

   }
    if (deformation < 180 && deformation > 100)
       {
         car1.changeImage("after2",carCrashImg2);

       }
       if ( deformation < 100)
       {
        car1.changeImage("after3",carCrashImg3);

      }
     }

     if(wall.x-car2.x < (car2.width+wall.width)/2){
      car2.velocityX = 0;
      var deformation = 0.5 * weight2 * speed2 * speed2/22509;
      if (deformation > 180)
      {
        car2.changeImage("after1",carCrashImg1);
      }
       if (deformation < 180 && deformation > 100)
          {
            car2.changeImage("after2",carCrashImg2)
          }
          if ( deformation < 100)
          {
           car2.changeImage("after3",carCrashImg3);
         }
        }
    drawSprites();
}