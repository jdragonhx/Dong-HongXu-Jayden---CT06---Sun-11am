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

}

function draw() {
    background(220);

    text(display, width/2)
}

function displayText() {
    display = this.value();
}