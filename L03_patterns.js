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
    fill(colorValue%255);                              //loop                         instead of circle(75, 200, 100);
    circle(spacing + i*spacing, 200, 40);
    // colorValue +=1;                           //idk to be honest                        circle(225, 200, 100);
  }  
                                              // continues                              circle(375, 200, 100);
                                                        //                              circle -----------
    // Recap 1: Repeating Circles       

  // Task 1: Colour Gradient

  // Task 2: Colour Loop

  // Task 3: Row of Circles

  // Task 4: Grid of Circles
}