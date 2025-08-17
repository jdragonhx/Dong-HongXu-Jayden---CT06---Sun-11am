// write your codes here
let circleSize = 5
let shapeColor = 'blue'; //initial color

function setup() {
    createCanvas(800, 1000);
    background(220);
    noStroke();

function mousePressed() {
    shapeColor = color(random(255), random(255), random(255))
    circleSize = 5;
}

}

function mouseDragged() {
    fill(shapeColor);
    circle(mouseX, mouseY,circleSize, circleSize);
    circleSize += 0.5
}

function mouseReleased() {
    circleSize = 5;
}