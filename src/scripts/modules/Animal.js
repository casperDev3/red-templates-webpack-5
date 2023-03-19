export class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a noise.`);
  }
}

export class Dog extends Animal {
  constructor(name) {
    super(name);
  }

  speak() {
    console.log(`${this.name} makes wuff.`);
  }
}

export class Cat extends Animal {
  constructor(name) {
    super(name);
  }
  speak() {
    console.log(`${this.name} makes meow.`);
  }
}
