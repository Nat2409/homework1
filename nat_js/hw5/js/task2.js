class User {
  constructor(name, age, follovers) {
    this.name = name;
    this.age = age;
    this.follovers = follovers;
  }
  getInfo() {
    console.log(
      `User ${this.name} is ${this.age} years old and has ${this.follovers} followers`
    );
  }
}

const mango = new User('Mango', 2, 20);
console.log(mango);
mango.getInfo(); // User Mango is 2 years old and has 20 followers

const poly = new User('Poly', 3, 17);

poly.getInfo(); // User Poly is 3 years old and has 17 followers
