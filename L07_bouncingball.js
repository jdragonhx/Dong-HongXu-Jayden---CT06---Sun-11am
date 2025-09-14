let x = 200;
let y = 200;

function setup() {
    createCanvas(400, 400);
}

function draw() {
    background(220);

    //constrain within the canvas
    x = consrtrain(x, 25, width - 25)

    if(keyIsDown(RIGHT_ARROW)) {
        x += 2;
    }

    if(keyIsDown(LEFT_ARROW)) {
        x -= 2;
    }


    if(keyIsDown(UP_ARROW)) {
        y -= 2;
    }

    if(keyIsDown(DOWN_ARROW)) {
        y += 2;
    }


    circle(x, y, 50)
}