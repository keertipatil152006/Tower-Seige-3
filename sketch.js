const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground, sling, ball;
var stand1, stand2;
var box1, box2, box3, box4, box5, box6, box7, box8, box9, box10, box11, box12, box13, box14, box15;
var py1, py2, py3, py4, py5;
var score = 0
var backgroundImg

function preload(){
  getbackgroundImg()
}

function setup() {
  createCanvas(1300, 400);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(750, 375, 1500, 35);
  box1 = new Box(400, 230, 50, 50);
  box2 = new Box(450, 230, 50, 50);
  box3 = new Box(500, 230, 50, 50);
  box4 = new Box(550, 230, 50, 50);
  box5 = new Box(600, 230, 50, 50);
  box6 = new Box(425, 180, 50, 50);
  box7 = new Box(475, 180, 50, 50);
  box8 = new Box(525, 180, 50, 50);
  box9 = new Box(575, 180, 50, 50);
  box10 = new Box(450, 130, 50, 50);
  box11 = new Box(500, 130, 50, 50);
  box12 = new Box(550, 130, 50, 50);
  box13 = new Box(475, 80, 50, 50);
  box14 = new Box(525, 80, 50, 50);
  box15 = new Box(500, 30, 50, 50);
  py1 = new Box(845, 150, 50, 50);
  py2 = new Box(895, 150, 50, 50);
  py3 = new Box(945, 150, 50, 50);
  py4 = new Box(870, 100, 50, 50);
  py5 = new Box(920, 100, 50, 50);
  py6 = new Box(895, 50, 50, 50);
  ball = new Polygon(100, 100, 30);
  stand1 = new Ground(500, 270, 300, 20);
  stand2 = new Ground(900, 200, 300, 20);
  sling = new Sling(ball.body, { x: 200, y: 250 })
}

function draw() {
  if(backgroundImg)
  background(215, 236, 239);
  textSize(35)
    noStroke()
    fill("black")
    text("Score:"+score,width-250,50)
  Engine.update(engine);
  rectMode(CENTER);
  ground.display();
  box1.display("red");
  box1.score()
  box2.display("red");
 box2.score()
  box3.display("red", "pink");
 box3.score()
  box4.display("red", "pink");
 box4.score()
  box5.display("red", "pink");
box5.score()
  box6.display("indigo", "pink");
 box6.score()
  box7.display("indigo", "pink");
box7.score()
  box8.display("indigo", "pink");
 box8.score()
  box9.display("indigo", "pink");
  box9.score()
  box10.display("green", "pink");
 box10.score()
  box11.display("green", "pink");
box11.score()
  box12.display("green", "pink");
  box12.score()
  box13.display("orange", "pink");
box13.score()
  box14.display("orange", "pink");
  box14.score()
  box15.display("saffron", "pink");
 box15.score()
  py1.display(rgb(229, 116, 117), "cyan")
  py2.display(rgb(229, 116, 117), "cyan")
  py3.display(rgb(229, 116, 117), "cyan")
  py4.display(rgb(110, 71, 102), "cyan")
  py5.display(rgb(110, 71, 102), "cyan")
  py6.display(rgb(251, 189, 76), "cyan")
  sling.display("black");
  stand1.display();
  stand2.display();
  ball.display("darkblue", "white");

  textSize(27);
  fill(0);
  text("DRAG AND RELEASE THE BALL TO DESTROY THE BOXES", 150, 385)
  
  fill(242, 19, 190);
  textSize(20);
  text("PRESS SPACE TO GET ANOTHER CHANCE",20,20)
}

function mouseDragged() {
  Matter.Body.setPosition(ball.body, { x: mouseX, y: mouseY })
}


function mouseReleased() {
  sling.fly();
}

function keyPressed() {
  if (keyCode === 32) {
    sling.attach(ball.body);
  }
}
async function getbackgroundImg(){
  var response = await fetch ("http://worldclockapi.com/api/json/est/now")
  var responseType = await response.json()
  console.log(responseType)
  var dt = responseType.datetime
  console.log(dt)
  var hour = dt.slice(11,13)
console.log(hour)
if(hour>=6 && hour<= 18){
  bg = "sprites/bg2.jpg"
}
else{
  bg = "sprites/bg.png"
}
backgroundImg = loadImage(bg)
}
