let d;
console.log(typeof x);

/* output: undefined */

let x = 10;
console.log(typeof x);

/* output: number */

let y = 17.25;
console.log(typeof y);

/* output: number */

let af = 12;
let bf = 9;

console.log(af + bf);
console.log(af - bf);
console.log(af * bf);
console.log(af / bf);
console.log(af % bf);

/* output:
21
3
108
1.3333333333333333
3
*/

/* Increment dan Decrement */

let postfix = 5;
console.log(postfix++);
/* output: 5 */
console.log(postfix);
/* output: 6 */

let prefix = 5;
console.log(++prefix);
/* output: 6 */

const bigNumber = 1234567890123456789012345678901234567890n;
const myInt = 1234567890123456789012345678901234567890;

console.log(bigNumber);
console.log(myInt);

/* output
1234567890123456789012345678901234567890n
1.2345678901234568e+39
*/

console.log(5n + 2n);
console.log(5n - 2n);
console.log(5n * 2n);
console.log(5n / 2n);
console.log(5n % 2n);

/* output
7n
3n
10n
2n; Bukan 2.5n
1n
*/

let greet = "Hello";
console.log(typeof greet);

/* output: string */

const question = '"What do you think of JavaScript?" I asked';

console.log(question);

/* output: "What do you think of JavaScript?" I asked */

const answer = '"I think it\'s awesome!" he answered confidently';

console.log(answer);

let moreGreet = greet + greet;
console.log(moreGreet);

/* output: HelloHello */

const myName = "Luke";
console.log(`Hello, my name is ${myName}.`);

/* output: Hello, my name is Luke. */

let xb = true;
let yb = false;

console.log(typeof xb);
console.log(typeof yb);

/* output: 
boolean
boolean
*/

const a = 10;
const b = 12;

let isGreater = a > b;
let isLess = a < b;

console.log(isGreater);
console.log(isLess);

/* output:

let someLaterData = null;
console.log(someLaterData);

/* output:
null
*/

const id = Symbol("id");

console.log(id);

/* output
Symbol(id)
*/

const id1 = Symbol("id");
const id2 = Symbol("id");

console.log(id1 == id2);

/* output
false
*/
