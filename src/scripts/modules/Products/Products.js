export class Products {
  #baseUrl = "https://fakestoreapi.com";
  constructor() {
    this.products = [];
  }

  getAllProducts() {
    fetch(`${this.#baseUrl}/products`)
      .then((res) => res.json())
      .then((json) => {
        this.products = json;
        console.log(this.products);
      });
  }
}
