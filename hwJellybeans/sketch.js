var yBean;
var xBean;
var accel;
var velocity;
var mass;

var lineColorInc = 1;
var lineColor = 1;

let bean; //variable to store bean image
function preload() {
  bean = loadImage('beanbean.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER);

  yBean = 0;
  xBean = width/2;
  velocity = 0;
  mass = 100;

  accel = mass * 0.01;


}

function draw() {

  background(200, 100, 150, 200);

  makeBackground();
  makeText();

  var beanDist = dist(mouseX, mouseY, yBean, xBean);
  if(mouseIsPressed ){//&& beanDist <= 75) {
    xBean = mouseX;
    yBean = mouseY;
    image(bean, mouseX, mouseY, mass, mass);
  }
  else {
    velocity += accel;
    yBean += velocity;
  	image(bean, xBean, yBean, mass, mass);

    if (yBean > height - mass/2) {
      // cushion when hitting bottom
      velocity *= -0.6;
      yBean = height - mass/2;
    }
  }

}

function makeBackground() {
  if(lineColor == 0 || lineColor == 255) {
    lineColorInc *= -1;
  }

  lineColor += lineColorInc;
  if(lineColor%10 == 0) {stroke(lineColor);}

  for(var i = 0; i < width; i += 20) {
    line(0, i, i, height);
    //line(width-i, i, width-i, height-i)
  }
  for(var i = width; i > 0; i -= 20) {
    line(width, i, i, 0);
  }
}

function makeText() {
  textSize(30);
  textAlign(CENTER);
  fill(50);
  text("Click and drop the bean", width/2, height/2);
}
