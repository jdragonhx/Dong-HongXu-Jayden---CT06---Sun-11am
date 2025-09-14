// let x = 200;
// let y = 200;

// function setup() {
//     createCanvas(400, 400);
// }

// function draw() {
//     background(220);

//     //constrain within the canvas
//     x = constrain(x, 25, width-25)
//     y = constrain(y, 25, height-25)

//     if(keyIsDown(RIGHT_ARROW)) {
//         x += 2;
//     }

//     if(keyIsDown(LEFT_ARROW)) {
//         x -= 2;
//     }


//     if(keyIsDown(UP_ARROW)) {
//         y -= 2;
//     }

//     if(keyIsDown(DOWN_ARROW)) {
//         y += 2;
//     }

//     fill(0, 0, 255)

//     circle(x, y, 50)
// }

//--------------------------------------------------------------------------------------------------------------------------------------------------------------

//recap

// let staticImage;
// let soundEffect;
// let x = 200;
// let y = 200;
// let speed = 2;
// let imgwidth = 80;
// let imgheight = 80;

// function preload() {
//     staticImage = loadImage('assets/pico-a.png');
//     soundEffect = loadSound('assets/pop.mp3');
// }

// function setup() {
//     createCanvas(400, 400);
// }

// function draw() {
//     background('lightblue');

//     x = constrain(x,0, width-imgwidth);
//     y = constrain(y,0, height-imgheight);

//     if(keyIsDown(RIGHT_ARROW)) {
//         x += speed;
//     }

//     if(keyIsDown(LEFT_ARROW)) {
//         x -= speed;
//     }

//     if(keyIsDown(UP_ARROW)) {
//         y -= speed;
//     }

//     if(keyIsDown(DOWN_ARROW)) {
//         y += speed;
//     }

//     image(staticImage, x, y, imgwidth, imgheight);
// }

// function keyPressed() {
//     if(keyCode == 32) {
//         imgwidth = 40;
//         soundEffect.play();
//     }
// }

// function keyReleased() {
//     imgwidth = 80;
//     soundEffect.pause
// }

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

function setup() {
    createCanvas(600,400);
    background(220);
}

function draw() {




    noStroke();
    circle(x, y, size);
}