// Watchers for scss and html files
import "./index.scss";
import "./scripts/watchers/_pages";

// import modules
import { Products } from "./scripts/modules/Products/Products";

// Bisiness logic
document.addEventListener("DOMContentLoaded", () => {
  let products = new Products();
  products.getAllProducts();
  console.log(products);
});
