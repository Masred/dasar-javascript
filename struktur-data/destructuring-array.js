const favorites = ["Seafood", "Salad", "Nugget", "Soup"];

const [firstFood, secondFood] = favorites;

console.log(firstFood);
console.log(secondFood);

/* output:
Seafood
Salad
Nugget
Soup
*/

const [, , thirdFood] = favorites;

console.log(thirdFood);

/* output:
Nugget
*/

let myFood = "Ice Cream";
let herFood = "Noodles";

[myFood, herFood] = favorites;

console.log(myFood);
console.log(herFood);

/* output:
Seafood
Salad
*/

let a = 1;
let b = 2;

console.log("Sebelum swap");
console.log("Nilai a: " + a);
console.log("Nilai b: " + b);

[a, b] = [b, a];

console.log("Setelah swap");
console.log("Nilai a: " + a);
console.log("Nilai b: " + b);

/* output
Sebelum swap
Nilai a: 1
Nilai b: 2
Setelah swap
Nilai a: 2
Nilai b: 1
*/
