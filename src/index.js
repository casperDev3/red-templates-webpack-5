// Watchers for scss and html files
import "./index.scss";
import "./scripts/watchers/_pages";

// import modules
import { Products } from "./scripts/modules/Products/Products";

let products = new Products();

async function getProducts() {
  products.products = await products.getAllProducts();
  products.drawAllProducts();
  document.querySelector("#input_count").addEventListener("change", () => {
    products.getDataAndDisplayInBtn();
  });
}

async function getProductsByCount() {
  document
    .querySelector("#show_count_post")
    .addEventListener("submit", async (e) => {
      e.preventDefault();
      const PRODUCT_COUNT = products.getDataAndDisplayInBtn();
      products.products = await products.getProductsByCount(PRODUCT_COUNT);
      products.drawAllProducts();
    });
}

function deleteProcess() {
  document.querySelectorAll(".btn_delete").forEach((btn) => {
    btn.addEventListener("click", () => {
      const PRODUCT_ID = btn.getAttribute("data-productId");
      products.products = products.deleteProductById(
        products.products,
        PRODUCT_ID
      );
      console.log(products.products);
      products.drawAllProducts();
      // recusive
      deleteProcess();
    });
  });
}

// Bisiness logic
document.addEventListener("DOMContentLoaded", async () => {
  await getProducts();
  await getProductsByCount();
  deleteProcess();
});
