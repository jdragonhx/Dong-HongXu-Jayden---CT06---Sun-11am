//recap

let interval;

function setup() {
    createCanvas(400, 400);
    textAlign(CENTER, CENTER);

    interval = setInterval(countdown, 1000);
}

function draw() {
    background(220);

    let s = nf(second(),2);
    textSize(50);
    text(s, width/2, height/2);



}

function coundown() {
    bgColor = color(random(255), random(255), random(255))
}