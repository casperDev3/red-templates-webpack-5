// Watchers for scss and html files
import "./index.scss";
import "./scripts/watchers/_pages";

class Products {
  // properties
  #disconts = 0.22;
  constructor(title, price, image, description) {
    this.title = title;
    this.price = price;
    this.image = image;
    this.description = description;
    this.discontPrice = this.#getPriceWithDiscont();
  }
  // private method
  #getPriceWithDiscont() {
    return this.price * (1 - this.#disconts);
  }
  // getter
  get discontValue() {
    return this.#disconts;
  }
}

class Electronics extends Products {
  // currentYear = new Date().getFullYear();
  constructor(title, price, image, description, category, year) {
    super(title, price, image, description);
    this.category = category;
    this.year = year;
    // this.age = this.getAge();
  }
  // metthod
  getAge() {
    return this.currentYear - this.year;
  }
}

class Books extends Products {
  constructor(title, price, image, description, author) {
    super(title, price, image, description);
    this.author = author;
  }
}

class Clothes extends Products {
  constructor(title, price, image, description, size) {
    super(title, price, image, description);
    this.size = size;
  }
}

// mac book pro
const macBookPro = new Electronics(
  "MacBook Pro",
  2500,
  "https://www.apple.com/v/macbook-pro-13/b/images/overview/compare/macbook_pro__f2x2j2y2w2.png",
  "The best for developers",
  "laptop",
  2019
);

console.log(macBookPro);
