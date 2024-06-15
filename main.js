// Variables
let operator = '';
let currentNumber = '';
let previousNumber = '';

const operate = (operator, previousNumber, currentNumber) => {
    previousNumber = Number(previousNumber);
    currentNumber = Number(currentNumber);
    if (operator == '+') {
        return (previousNumber += currentNumber);
    } else if(operator == "-") {
        return Math.round((previousNumber -= currentNumber));
    } else if(operator == "x") {
        return Math.ceil((previousNumber *= currentNumber));
    } else {
        return Math.round((previousNumber /= currentNumber) * 100000) / 100000;
    }
};

// Populate Display
const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");
const decimal = document.querySelector(".decimal");
const equals = document.querySelector(".equals");

const backspace = document.querySelector(".backspace");
const display = document.querySelector(".display");
const clear = document.querySelector(".clear");

numbers.forEach((number) => {
    number.addEventListener("click", (e) => {
        displayNumber(e.target.textContent);
        display.textContent = currentNumber;
    })
})

operators.forEach((op) => {
    op.addEventListener("click", (e) => {
        if (currentNumber != '' && previousNumber != '') {
            display.textContent = operate(operator, previousNumber, currentNumber)
        }
        operator = e.target.textContent;
        previousNumber = display.textContent;
        currentNumber = '';
        display.textContent = previousNumber;
    })
})

equals.addEventListener("click", () => {
    display.textContent = operate(operator, previousNumber, currentNumber)
    
})

const displayNumber = (num) => {
    if (currentNumber.length < 11) {
        currentNumber += num;
    }
}

clear.addEventListener("click", () => {
    display.textContent = '';
    currentNumber = '';
    previousNumber = '';
    operator = '';
})

decimal.addEventListener("click", () => {
    currentNumber += '.'
    display.textContent = currentNumber
})

backspace.addEventListener("click", () => {
    currentNumber = currentNumber.slice(0, -1);
    display.textContent = currentNumber;
})

const dialog = document.querySelector("dialog");
const modalClose = document.querySelector("#close");

modalClose.addEventListener("click", () => {
    dialog.remove()
})
