//recap

let textBox;
let textColorPicker;
let display;

function setup() {
    createCanvas(400, 400);

    textBox = createInput();
    textBox.position(50, 50);
    textBox.size(150, 30);
    textBox.input(displayText)

    textColorPicker = createColorPicker();
    textColorPicker.position(50, 100);
}

function draw() {
    background(220);
    textAlign(LEFT);
    textSize(24);
    text(display, 50, height/2);
}

function displayText() {
    display = this.value();
}