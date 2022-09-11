// function expression
const sayHello = (greet) => {
  console.log(`${greet}!`);
};

const sayName = (name) => {
  console.log(`Nama saya ${name}`);
};

sayName("Leia");

/* output
Nama saya Leia
 */

const hello = () => {
  console.log("Selamat pagi semuanya!");
};

hello();

/* output
Selamat pagi semuanya!
 */

const sayNameOneLine = (name) => console.log(`Nama saya ${name}`);
sayName("Leia");

const sayHelloOneLine = () => console.log("Selamat pagi semuanya!");
sayHelloOneLine();

/* output
Nama saya Leia
Selamat pagi semuanya!
 */

const multiply = (a, b) => a * b;
console.log(multiply(3, 4));

/* output
12
 */
