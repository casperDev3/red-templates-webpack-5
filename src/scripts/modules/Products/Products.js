export class Products {
  #baseUrl = "https://fakestoreapi.com";
  constructor() {
    this.products = [];
  }
  async getAllProducts() {
    const prod = await fetch(`${this.#baseUrl}/products`)
      .then((res) => res.json())
      .then((json) => {
        return json;
      });
    return prod;
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
  async createProduct(product) {
    return await fetch(`${this.#baseUrl}/products`, {
      method: "POST",
      body: JSON.stringify(product),
    })
      .then((res) => res.json())
      .then((json) => {
        return json;
      });
  }
}
