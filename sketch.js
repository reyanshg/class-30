const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;

var fruit;

var ground;
var r;

var rope1;
var bg;
var bunny, bunnyImg;
var melonImg;
var button;

function preload(){
  bg = loadImage("rabbit background.png");
  bunnyImg = loadImage("rabbit.png");
  melonImg = loadImage("melon.png");
}
function setup() 
{
  createCanvas(500,700);
  engine = Engine.create();
  world = engine.world;

  bunny = createSprite(250, 625, 100, 100);
  bunny.addImage(bunnyImg);
  bunny.scale=0.2;
  ground = new Ground(250, 690, 500, 10);
  
  rope1 = new rope(7,{x:250, y:50});
  fruit = Bodies.circle(300, 300, 20);
  Composite.add(rope1.body, fruit);

  fruit_link = new link(rope1, fruit);

  button = createImg("cut_button.png");
  button.position(230, 50);
  button.size(50,50);
  button.mouseClicked(drop)
  
 
  rectMode(CENTER);
  ellipseMode(RADIUS);
  
  textSize(50)
}

function draw() 
{
  background(bg);
  Engine.update(engine);

  console.log(fruit);
  rope1.show();
  push();
  imageMode(CENTER);
  image(melonImg, fruit.position.x, fruit.position.y, 50, 50);
  pop();

  
  

  ground.display();

  drawSprites();
   
}

function drop(){
  rope1.break();
  fruit_link.detach();
  fruit_link = null;
}




