const Engine = Matter.Engine;
const World = Matter.World;
const Bodies  = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var treeObj,m1,m2,m3,m4,m5,m6,m7,m8,m9,m10,m11,m12;
var boyImage,stoneObj,groundObj,launchObj;


function preload(){
  boyImage = loadImage("assets/boy.png");
}



function setup() {
  createCanvas(1300,600);

  engine = Engine.create();
  world = engine.world;


  groundObj = new Ground(width/2,600,width,20);
  treeObj = new Tree(1050,580);

  stoneObj = new Stone(200,400,30);
  launchObj = new Launcher(stoneObj.body,{x:235,y:420});

  m1 = new Mango(1100,100,30);
  m2 = new Mango(1000,300,30);
  m3 = new Mango(1050,200,30);
  m4 = new Mango(1103,100,30);
  m5 = new Mango(900,200,30);
  m6 = new Mango(950,250,30);
  m7 = new Mango(940,150,30);
  m8 = new Mango(1150,250,30);
  m9 = new Mango(1130,200,30);
  m10 = new Mango(1250,250,30);
  m11= new Mango(1220,200,30);
  m12 = new Mango(1200,150,30);

  detectCollision(stoneObj,m1);
  detectCollision(stoneObj,m2);
  detectCollision(stoneObj,m3);
  detectCollision(stoneObj,m4);
  detectCollision(stoneObj,m5);
  detectCollision(stoneObj,m6);
  detectCollision(stoneObj,m7);
  detectCollision(stoneObj,m8);
  detectCollision(stoneObj,m9);
  detectCollision(stoneObj,m10);
  detectCollision(stoneObj,m11);
  detectCollision(stoneObj,m12);
  
}

function draw() {

  background(255,255,255);  
  Engine.update(engine);
  groundObj.display();
  treeObj.display();
  m1.display()
  m2.display()
  m3.display()
  m4.display()
  m5.display()
  m6.display()
  m7.display()
  m8.display()
  m9.display()
  m10.display()
  m11.display()
  m12.display()

  stoneObj.display();
  launchObj.display()

  image(boyImage,200,340,200,300);
  drawSprites();
}

function mouseDragged(){
  Matter.Body.setPosition(stoneObj.body,{x:mouseX,y:mouseY})
}

function mouseReleased(){
  launchObj.fly();
}

function keyPressed(){
  if(keyCode === 32){
    Matter.Body.setPosition(stoneObj.body,{x:235,y:420});
    launchObj.attach(stoneObj.body);
  }
}

function detectCollision(stone,mango){
  mangoBodyPos = mango.body.position;
  stoneBodyPos = stone.body.position;
  
  var distance = dist(stoneBodyPos.x,stoneBodyPos.y , mangoBodyPos.x,mangoBodyPos.y)
  if(distance < mango.r+stone.r){
    Mango.Body.setStatic(mango.body,false);
  }
}