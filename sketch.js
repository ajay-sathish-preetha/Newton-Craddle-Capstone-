const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Mouse = Matter.Mouse;
const MouseConstraint = Matter.MouseConstraint;

var engine,world;
var pendulm1, pendulm2, pendulm3, pendulm4,  pendulm5;
var sling1, sling2, sling3, sling4, sling5;

function setup() {
   canvas = createCanvas(windowWidth / 2 , windowHeight / 1.5);
   engine = Engine.create();
   world = engine.world;

   let canvasmouse = Mouse.create(canvas.elt);
   canvasmouse.pixelRatio = pixelDensity();
   let options = {
     mouse: canvasmouse
   };
   mConstraint = MouseConstraint.create(engine,options);
   World.add(world, mConstraint);

   pendulm5 = new Pendulm(250,400,250);
   pendulm4 = new Pendulm(300,400,250);
   pendulm3 = new Pendulm(350,400,250);
   pendulm2 = new Pendulm(400,400,250);
   pendulm1 = new Pendulm(450,400,250);

   sling5 = new Sling(pendulm5.body,{x:250,y:50});
   sling4 = new Sling(pendulm4.body,{x:300,y:50});
   sling3 = new Sling(pendulm3.body,{x:350,y:50});
   sling2 = new Sling(pendulm2.body,{x:400,y:50});
   sling1 = new Sling(pendulm1.body,{x:450,y:50});

    Engine.run(engine);

}

function draw() {
  background(0,0,0);  
  Engine.update(engine);
  
  pendulm5.display();
  pendulm4.display();
  pendulm3.display();
  pendulm2.display();
  pendulm1.display();
  sling5.display();
  sling4.display();
  sling3.display();
  sling2.display();
  sling1.display();
  
}

function mouseDragged(){
  Matter.Body.setPosition(pendulm1.body,{x:mouseX,y:mouseY});
}