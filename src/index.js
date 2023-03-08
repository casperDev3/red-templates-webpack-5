import "./index.html";
import "./index.css";

const calcSumNumbers = (a, b) => a + b;

document.addEventListener('DOMContentLoaded', () => {
  const sumNumbers = calcSumNumbers(2, 3);
  console.log(sumNumbers);
});