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
            <button>Add to cart</button>
            <button data-productId="${product.id}" class="btn_delete">Delete</button>
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
  getDataAndDisplayInBtn() {
    // 1. Get value input by id
    const count = document.querySelector("#input_count").value;
    // 2. Show in Btn
    document.querySelector("#count").innerHTML = count;
    return count;
  }
  async getProductsByCount(count) {
    return await fetch(`${this.#baseUrl}/products?limit=${count}`)
      .then((res) => res.json())
      .then((json) => {
        return json;
      });
  }
  deleteProductById(products, id) {
    // await fetch(`${this.#baseUrl}/products/${id}`, {
    //   method: "DELETE",
    // })
    //   .then((res) => res.json())
    //   .then((json) => console.log(json));
    return products.filter((product) => product.id != id);
  }
}
