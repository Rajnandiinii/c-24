var engine,world,box1,box2,ground,pig1,log1,pig2,box3,box4;
const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
function setup() {
  createCanvas(1200,400);
engine=Engine.create();
world=engine.world;
box1=new Box(700,370,50,50);
box2=new Box(900,370,50,50);
ground=new Ground(600,380,1200,20);
pig1=new Pig(800,370)
log1=new Log(800,320,250,PI/2)
box3=new Box(700,300,50,50);
box4=new Box(900,300,50,50);

}

function draw() {
  background(0);
Engine.update(engine);
box1.display(); 
box2.display();
ground.display();
pig1.display(); 
log1.display();
box3.display();
box4.display();   
}