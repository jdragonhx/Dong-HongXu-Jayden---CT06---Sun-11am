// Draw Shapes (draw a square in the middle of the canvas)

function setup() {
    createCanvas(600, 400);
    background(220); //background(r, g, b)
}

// function draw() {
//     for (let i=0; i<5; i++) {
//         fill(0, i*50, 0)
//         circle(50+ i*50, 50 + i*50, 50)
//     }
//     fill(shapeColor)
//     circle(width/2, height/2, 100);
// }

// function draw(){
//     rect(300,200,200,200);

// }

// Draw 5 circle horizontally with green gradiant

function draw() {
    for (let i=0; i<5; i++) {
        fill(0, i*50, 0)
        circle(50+ i*50, 50 + i*50, 50)
    }
    fill(shapeColor)
    circle(width/2, height/2, 100);
}

