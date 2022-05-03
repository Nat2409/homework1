const express = require('express');

const greeter = require('../greeter');
const validator = require('validator');

greeter('Hello friends!');

const validateEmail = email => {
  return validator.isEmail(email);
};

console.log(
  'Is mango@mail.com a valid email?: ',
  validateEmail('mango@mail.com')
);

console.log(
  'Is Mangozedog.com a valid email?: ',
  validateEmail('Mangozedog.com')
);

const app = express();

app.get('/', (req, res) => {
  res.send('<h1>Hello World</h1>');
});

app.listen(5000, () => {
  console.log('App is running on port 5000');
});
// app.get('/', function (req, res) {
//   res.send('Hello World')
// })

// app.listen(3000)
class User {
  static hello = 'hello';
  constructor(name) {
    this._name = name;
  }

  get name() {
    return this._name;
  }
}

const mango = new User('Mango');
console.log(mango.name);
