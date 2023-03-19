// Watchers for scss and html files
import "./index.scss";
import "./scripts/watchers/_pages";

// Import modules
import { Product, Apple, Potato } from "./scripts/modules/farm/Products";
// Import methods

// Bisiness logic
document.addEventListener("DOMContentLoaded", () => {
  let potato = new Potato("Бубльба", 100, "40-денка");
  console.log(potato.getPriceWithDiscount());
});
