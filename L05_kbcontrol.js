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

// let rectSize =50;

// function setup(){
//     createCanvas(400,400);
// }

// function draw(){
//     background(220);

//     let centerX = width/2;
//     let centerY = height/2;


//     let topLeftX = centerX -rectSize/2
//     let topLeftY = centerY -rectSize/2



//     rect(topLeftX , topLeftY , rectSize,rectSize)
// }

// -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// function setup() { 
//     createCanvas(400, 400);
//     background(220);
//     noStroke();

// }



// function keyPressed() { 
//     let count = floor(random(5, 21));
    
//     for(let i=0; i<count; i++) {
//         // random postition
//         let s = random(10,80);
//         //random pos
//         let x = random(s/2, width - s/2);
//         let y = random(s/2, height - s/2);
//         //random fill
//         fill(random(255), random(255), random(255));
//         //create circle
//         ellipse(x, y  , s, s)
//     }
// }

// function keyReleased() {
//     background(220);

// }

// let a = 5;
// let b = "5";
// let c = 7;

// console.log(a === b);

//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// let showCircle = false;

// function setup() {
//     createCanvas(600, 600);
// }

// function draw() {
//     background(220);
//     if(showCircle) {
//         fill(random(255), random(255), random(255))
//         circle(width/2, height/2, 100);
//     }
// }

// function keyPressed() {
//     if  (key == 'c') {
//     showCircle =!  showCircle;
//     }
// }

//--------------------------------------------------------------------------------------------------------------------------------------------------------------

let showCircle = false
let showSquare = false
let showTriangle = false

function setup() {
    createCanvas(220, 200)
}

function draw() {
    background(220);
    if (showCircle) {
        circle(width / 2, height / 2, 100);
    }
}

function draw() {
    background(220);
    if (showSquare) {
        rect(width / 2 - 25, height / 2 - 25, 50, 50);
    }
}

function draw() {
    background(220);
    if (showTriangle) {
        triangle(width / 2, height / 2 - 25, width / 2 - 25, height / 2 + 25, width / 2 + 25, height / 2 +25);
    }
}

function keyPressed() {
    if (key === 'c') {
        showCircle = !showCircle; //Toggle the boolean
    }
}

function keyPressed() {
    if (key === '') {
        showCircle = !showCircle; //Toggle the boolean
    }
}

function keyPressed() {
    if (key === 'c') {
        showCircle = !showCircle; //Toggle the boolean
    }
}