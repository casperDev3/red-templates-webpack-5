// Watchers for scss and html files
import "./index.scss";
import "./scripts/watchers/_pages";

// import modules
import { Products } from "./scripts/modules/Products/Products";

// Bisiness logic
async function getAllProducts(baseUrl) {
  const prod = await fetch(`${baseUrl}/products`)
    .then((res) => res.json())
    .then((json) => {
      return json;
    });
  return prod;
}
const BASE_URL = "https://fakestoreapi.com";

document.addEventListener("DOMContentLoaded", async () => {
  const prod = await getAllProducts(BASE_URL);
  let products = new Products(prod);
  products.drawAllProducts();
});
