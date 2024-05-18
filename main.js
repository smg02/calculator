let firstOperand;
let secondOperand;
let operator;

const add = (first, second) => first + second
const subtract = (first, second) => first - second
const multiply = (first, second) => first * second
const divide = (first, second) => {
    return (second == 0) ? "Divide By Zero Error" : first / second
}

const operate = (operator, firstOperand, secondOperand) => add(firstOperand, secondOperand)

const inputOne = document.querySelector(".one").textContent = "1";
const inputTwo = document.querySelector(".two").textContent = "2";
const inputThree = document.querySelector(".three").textContent = "3";
const inputFour = document.querySelector(".four").textContent = "4";
const inputFive = document.querySelector(".five").textContent = "5";
const inputSix = document.querySelector(".six").textContent = "6";
const inputSeven = document.querySelector(".seven").textContent = "7";
const inputEight = document.querySelector(".eight").textContent = "8";
const inputNine = document.querySelector(".nine").textContent = "9";
const inputZero = document.querySelector(".zero").textContent = "0";
const inputAdd = document.querySelector(".add").textContent = "+";
const inputSubtract = document.querySelector(".subtract").textContent = "-";
const inputMultiply = document.querySelector(".multiply").textContent = "x";
const inputDivide = document.querySelector(".divide").textContent = "/";
const inputEquals = document.querySelector(".equals").textContent = "=";
const inputClear = document.querySelector(".clear").textContent = "Clear";

const displayValue = document.querySelector(".display");

const getInput = () => {
    console.log(document.class)
}