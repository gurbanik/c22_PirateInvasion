const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world,ground;
var bgImg, tower, towerImg
var cannon


function preload() {
  bgImg = loadImage('./assets/background.gif')
  towerImg = loadImage('./assets/tower.png')
  
}
function setup() {

  canvas = createCanvas(1200, 600);
  engine = Engine.create();
  world = engine.world;
  
  ground = Matter.Bodies.rectangle(0,height-1,width*2,1,{isStatic:true})
  World.add(world,ground)

  tower = Bodies.rectangle(160,350,160,310,{isStatic:true})
  World.add(world,tower)
  
  cannon = new Cannon(150,110,130,100,20)

}

function draw() {
  image (bgImg,0,0,1200,600)
  

  Engine.update(engine);
  
   rect(ground.position.x,ground.position.y,width*2,1)

   push()
   imageMode(CENTER)
   image(towerImg,tower.position.x,tower.position.y,160,310)
   pop()

   cannon.display()
}
