function init() {
  var name = "Obi Wan"; // Variabel lokal di dalam scope fungsi init

  function greet() {
    // Inner function, merupakan contoh closure
    console.log(`Halo, ${name}`); // Memanggil variabel yang dideklarasikan di parent function
  }

  greet();
}

init();

/* output
Halo, Obi Wan
 */

let myFunction = init();
myFunction();

/* output
Halo, Obi Wan
 */

let counter = 0;

let add = () => {
  return ++counter;
};

console.log(add());
console.log(add());
counter = 23;
console.log(add());

/* output
1
2
24
 */

let adds = () => {
  let counter = 0;
  return () => {
    return ++counter;
  };
};

let addCounter = adds();

console.log(addCounter());
console.log(addCounter());
console.log(addCounter());

/* output
1
2
3
 */
