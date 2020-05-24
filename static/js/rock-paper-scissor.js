// ROCK PAPER SCISSORS
function rpsGame(yourChoice) {
    var humanChoice = yourChoice.id;
    var botChoice = randomChoice(randomRpsInt());

    var human = document.getElementById(humanChoice).src;
    var bot = document.getElementById(botChoice).src;

    document.getElementById("rock").src = human;
    document.getElementById("scissors").src = bot;

    if (humanChoice === botChoice) {
        message("You tied!", "blue");
    }
    if ((humanChoice === "rock" && botChoice === "scissors") || (humanChoice === "scissors" && botChoice === "paper") || (humanChoice === "paper" && botChoice === "rock")) {
        message("You Won!", "green");
    }
    if ((botChoice === "rock" && humanChoice === "scissors") || (botChoice === "scissors" && humanChoice === "paper") || (botChoice === "paper" && humanChoice === "rock")) {
        message("You Lost!", "red");
    }
}


function message(str, color) {
    var img = document.getElementById("paper");
    var h1 = document.createElement("h1");
    var text = document.createTextNode(str);
    h1.appendChild(text);
    h1.setAttribute("style", "color:" + color + ";");
    h1.setAttribute("id", "message");
    return document.getElementById("rps-id").replaceChild(h1, img);
}


function randomRpsInt() {
    return Math.floor(Math.random() * 3);
}


function randomChoice(number) {
    return ["rock", "paper", "scissors"][number];
}