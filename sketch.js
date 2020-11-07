const Engine=Matter.Engine;
const World= Matter.World;
const Bodies=Matter.Bodies;

var engine,world;
function setup() {
  createCanvas(1200,600);

  engine=Engine.create();
  world=engine.world;

 box= new Box(900,500,80,80);
 box1= new Box(700,500,80,80);
 pig1=new Pig(800,500)
 log1= new Log(800,400,300,PI/2)
 ground=new Ground(width/2,height-30,width,20);

}

function draw() {

  Engine.update(engine);
  background(0);  
  box.display();
  box1.display();
  pig1.display();
  log1.display();
  ground.display();

}




