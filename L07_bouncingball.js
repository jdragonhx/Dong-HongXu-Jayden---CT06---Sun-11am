let x = 200;
let y = 200;

function setup() {
    createCanvas(400, 400);
}

function draw() {
    background(220);
    if(keyIsDown())
    circle(x, y, 50)
}