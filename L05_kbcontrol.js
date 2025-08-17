// write your codes here
// let shapeColor ='blue';
// let circleSize =5;

// function setup(){
//     createCanvas(800,800);
//     background(220);
//     noStroke();
// }

// function mousePressed(){
//     shapeColor= color(random(255), random(255),random(255))
//     circleSize =5;
// }


// function mouseDragged(){
//     fill(shapeColor);
//     ellipse(mouseX,mouseY, circleSize,circleSize);
//     circleSize += 10;

// }
// function mouseReleased() {
//     circleSize = 5;
// }

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

let rectSize =50;

function setup(){
    createCanvas(400,400);
}

function draw(){
    background(220);

    let centerX = width/2;
    let centerY = height/2;


    let topLeftX = centerX -rectSize/2
    let topLeftY = centerY -rectSize/2



    rect(topLeftX , topLeftY , rectSize,rectSize)
}