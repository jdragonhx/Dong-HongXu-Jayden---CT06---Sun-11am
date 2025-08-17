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

function setup() { 
    createCanvas(400, 400);
    background(220);
    noStroke();

}



function keyPressed() { 
    let count = floor(ramdom(5, 21));
    
    for(let i=0; i<count; i++) {
        // random postition
        let s = random (10,80);
        //random pos
        let x = random(s/2, width - s/2);
        let y = random(s/2, height - s/2);
        //random fill
        fill(random(255), random(255), random(255));
        //create circle
        circle(x, y, z, s, s)
    }
}

function keyReleased() {
    background(220);

}