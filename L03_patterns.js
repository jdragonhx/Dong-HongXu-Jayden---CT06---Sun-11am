let spacing = 50;
// let colorValue = 0;

function setup() {
  createCanvas(600, 600);
  background(220);
  }
    
function draw() {                      
  for (let i = 0; i < 11; i++) {
    //fill(i*50);   //fil(r, g, b)
    //fill(0, 0, i*spacing)
    // fill(colorValue%255);
    // if(i%2 === 0) {
    //   fill(0);
    // }  else {
    //     fill(255);
    // }                             //loop                         instead of circle(75, 200, 100);
    // circle(spacing + i*spacing, 200, 40);
    // rect(spacing + i*spacing, 250, 50, 50);
    // colorValue +=1;                           //idk to be honest                        circle(225, 200, 100);
  }  
                                              // continues                              circle(375, 200, 100);
                                                        //                              circle -----------
    // Recap 1: Repeating Circles       

  // Task 1: Colour Gradient

  // Task 2: Colour Loop

  // Task 3: Row of Circles
  let circleDiameter = 50;
  let numCircle = 5;
  let totalWidth = diameter * numCircle
  //let startX = (width - totalWidth)/2 + diameter/2
  let diameter = circleDiameter/2
  let startX =  diameter
  let hdiameter = diameter/2


  for(let i=0; i<5; i++) {
    circle(startX + i*diameter, diameter/2, diameter);

  }

  // Task 4: Grid of Circles


  // Task 5 Circle in the centre
  
// rect(0, 100, width, 400);
// circle(width/2, height/2, 100);



}