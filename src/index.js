import "./index.html";
import "./index.scss";
import { calcSumNumbers, calcSubtractNumbers } from "./modules/calc";
import { Elements } from "./modules/elements";


document.addEventListener('DOMContentLoaded', () => {
  console.log(calcSubtractNumbers(10, 5));
  console.log(calcSumNumbers(10, 5));
  const elements = new Elements();
  elements.addElement('element 1');
  elements.addElement('element 2');
  elements.addElement('element 3');
  console.log(elements);
});