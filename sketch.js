var engine,world;
var ball,ground;

const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

function setup() {
  createCanvas(400,400);
 engine=Engine.create();
 world=engine.world;
 var groundOption={
isStatic: true
 }

 ground=Bodies.rectangle(200,390,400,20,groundOption)
World.add(world,ground)

var ballOption={
  restitution:1
   }
  
   ball=Bodies.circle(200,220,25,ballOption)
  World.add(world,ball)
  
}

function draw() {
  background("lime");
  Engine.update(engine); 
  rectMode(CENTER); 
  rect(ground.position.x,ground.position.y,400,20);  
 
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,25,25);
}