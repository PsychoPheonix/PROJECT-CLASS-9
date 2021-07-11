
function setup() {
  createCanvas(400,400);
}

function draw() 
{
  background('pink');
if (keyIsDown(DOWN_ARROW)){
  background('red');
}
if (keyIsDown(UP_ARROW)){
  background('green');
}
if (keyIsDown(LEFT_ARROW)){
  background('blue');
}
if (keyIsDown(RIGHT_ARROW)){
  background('purple');
}

}




