let x = 200;
let y = 200;

function setup() {
    createCanvas(400, 400);
}

function draw() {
    background(220);

    if(keyIsDown(RIGHT_ARROW)) {
        x += 2;
    }

    if(keyIsDown(RIGHT_ARROW)) {
        x += 2;
    }

    circle(x, y, 50)
}