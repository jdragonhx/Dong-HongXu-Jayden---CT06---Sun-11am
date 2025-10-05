//recap

function setup() {
    createCanvas(400, 400)
    textAlign(CENTER, CENTER);
}

function draw() {
    background(220)

    let s = nf(second(),2)

    text(s, width)
}

