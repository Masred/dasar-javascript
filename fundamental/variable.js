let lastName;
lastName = "Skywalker";

console.log(lastName);

let firstName = "Luke" + "Skywalker"; // "Luke" + "Skywalker" juga merupakan expression, sehingga kode ini tidak error.
let fullName = (lastName = "Skywalker"); // (lastName = "Skywalker") merupakan expression, sehingga kode ini tidak error.

const z = 100;
console.log(z);
z = 200;
console.log(z);

/* TypeError: Assignment to constant variable. */
