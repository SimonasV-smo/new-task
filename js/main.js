import { buttons } from "./domElements.js";
import {
  calculate,
  clearDisplay,
  updateDisplay,
  setOperator,
} from "./calculator.js";

buttons.forEach((button) => {
  const value = button.textContent;

  if (button.classList.contains("operator")) {
    button.addEventListener("click", () => setOperator(value));
  } else if (value === "C") {
    button.addEventListener("click", clearDisplay);
  } else if (value === "=") {
    button.addEventListener("click", calculate);
  } else {
    button.addEventListener("click", () => updateDisplay(value));
  }
});
