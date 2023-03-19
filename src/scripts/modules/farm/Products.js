export class Product {
  // private properties
  #discountQuantity = 0.1;
  // public properties
  constructor(name, price) {
    this.name = name;
    this.price = price;
    this.priceWithDiscount = this.price - this.#calculateDiscount();
  }
  // private methods
  #calculateDiscount() {
    return this.price * this.#discountQuantity;
  }
  // public methods
  getPriceWithDiscount() {
    let discount = this.price * this.#discountQuantity;
    return this.price - discount;
  }
  // setter
  set discontQuantity(value) {
    this.#discountQuantity = value;
  }
}

export class Apple extends Product {
  constructor(name, price, sort) {
    super(name, price);
    this.sort = sort;
    this.priceWithDiscount = this.getPriceWithDiscount();
  }
}

export class Potato extends Product {
  #discountWinter = 0.2;
  #discountSpring = 0.34;
  #discountSummer = 0.05;
  #discountAutumn = 0.3;
  constructor(name, price, sort) {
    super(name, price);
    this.sort = sort;
    this.priceWithDiscount = this.getPriceWithDiscount();
  }
  getPriceWithDiscount() {
    const SEASON = this.#getSeason();
    const DISCOUNT = this.#getDicountBySeason(SEASON);
    return this.price - this.price * DISCOUNT;
  }
  //private methods
  #getDicountBySeason(SEASON) {
    switch (SEASON) {
      case "Winter":
        return this.#discountWinter;
      case "Spring":
        return this.#discountSpring;
      case "Summer":
        return this.#discountSummer;
      case "Autumn":
        return this.#discountAutumn;
      default:
        return 0;
    }
  }

  #getSeason() {
    let month = new Date().toLocaleString("en", { month: "long" });
    // switch (month) {
    //   case "December":
    //   case "January":
    //   case "February":
    //     return "winter";
    //   case "March":
    //   case "April":
    //   case "May":
    //     return "spring";
    //   case "June":
    //   case "July":
    //   case "August":
    //     return "summer";
    //   case "September":
    //   case "October":
    //   case "November":
    //     return "autumn";
    //   default:
    //     return "winter";
    // }
    if (month === "December" || month === "January" || month === "February") {
      return "Winter";
    } else if (month === "March" || month === "April" || month === "May") {
      return "Spring";
    } else if (month === "June" || month === "July" || month === "August") {
      return "Summer";
    } else {
      return "Autumn";
    }
  }
}
