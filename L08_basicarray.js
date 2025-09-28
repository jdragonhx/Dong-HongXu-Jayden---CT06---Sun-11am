//Recap

// let x = 300;
// let y = 200;
// let size = 30;
// let speedX = 1;
// let shapeColor = 255;

// function setup() {
//     createCanvas(600,400)
// }

// function draw() {
//     background(220)


//     if(x<=0 || x>=width-size) {
//         speedX *=-1;
//         shapeColor = color(random(255), random(255), random(255));

//     }

//     x += speedX;
//     fill(shapeColor);
//     noStroke();
//     rect(x,y,size,size)
// }

// function keyPressed() {
// if(keyCode === UP_ARROW) {
//         speedX *= 1.2;
//         speedY *= 1.2;
// }   else if(keyCode === DOWN_ARROW) {
//         speedX *= 0.8
//         speedY *= 0.8
// }
// }

//------------------------------------------------------------------------------------------------------------------------------------------------------------

//Task 1

// function setup() {
//     createCanvas(600,400)
// }

// function draw() {
//     background(0);
//     textSize(24)
//     fill(255,255,0);
//     text("My name is usless", 50, 50)

//     textSize(16)
//     fill(255,0,0);
//     text("My age is 0", 50, 100);
//     text("My faveourite acticity is getting scolded", 50, 150)

// }

//------------------------------------------------------------------------------------------------------------------------------------------------------

//Task 2

// let favFoods = ["Pizza", "Burger", "Sushi", "Tacos", "Pasta"];

// function setup() {
//     createCanvas(600, 600)

//     fill(0);
//     textSize(24);
//     textAlign(CENTER);
// }

// function draw() {

//     background(220);

//     text("My favourtie foods are: ", width/2, 50);

//     for (let i=0; i<favFoods.length; i++) {
//         text((i+1) + "." + favFoods[i], width/2, 80 + i*50);
//     }
// }

//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//Task 3
// let favFoods = ["Pizza", "Burger", "Sushi", "Tacos", "Pasta"]; 
// let yPos; 

// function setup() {
//     createCanvas(600, 600); 

//     fill(255, 255, 0); 
//     textSize(24);
//     textAlign(CENTER); 

//     yPos = height; 
// }

// function draw() {

//     background(0); 

//     //text("My favourite foods are: ", width/2, 50); 
    

//     for (let i=0; i<favFoods.length; i++) {
//         text((i+1) + "." + favFoods[i], width/2, yPos + i*50); 
//     }

//     yPos -=1; 

// }

//----------------------------------------------------------------------------------------------------------------------------------------------------

//Task Extra

let favFoods = ["Directed By", "Robert B"]; 
let yPos; 

function setup() {
    createCanvas(600, 600); 

    fill(255, 255, 0); 
    textSize(24);
    textAlign(CENTER); 

    yPos = height; 
}

function draw() {

    background(0); 

    //text("My favourite foods are: ", width/2, 50); 
    

    for (let i=0; i<favFoods.length; i++) {
        text((i) + favFoods[i], width/2, yPos + i*50); 
    }

    yPos -=1; 

}