var box;

function setup() 
{
  createCanvas(400, 400);
  box = new Box(100,200,120,120,2);

  box1= new Box(0,20,100,100,2);
}

function draw() 
{
  background(220);
 box.show();
  box.move();

  box1.show();
  box1.move();
}




