const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload() {

}

function setup() {
  canvas = createCanvas(1200, 600);
  motor = Engine.create();
  mundo = motor.world;
}

function draw() {
  Engine.update(motor);
}
