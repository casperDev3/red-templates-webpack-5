// Watchers for scss and html files
import "./index.scss";
import "./scripts/watchers/_pages";

// import modules
import { Products } from "./scripts/modules/Products/Products";

// Bisiness logic
document.addEventListener("DOMContentLoaded", async () => {
  let products = new Products();
  products.products = await products.getAllProducts();
  products.drawAllProducts();
  console.log(
    await products.createProduct({
      title: "Test",
      description: "Test",
      price: 100,
      category: "Test",
      image: "Test",
    })
  );
});
