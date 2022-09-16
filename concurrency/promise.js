const executorFunction = (resolve, reject) => {
  const isCoffeeMakerReady = true;
  if (isCoffeeMakerReady) {
    resolve("Kopi berhasil dibuat");
  } else {
    reject("Mesin kopi tidak bisa digunakan");
  }
};

const makeCoffee = () => {
  return new Promise(executorFunction);
};
const coffeePromise = makeCoffee();
console.log(coffeePromise);

/* output
Promise { 'Kopi berhasil dibuat' }
*/

const stock = {
  coffeeBeans: 250,
  water: 1000,
};

const checkStock = () => {
  return new Promise((resolve, reject) => {
    if (stock.coffeeBeans >= 16 && stock.water >= 250) {
      resolve("Stok cukup. Bisa membuat kopi");
    } else {
      reject("Stok tidak cukup");
    }
  });
};

const handleSuccess = (resolvedValue) => {
  console.log(resolvedValue);
};

const handleFailure = (rejectionReason) => {
  console.log(rejectionReason);
};

checkStock().then(handleSuccess, handleFailure);
