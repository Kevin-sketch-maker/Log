const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var pig1, pig2
var Ground1
var Stand1, Stand2
var box, box2, box3, box4, box5
var log1, log2
function setup(){
    var canvas = createCanvas(1600,1600);
    engine = Engine.create();
    world = engine.world;
    Ground1 = new Ground(300,270,800,10)
    pig1 = new Pig(600,247,40,40)
    pig2 = new Pig(600,208,40,40)
    Stand1 = new Stand(600,230,120,10)
    Stand2 = new Stand(600,184,120,10)
    box = new Box(560,247,35,35)
    box2 = new Box(640,247,35,35)
    box3 = new Box(560,208,35,35)
    box4 = new Box(640,208,35,35)
    box5 = new Box(600,165,35,35)
    log1 = new Log(510,-290,10,70,PI/4)
    log2 = new Log(200,200,10,70,PI/4)
    bird = new Bird(100,200,35,35)
    
}

function draw(){
    background(0);
    Engine.update(engine);
Ground1.display();
pig1.display();
pig2.display();
Stand1.display();
Stand2.display();
box.display();
box2.display();
box3.display();
box4.display();
box5.display();
log1.display();
log2.display();
bird.display();
}