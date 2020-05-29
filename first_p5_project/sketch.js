//IK experiments
var x=15,y=60; //i for x, j for y
var scaler=0.1;
let grid= new Array();
function setup()
{
  canvas = createCanvas(500,500);
  for(let i=0;i<y;i++)
  grid[i]=new Array();
  gridstarter(grid);

}


function draw()
{
  background(200);
  gridmaker(grid);
  style();
  griddrawer(grid);



}


function gridmaker(g)
{
  for(j=+1;j<y;j++)
  {
    for(i=0;i<x;i++)
    {
      let Y=grid[j-1][i].y+ operation(j,height,y);
      let X= operation2(i,j,height,x);
      grid[j][i]=createVector(X,Y);
    }
  }

}

function style()
{

  //noFill();
  strokeWeight(0.1)
  angleMode(DEGREES);
  noStroke()

}

function griddrawer(g)
{
  for(j=0;j<y;j++)
  {
    for(i=0;i<x;i++)
    {
      ellipse(grid[j][i].x,grid[j][i].y,5);
    }
  }

}

function operation(i,max,total) // f(x)
{
  let angle=(360/total)*i
  let cycle=int(90/angle)
  return (max/total)*abs(sin(angle))
}

function operation2(i,j,max,total) //f(x,y)
{

  return max*(i/total);
}

function operation3(i,max,total)
{
  let angle=(360/total)*i
  return 10*abs(sin(angle))
}

function gridstarter(g)
{
  for(j=0;j<y;j++)
  {
    for(i=0;i<x;i++)
    {

      grid[j][i]=createVector(0,0);
    }
  }

}

///UI Things
var sliderx = document.getElementById("x");
var slidery = document.getElementById("y");
var sliderscale = document.getElementById("scaler");

sliderx.oninput = function() {
  x = this.value;
  gridstarter(grid);
}

slidery.oninput = function() {
  y = this.value;
    gridstarter(grid);
} //fix bug here

sliderscale.oninput = function() {
  scaler = this.value/100;
}
