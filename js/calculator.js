import { display } from "./domElements.js";
import { add, subtract } from "./mathOperators.js";

let currentInput = "";
let operator = "";
let previousInput = "";
let resultDisplayed = false;

export function clearDisplay() {
  display.textContent = "0";
  currentInput = "";
  operator = "";
  previousInput = "";
  resultDisplayed = false;
}

export function updateDisplay(value) {
  if (resultDisplayed) {
    currentInput = "";
    display.textContent = "";
    resultDisplayed = false;
  }

  if (display.textContent === "0" && value !== "0") {
    display.textContent = value;
  } else {
    display.textContent += value;
  }
  currentInput += value;
}

export function setOperator(op) {
  if (currentInput === "" && previousInput === "") return;
  if (currentInput !== "" && previousInput !== "") {
    calculate();
  }
  operator = op;
  previousInput = currentInput || display.textContent;
  currentInput = "";
  display.textContent = `${previousInput} ${op} `;
}

export function calculate() {
  if (operator && previousInput !== "" && currentInput !== "") {
    let result;
    const num1 = parseFloat(previousInput);
    const num2 = parseFloat(currentInput);

    switch (operator) {
      case "+":
        result = add(num1, num2);
        break;
      case "-":
        result = subtract(num1, num2);
        break;
    }

    display.textContent = result;
    previousInput = result.toString();
    currentInput = "";
    operator = "";
    resultDisplayed = true;
  }
}
