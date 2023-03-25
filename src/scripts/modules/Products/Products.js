export class Products {
  constructor(array) {
    this.products = array;
  }
  drawAllProducts() {
    // 1. Get the container
    let html = "";
    // 2. Loop through the products
    this.products.forEach((product) => {
      html += `
            <div class="product">
            <h3>${product.title}</h3>
            <p>${product.description}</p>
            <p>$${product.price}</p>
            <button class="btn btn-primary">Add to cart</button>
            </div>
        `;
    });
    // 3. Draw the products
    document.querySelector("#products").innerHTML = html;
  }
}
