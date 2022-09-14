import { coffeeStock as stock, isCoffeeMachineReady } from "./state.js";

console.log(stock);
console.log(isCoffeeMachineReady);

/* output
{ arabica: 100, robusta: 150, liberica: 200 }
true
*/

const makeCoffee = (type, miligrams) => {
  if (stock[type] >= miligrams) {
    console.log("Kopi berhasil dibuat!");
  } else {
    console.log("Biji kopi habis!");
  }
};

makeCoffee("robusta", 80);
