let words = [
    "elephant", "backpack", "keyboard", "hospital", "sunlight", "raincoat", "notebook", "shoulder", 
    "football", "bathroom", "sandwich", "airplane", "umbrella", "medicine", "chocolate", "software", 
    "pineapple", "furniture", "telephone", "lighthouse"];

let score = 0;
let randWord = "";
let textBox;
let button;
let textDis;
let message = "";
let hint = "";
let buttonS;

function setup() {
    createCanvas(600, 400)

    textBox = createInput()
    textBox.size(250, 30);
    textBox.position(width/2-textBox.width/2, 200)
    textBox.style("font-size", "24px");
    textBox.style("background-color", "lightblue");

    button = createButton('Guess')
    button.position(width/2-textBox.width/2 + textBox.width + 30, 200)
    button.mousePressed(checkGuess);
    button.style("font-size", "24px")
    button.size(100, 30);

    buttonS = createButton('Rescramble')
    buttonS.position(width/2-textBox.width/2 + textBox.width + 30, 200)
    buttonS.mousePressed(sameScramble);
    buttonS.style("font-size", "24px")
    button.size(100, 30);

    randWord = random(words)
    console.log(randWord)

//    hint = randWord[0].toUpperCase() + " " + "_ ".repeat(randWord.length-1)
}

function draw() {
    background(220)

    textAlign(CENTER, CENTER);
    textSize(24);
    text("Scramble Word Game!", width/2, 50);
    text("Attempts: " + score, width/2, 100);
    text("Scambled Word: " + randWord, width/2, 150);
    text(message, width/2, 300);
}

// function display() {
//     textDis = textBox.value();
// }

function checkGuess() {
    score++;

    let guess = textBox.value().toLowerCase();
    message = getCorrectLetters(guess, randWord)

    if(guess == randWord) {
        message = "You guessed it right! The word is " + randWord;
    } else if (guess.length !=5) {
        message = "5 Letters Only!"
    } else {
        message = "Try Again. The letters you got right is/are " + message
    }
}

function getCorrectLetters(guess, randWord) {
    let correctLetters = "";
    for(let i=0; i<randWord.length; i++) {
        if(randWord.includes(guess[i]) && !correctLetters.includes(guess[i].toUpperCase())) {
            correctLetters += guess[i].toUpperCase();
        }
    }
    return correctLetters;
}

function