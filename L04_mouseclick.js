let shapeColor = 'blue'; //initial color

function setup() {
    createCanvas(600, 600);
    background(220);

}

function draw() {
    // // for (let i=0; i<5; i++) {
    // //     fill(0, i*50, 0)
    // //     circle(50+ i*50, 50 + i*50, 50)
    // }
    fill(shapeColor)
    circle(width/2, height/2, 100);
}

function mousePressed() {
    shapeColor = 'red'
}

function mouseReleased() {
    // shapeColor = 'lime'
    shapeColor = color(random)
}