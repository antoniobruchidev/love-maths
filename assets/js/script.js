// Wait for the DOM to finish loading before running the game
// Get the button elements and add event listeners to them

document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName('button');
    for (let button of buttons) {
        button.addEventListener("click", function() {
            if (this.getAttribute("data-type") === "submit") {
                checkAnswer();
            } else {
                let gameType = this.getAttribute("data-type");
                let operator;
                switch(gameType) {
                    case "addition":
                        operator = "+";
                        break;
                    case "subtract":
                        operator = "-";
                        break;
                    case "multiply":
                        operator = "*";
                        break;
                    case "division":
                        operator = "/";
                }
                runGame(operator);
            }
        })
    }
})

function runGame(operator) {
    let num1 = Math.floor(Math.random() * 25 + 1);
    let num2 = Math.floor(Math.random() * 25 + 1);
    displayQuestion(num1, num2, operator); 
}

function checkAnswer() {
    let answer = parseInt(document.getElementById("answer-box").value);
    let correctAnswer = calcolateCorrectAnswer();
    if(answer === correctAnswer) {
        alert("Hey! You got it right!!! :D")
        incrementScore();
    } else {
        alert(`Aww... You answered ${answer}, but the correct on is ${correctAnswer}`);
        incrementWrongAnswer();
    }

}

function calcolateCorrectAnswer() {
    let operand1 = parseInt(document.getElementById("operand1").innerText);
    let operand2 = parseInt(document.getElementById("operand2").innerText);
    let operator = document.getElementById("operator").innerText;
    switch(operator) {
        case "+":
            return operand1 + operand2;
        case "-":
            return operand1 - operand2;
        case "*":
            return operand1 * operand2;
        case "/":
            return Math.floor(operand1 / operand2);
    }
}

function incrementScore() {
    let score = parseInt(document.getElementById("scores").innerText);
    score++;
    document.getElementById("scores").innerText = score;
}

function incrementWrongAnswer() {
    let incorrect = parseInt(document.getElementById("incorrect").innerText);
    incorrect++;
    document.getElementById("incorrect").innerText = incorrect;
}

function displayQuestion(operand1, operand2, operator) {
    document.getElementById("operand1").textContent = operand1;
    document.getElementById("operand2").textContent = operand2;
    document.getElementById("operator").textContent = operator;
}
