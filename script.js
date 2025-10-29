// let x = 5;
// let x = 10;
// Cannot redeclare block-scoped variable 'x'
console.log(count); //undefined
var count = 42;

const person = {
  name: "Srinjay",
  age: 22
};

// Try adding a new key
person.city = "Kolkata";

console.log(person); // { name: 'Srinjay', age: 22, city: 'Kolkata' }
//Why it works:

// const means the variable reference cannot change.

// But the contents (like keys/values inside the object) can change.

// So you can: Add new keys, Modify existing values, Delete keys but you cannot reassign the whole object.

console.log(lala) //Uncaught ReferenceError: lala is not at script.js:24:13

// A Symbol is a unique and immutable (can’t be changed) primitive value introduced in ES6 (ES2015).
// You use it when you need a property that’s guaranteed to be unique, even if it has the same description.
// They create hidden properties (not enumerable) and they help avoid naming collisions in large or shared codebases.

const id1 = Symbol("id");
const id2 = Symbol("id");

console.log(id1 === id2); // false
// Each Symbol is unique, even if they have the same description.

//Use case of symbol :
const user7 = {
  name: "Srinjay",
  age: 22
};

const id = Symbol("id");
user7[id] = 101;

console.log(user7); // { name: 'Srinjay', age: 22, [Symbol(id)]: 101 }

// The [Symbol(id)] key won’t accidentally clash with another property name.
// It’s also not shown in normal for...in loops or Object.keys().

// BigInt is a special numeric type in JavaScript that lets you work with very large integers — numbers too big for the regular Number type to handle safely.

// In JS, normal numbers (type number) are 64-bit floating-point, which means they can safely represent integers only up to:
Number.MAX_SAFE_INTEGER === 9007199254740991 // (≈ 9 quadrillion)
// Beyond this, you can run into precision issues.
console.log(9007199254740991 + 1); // 9007199254740992 ✅
console.log(9007199254740991 + 2); // 9007199254740992 ❌ (wrong!)

// Using the 'n' suffix
const big1 = 123456789012345678901234567890n;

// Or using the constructor
const big2 = BigInt("123456789012345678901234567890");

// Using bigInt we can do similar math expressions like we do with normal numbers:
const a = 10n;
const b = 20n;
console.log(a + b); // 30n
console.log(a * b); // 200n

// Important Rules :
// 1. You can’t mix BigInt and Number types directly
const c = 5n;
const d = 2;
console.log(c + d); // ❌ TypeError
console.log(c + BigInt(d)); // ✅ 7n

// 2. BigInt doesn’t work with some Math methods
console.log(Math.sqrt(16n)); // ❌ TypeError

// 3. BigInt can’t have decimal places 
//const bigDecimal = 10.5n; // ❌ SyntaxError

// There are two categories of data types: 
// Primitive types – stored directly.( so if we copy a to b, b gets its own copy of the value of a and changes to b don’t affect a.)
// Reference types – stored as memory references.( so if we copy an object a to b, both a and b point to the same object in memory. Changes to b will affect a, and vice versa.)

// 💡 What is Dynamic Typing?
// Dynamic typing means that in JavaScript, the type of a variable is determined at runtime, not when you write the code. You don’t have to (and can’t) declare what type a variable will hold — JavaScript figures it out on the fly.

let x = 10;       // x is a Number
x = "Hello";      // now x is a String
x = true;         // now x is a Boolean

// ✅ Advantages:
// Very flexible and fast to code.
// Great for beginners and quick prototyping.
// ❌ Disadvantages:
// Can cause unexpected bugs (type confusion).
// Harder to catch errors before running the program.

// 💡 What is Type Coercion?
// Type coercion means JavaScript automatically converts one data type to another when needed. It usually happens when you perform operations on values of different types.
console.log("5" + 2);  // "52"
console.log("5" - 2);  // 3
console.log("5" * "2"); // 10

if ("Hello") console.log("Runs!"); // ✅ because non-empty strings are true
if (0) console.log("Doesn't run"); // ❌ because 0 is false
// Truthy values: non-empty strings, non-zero numbers, objects, arrays.
// Falsy values: "", 0, null, undefined, NaN, false document.all

console.log(5 == "5");   // true  → "5" converted to number
console.log(5 === "5");  // false → no coercion (strict check)
// Always prefer === and !== to avoid unexpected type coercion.

// ⚠️ Weird (but classic) examples:
console.log(true + false);     // 1  (true → 1, false → 0 )
console.log("5" - "2");        // 3 ("5" and "2" converted to numbers because of - operator as - can only subtract numbers)
console.log("5" + "2");        // "52" (both are strings, so + concatenates)
console.log(1 + "2" + 3);      // "123" (1 + "2" → "12", then "12" + 3 → "123")
console.log(1 + 2 + "3");      // "33" (1 + 2 → 3, then 3 + "3" → "33")
console.log("10" - "4" - "3" - 2 + "5"); // "15" ("10"-"4"→6, 6-"3"→3, 3-2→1, 1+"5"→"15")
console.log([] == 0);          // true (empty array → "" → 0)
console.log(null == undefined); // true (special rule)
console.log([] + []);          // "" (empty array to string)
console.log([] + {});          // "[object Object]"
console.log({} + []);          // 0
console.log({} + {});          // "[object Object][object Object]"

// These examples highlight how type coercion can lead to unexpected results, so be cautious and use strict equality checks when possible.

console.log(null + 1);      // 1 (null → 0)
console.log("5" + 3);     // "53" ("5" is string, so + concatenates)
console.log("5" - 3);    // 2 ("5" converted to number)
console.log(true + false);  // 1 (true → 1, false → 0)

//🧠  Why typeof NaN(Not A Number) is itself a number?
// NaN means “an invalid number result,” but it’s still stored as a number type — that’s why
// typeof NaN === 'number' → ✅ true.

// 🔧 What are Operators?
// Operators are special symbols or keywords in JavaScript used to perform operations on values(operands). They can manipulate data, perform calculations, compare values, and more.
let e = 10, f = 3;
console.log(e + f);    // 13
console.log(e % f);    // 1
console.log(2 ** 3);   // 8 [exponentiation (power)]

// 🌀 Unary Operators
// Used on a single operand.

//--      // decrement
// +       // tries to convert to number
// -       // negates
// ++      // increment
// --      // decrement
// typeof  // returns data type

let g = "5";
console.log(+g);   // 5 (converted to number)

// !!value is a quick trick to convert anything into a boolean

// 🔁 Early Return Pattern
// Used in functions to exit early if some condition fails.
function checkAge(age) {
    if (age < 18) return "Denied";
    return "Allowed";
}
// This avoids deep nesting and makes logic cleaner.

// ⛔ break and continue
// break : Exit loop completely
// continue : Skip current iteration and move to next

for (let i = 1; i <= 5; i++) {
    if (i === 3) continue;  // Skip 3
    console.log(i);        // 1, 2, 4, 5
}

for (let i = 1; i <= 5; i++) {
    if (i === 3) break;  // Exit loop at 3
    console.log(i);     // 1, 2
}

// 🌀 for-of  Loop – Arrays & Strings
// Works on anything iterable (arrays, strings)
const array = [10, 20, 30];
for (const value of array) {
    console.log(value); // 10, 20, 30
}

for (let char of "Sheryians") {
console.log(char);
}

// 🧱 forEach – Arrays
// Cleaner than for for arrays, but you can’t break/return
let nums = [10, 20, 30];
nums.forEach((num) => {
console.log(num);
});
// 10, 20, 30

// 🌀 for-in Loop – Objects
// Iterates over object keys
const obj = {a: 1, b: 2, c: 3};
for (let key in obj) {
console.log(key, obj[key]);
// a 1
// b 2
// c 3
}

// for-in is for objects, not arrays (may cause issues with unexpected keys)
// forEach can't use break or continue
// while and do-while work best when number of iterations is unknown
// Use the right loop for the job:
// for = best for numbers/indexes
// for-of = for array values
// for-in = for object keys
// while = for unpredictable conditions

// ️Function Declarations
function greet1() {
console.log("Welcome to Sheryians!");
}
greet1();

function greet(name) {
console.log("Hello " + name);
}
greet("Harsh");
//name is a parameter and "Harsh" is the argument you pass

// 🧰 Function Expressions
// Functions stored in variables
// Cannot be hoisted (you can’t call them before they’re defined)

// Function Expression
sayHello(); // ❌ Error: Cannot access 'sayHello' before initialization

const sayHello = function() {
  console.log("Hi");
};

// 🏹 Arrow Functions
// Shorter syntax, lexically binds 'this'
const add2 = (a, b) => a + b;
console.log(add2(2, 3)); // 5

// ⚠️ The this Difference (Most Important Part)

// Arrow functions don’t have their own this.
// They use the this value from their surrounding scope.
const user5 = {
  name: "Srinjay",
  greet3: function() {
    setTimeout(function() {
      console.log("Hi " + this.name); // ❌ undefined (normal function)
    }, 1000);
  }
};
user5.greet3();
// But using arrow functions, it will work as expected:
const user2 = {
  name: "Srinjay",
  greet4: function() {
    setTimeout(() => {
      console.log("Hi " + this.name); // ✅ "Hi Srinjay"
    }, 1000);
  }
};
user2.greet4();

// 🧩 Default Parameters

// Default parameters let you set a default value for a function parameter, which is used if no argument (or undefined) is passed.
function greet5(name = "Guest") {
  console.log("Hello, " + name + "!");
}

greet5("Srinjay"); // Hello, Srinjay!
greet5();           // Hello, Guest!

// 🧩 2️⃣ Rest Operator (... in parameters)

// The rest operator collects all remaining arguments into an array. It’s used in function parameters.
function sum(...numbers) {
  return numbers.reduce((total, n) => total + n, 0);
}
// numbers.reduce((total, n) => total + n, 0) ka matlab:
// - Ye array ke sabhi numbers ko ek-ek karke jodta hai.
// - reduce ek method hai jo array ke sabhi item ko ghata-ghata ke ek hi value bana deta hai.
// - (total, n) => total + n:
// - total – ab tak ka jod.
// - n – abhi wala number.
// - Har step mein dono ko jodta jaata hai.
// - 0 – jod shuru karne ka pehla number (initial value).
console.log(sum(1, 2, 3));       // 6
console.log(sum(10, 20, 30, 40)); // 100
// Here, ...numbers gathers all arguments into an array called numbers.

//Another exxample:
function display(a, b, ...rest) {
  console.log(a);     // first argument
  console.log(b);     // second argument
  console.log(rest);  // array of the rest
}

display(1, 2, 3, 4, 5);
// a = 1
// b = 2
// rest = [3, 4, 5]

// 🧩 3️⃣ Spread Operator (... in arguments)
// The spread operator expands an array into individual elements. It’s used in function calls and array literals.
const numsArray = [1, 2, 3];
console.log(Math.max(...numsArray)); // 3
// 🔍 Breakdown:
// - numbers = [5, 10, 15] → ek array hai jismein 3 number hain.
// - ...numbers → ye spread operator hai. Array ke andar ke sabhi number ko bahar nikaal deta hai.
// - Matlab: Math.max(...numbers) ban gaya Math.max(5, 10, 15)
// - Math.max() → ye function sabhi diye gaye number mein se sabse bada dhoondta hai.
// - console.log(...) → output screen pe dikhata hai.

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6]; 
const combined = [...arr1, ...arr2];
console.log(combined); // [1, 2, 3, 4, 5, 6]
// Here, ...arr1 and ...arr2 spread the elements of both arrays into a new combined array.

const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3 };

const merged = { ...obj1, ...obj2 };
console.log(merged); // { a: 1, b: 2, c: 3 }
// Here, ...obj1 and ...obj2 spread the properties of both objects into a new merged object.

// ✅ Mnemonic:
// Rest → gather and Spread → scatter

// 💡 What is an Early Return?
// 👉 You exit a function as soon as a certain condition is met, instead of nesting multiple layers of if statements.

// 🧠 Example — Without Early Return (nested, messy)
function login(user4) {
  if (user4) {
    if (user4.isActive) {
      console.log("Welcome back!");
    } else {
      console.log("Please activate your account.");
    }
  } else {
    console.log("User not found.");
  }
}
// ✅ With Early Returns (clean, flat)
function login(user6) {
  if (!user6) {
    console.log("User not found.");
    return; // 🧠 exit early
  }

  if (!user6.isActive) {
    console.log("Please activate your account.");
    return; // 🧠 exit early
  }

  console.log("Welcome back!");
}
// 🧠 Benefits of Early Returns :
// 1. Reduces nesting and indentation.
// 2. Makes the main logic clearer and more prominent.
// 3. Easier to read and maintain.
// 4. Quickly handles edge cases upfront.

// 💡 What does “First-Class Functions” mean?
// In JavaScript, functions are first-class citizens (or first-class objects).

// That means functions are treated just like any other value —
// you can: store them in variables, pass them as arguments, return them from other functions, and even assign properties to them. In other words: 🧠 Functions in JS are values — not special or limited things.
// Example 1: Storing functions in variables
const greetFunc = function(name) {
  return "Hello, " + name;
}
// 🧠 Example 2 — Pass a function as an argument
function callTwice(fn) {
  fn();
  fn();
}

function sayHello2() {
  console.log("Hello!");
}

callTwice(sayHello2); //Matlab: "Oye callTwice, jaa ke sayHello2 ko do baar bula le!"
// Hello!
// Hello!

// 🧠 Example 3 — Return a function from another function
function makeMultiplier(factor) {
  return function(x) {
    return x * factor;
  } 
}
// Ye ek factory function hai — matlab ye function doosra function banata hai.
// Tum isko bolte ho: “Bhai, mujhe ek aisa function bana ke de jo kisi bhi number ko factor se guna kare.”
const double = makeMultiplier(2);
// Tum bol rahe ho: “Bhai, ek aisa function bana de jo sab kuch 2 se multiply kare.”
// Ab double ek naya function ban gaya jo x * 2 karega.
console.log(double(5)); // 10 
const triple = makeMultiplier(3);
console.log(triple(5)); // 15

// 🧠 Example 4 — Assign properties to functions
function counter() {
  counter.count = (counter.count || 0) + 1;
  return counter.count;
} 
console.log(counter()); // 1
console.log(counter()); // 2

// Imagine karo, ek counter naam ka banda hai. Is bande ke paas ek personal diary (count property) hai, jisme wo apni counting likhta hai.
// First time counter() call hua: Ye banda apni diary check karta hai. Diary khali hai (|| 0), toh wo usme 0 + 1 = 1 likh deta hai aur 1 return karta hai.
// Second time counter() call hua: Ab wo apni diary mein dekhta hai. 1 likha hai, toh wo usme 1 + 1 = 2 likh deta hai aur 2 return karta hai.
// Moral of the story: Functions bhi objects hote hain. Iska matlab hum unhe normal objects ki tarah extra data store karne ke liye use kar sakte hain.

const arr3 = [() => console.log("A"), () => console.log("B")];
arr3[1](); // B
arr3[0](); // A
// ✅ Functions can live inside any data structure.

// 🧠 Higher-Order Functions (HOF)
// A Higher-Order Function (HOF) is any function that does one or both of the following:
// ✅ Takes another function as an argument, or✅ Returns a function as its result.

// 🧩 Example 1 — Function that takes another function as input
function greet7(name) {
  console.log("Hello, " + name + "!");
}

function processUserInput(callback) {
  const name = "Srinjay";
  callback(name); // ✅ calling the function we received and thus processUserInput is a higher-order function (it takes a function as an argument) and greet is a callback function
}

processUserInput(greet7); // Output: Hello, Srinjay!

// 🧩 Example 2 — Function that returns another function
function multiplier(factor) {
  return function(number) {
    return number * factor;
  };
}
// ✅ multiplier is a higher-order function — it returns another function and double is the returned function that “remembers” the factor (via closure).
const twice = multiplier(2);
console.log(twice(5)); // 10

// 🧩 Example 3 — Built-in Higher-Order Functions
// JavaScript arrays have many built-in HOFs: .map(), .filter(), .reduce(), .forEach(), .find(), .sort()
// These all take a function as an argument.
const numbers = [1, 2, 3, 4, 5];

const doubled = numbers.map(n => n * 2);
console.log(doubled); // [2, 4, 6, 8, 10]
// .map() is a higher-order function because it takes another function (n => n * 2) as input.

// 💡Pure vs Impure Functions 
// A pure function is a function that:
// ✅ Always returns the same output for the same input.
// ✅ Has no side effects (doesn’t modify anything outside its scope).

// An impure function is the opposite — it might depend on or change external data, or produce side effects (like console logs, DOM changes, or API calls).

// 🧩 Example — Pure Function
function add(a, b) {
  return a + b;
}

console.log(add(2, 3)); // 5
console.log(add(2, 3)); // 5 again ✅
// No side effects, always the same output for same input.
// 🧩 Example — Impure Function
let counterValue = 0;
function increment() {
  counterValue++; // modifies external variable
  return counterValue;
}
console.log(increment()); // 1
console.log(increment()); // 2 again ❌
// Modifies external state, output changes each call.

// 🧠 Example — Pure vs Impure in Arrays
// ✅ Pure (no mutation)
const arr = [1, 2, 3];

function addElementPure(array, element) {
  return [...array, element];
}

console.log(addElementPure(arr, 4)); // [1, 2, 3, 4]
console.log(arr);                    // [1, 2, 3] (unchanged)
// ❌ Impure (mutates original array)
function addElementImpure(array, element) {
  array.push(element);
  return array;
}
console.log(addElementImpure(arr, 4)); // [1, 2, 3, 4]
console.log(arr);                     // [1, 2, 3, 4] (changed)

// 💬 In short: Pure Function → Predictable, no side effects. Impure Function → Unpredictable, may change things outside itself.

// 🔐 Closures & Lexical Scope

// 🧩 1️⃣ Lexical Scoping:

// Lexical scoping means: ➡️ The scope of a variable (where it’s accessible) is determined by where you write your code, not by where it’s called from.
function outer() {
  const outerVar = "I'm from outer";

  function inner() {
    console.log(outerVar); // ✅ accessible
  }

  inner();
}

outer();
// inner() can access outerVar because it’s defined within outer()’s scope.💬 Think of it like “nested boxes” — inner functions can see out, but outer ones can’t see in.

// 🧩 2️⃣ Closures
// A closure is created when a function “remembers” the variables from its lexical scope, even after the outer function has finished executing.
function outer() {
  let count = 0; // variable in outer scope

  return function inner() {
    count++;
    console.log(count);
  };
}

const counter2 = outer(); // outer() runs once
counter2(); // 1
counter2(); // 2
counter2(); // 3
// Here, inner() forms a closure that captures the count variable from outer()’s scope. Even after outer() has finished, inner() can still access and modify count.

// 💬 In short: Lexical Scope → defines what a function can access. Closure → makes that access persist, even after the outer scope is gone.

// ⚡ IIFE – Immediately Invoked Function Expression : Used to create private scope instantly. Example :
(function () {
console.log("Runs immediately");
})();

// 🚀 Hoisting: Declarations vs Expressions 
// In JavaScript, hoisting is a behavior where variable and function declarations are moved to the top of their containing scope during the compilation phase. This means you can use functions and variables before they are declared in the code.

hello(); // works
function hello() {
console.log("Hi");
}

// But since Declarations are hoisted Expressions are not hoisted so : 

greet2(); 
const greet2 = function() {
console.log("Hello");
}; 
// Error: Cannot access 'greet2' before initialization since it is an expression and not a declaration.


//Practice Question on Rest Operator: Use rest parameter to create a function that takes any number of numeric arguments and returns their sum.

function getScore(...values) {
  return values.reduce((total, val) => total + val, 0);
}
console.log(getScore(10, 20, 30)); // 60

// Another way
function getScore(...values) {
  let sumOfAll = 0; 
  values.forEach((val) => {
    sumOfAll += val;
  } );
  return sumOfAll;
}
console.log(getScore(10, 20, 30)); // 60

//Practice Question : Pass a function as an argument to another function and execute it inside.
function ani(randomFunction){
  randomFunction();
}
ani(function() {
  console.log("Function passed as argument executed!");
});


//Practice Question : Give one real world use case of IIFE.
let shery=(function() {
  let privateCounter = 0;
  return {
    getCounter: function() {
      return privateCounter;
    },
    setCounter: function(value) {
      privateCounter = value;
    }
  };
})();
//This is how we use JS Libraries like jQuery which use IIFE to create private scope and avoid polluting global namespace.
shery.getCounter(); // 0
shery.setCounter(5);
console.log(shery.getCounter()); // 5

// Practice Question : Write a discount calculator (HOF style). Using HOF style will make the code reusable for different discount strategies.
function discountCalculator(percentage){
  return function(cp){
    return cp - (cp * (percentage / 100));
  }
}
let tenPercentDiscount = discountCalculator(10);
let twentyPercentDiscount = discountCalculator(20);
console.log(tenPercentDiscount(200)); // 180
console.log(twentyPercentDiscount(200)); // 160
// So here, discountCalculator is a higher-order function that returns a function to calculate discounted price based on the given percentage and cp (cost price). Thus it makes the code reusable for different discount strategies and cost prices.

// Practice Question : Create a closure counter function.

function createCounter(){
  let goofy =0;
  return function(){
    goofy++;
    return goofy;
  }
}
let mome=createCounter();
console.log(mome()); //1
console.log(mome()); //2
let mamon=createCounter();
console.log(mamon()); //1
console.log(mamon()); //2
// Here, createCounter is a closure that maintains its own private goofy variable for each counter instance.

// ❌ Don’t use arrow functions for object methods that use this
const user9 = {
  name3: "Srinjay",
  greet8: () => {
    console.log("Hello, " + this.name);
  }
};

user9.greet8(); // ❌ "Hello, undefined"

// The only difference between closures and higher order functions is that:
// A closure is a function that "remembers" its lexical scope even when the function is executed outside that scope.In simple words, a closure returns a function but uses a variable from the outer function even after the outer function has finished executing.
// A higher-order function is a function that either takes another function as an argument or returns a function as its result.

// 🧠 What is an Array?
// An array is like a row of boxes, where each box holds a value and has an index (0, 1, 2...).
let fruits = ["apple", "banana", "mango"];

let marks = [90, 85, 78];
console.log(marks[1]); // 85
marks[2] = 80; // Update index 2

// ⚙️ Common Array Methods

// 🧱 Modifiers (Change original array)
let ar = [1, 2, 3, 4];
ar.push(5); // Add to end

ar.pop(); // Remove last

ar.shift(); // Remove first

ar.unshift(0); // Add to start

ar.splice(1, 2); // Remove 2 items starting at index 1

//One interesting way to use splice is to replace elements in an array
ar.splice(1, 2, 8, 9); // Starting at index 1, remove 2 elements and add 8 and 9

//Another interesting way to use splice is to insert elements without removing any
ar.splice(2, 0, 6, 7); // Starting at index 2, remove 0 elements and add 6 and 7

arr.slice(1, 3); // Extracts a section of the array and returns a new 
// slice takes two arguments: the starting index (inclusive) and the ending index (exclusive). It returns a new array containing the elements from the original array within that range, without modifying the original array.

//The difference between splice and slice is that splice modifies the original array by removing or replacing elements, while slice creates a new array containing a portion of the original array without changing it.

ar.reverse(); // Reverse order in the same array

ar.sort(function(a,b){
  // return a - b; // Sorts the array in ascending order
  return b - a; // Sorts the array in descending order
}); // This returns the sorted array in place

//Remember that sort() method converts the elements into strings and then compares their sequences of UTF-16 code unit values. So, to sort numbers correctly, we provide a compare function. For strings, we can directly use sort() without a compare function.

// 🧩 Iterators (Return new value, don’t change original )

//forEach sirf tab use karna hai jab humein original array ke har element pe kuch operation karna ho but humein naya array nahi chahiye
ar.forEach((num, index) => {
  console.log(`Index ${index}: ${num}`);
});

//map sirf tab use karna hai jab humein naya array chahiye ho original array se kuch transformation karke
ar.map(num => num * 2); // Creates a new array with each number doubled

//The only difference between forEach and map is that forEach executes a provided function once for each array element without returning a new array, while map creates a new array populated with the results of calling a provided function on every element in the original array.

//filter sirf tab use karna hai jab humein naya array chahiye ho original array se kuch condition ke basis pe aur ham log yaha pe sirf true ya false return karte hain, and agar true kar rhe hai toh wo value naya array mein chali jayegi and vice versa 
ar.filter(num => num % 2 === 0); // Creates a new array with only even numbers

//reduce tab use karna hai jab humein ek single value chahiye ho original array se kuch computation karke
let ans= ar.reduce(function(accumulator, currentValue){
  return accumulator + currentValue;
}, 0); // Sums all numbers to a single value, starting from 0
//Accumulator apna value yaad rakhta hai and uska value har iteration mein update hota hai and uska initialization 0 se hota hai jo hamlog comma ke baad likhte hain

//find tab use karna hai jab humein array mein se pehli value chahiye ho jo kisi condition ko satisfy karti ho
let newObject = [
  {id: 1, name: "Srinjay"},
  {id: 2, name: "Mome"},
  {id: 3, name: "Srinjay"}
];
let foundObject = newObject.find(obj => obj.name === "Srinjay"); // Finds first object with name "Srinjay"
console.log(foundObject); // {id: 1, name: "Srinjay"} it finds the first occurrence only and not the one with id=3

//some tab use karna hai jab humein check karna ho ki array mein koi bhi value kisi condition ko satisfy karti hai ya nahi
let hasEven = ar.some(num => num % 2 === 0); // true if any number is even
//ye true return karega agar array mein koi bhi even number hoga

//every tab use karna hai jab humein check karna ho ki array mein sabhi values kisi condition ko satisfy karti hain ya nahi
let allPositive = ar.every(num => num > 0); // true if all numbers are positive
//ye true return karega agar array mein sabhi numbers positive honge

//Destructuring tab use karna hai jab humein array ke elements ko alag-alag variables mein assign karna ho
let [first, second, ,...rest] = ar;
console.log(first); // 1
console.log(second); // 2
//kyuki hamne third element ko skip kar diya hai using the comma after second isliye wo kuch print nahi karega
console.log(rest); // [4] (rest of the elements in an array)

//spread operator tab use karna hai jab humein array ke elements ko alag-alag karna ho ya phir ek array ko dusre array mein merge karna ho
let arrA = [1, 2, 3];
let arrB = [4, 5, 6];
let mergedArray = [...arrA, ...arrB];
console.log(mergedArray); // [1, 2, 3, 4, 5, 6]


// 🧩 Accessors (Return new value, don’t change original )  
let colors = ["red", "green", "blue"];
let greenIndex = colors.indexOf("green"); // 1

let hasBlue = colors.includes("blue"); // true

let joined = colors.join(", "); // "red, green, blue" 
// join() method joins all elements of an array into a string, with the specified separator (", " in this case) between each element.

let subArray = colors.slice(0, 2); // ["red", "green"]

let str = "hello";
let charArray = str.split(""); // ['h', 'e', 'l', 'l', 'o']
// split() method splits a string into an array of substrings based on a specified separator. In this case, an empty string ("") is used as the separator, which means the string will be split between each character.
console.log(charArray); // ['h', 'e', 'l', 'l', 'o']

// 🧠 What is an Object?
// An object is like a real-world object with properties (attributes) and methods (actions).
let car = {
  make: "Toyota",
  model: "Camry",
  year: 2020,
  start: function() {
    console.log("Car started");
  }
};

// 🔑 Key-Value Structure
// Keys are always strings (even if you write them as numbers or identifiers) and Values can be anything – string, number, array, object, function, etc.

// Accessing Properties
console.log(car["make"]); // "Toyota"
console.log(car.model);   // "Camry"

// Adding/Updating Properties
car.color = "blue"; // Add new property
car.year = 2021;    // Update existing property

// Deleting Properties
delete car.model; 
console.log(car.model); // undefined

// 📍 Dot vs Bracket Notation
// Use dot notation for fixed key names or Use bracket notation for dynamic or multi-word keys
let student = {
name: "Ravi",
age: 21,
isEnrolled: true
};
student["full name"] = "Ravi Kumar"; // ✅
student.course = "JavaScript"; // ✅
let aa="name";
console.log(student[aa]); // "Ravi" ✅ dynamic key access
// console.log(student.aa); // ❌ undefined, looks for key literally named "aa"

//Nesting vs deep accessing
let school = {
  name: "ABC School", 
  address: {
    street: "123 Main St",
    city: "Metropolis",
    zip: "12345"
  },
  students: [
    {name: "Alice", grade: 10}, 
    {name: "Bob", grade: 11}
  ]
};
console.log(school.address.city); // "Metropolis"
console.log(school.students[1].name); // "Bob"

//Nesting matlab hota hai ki ek object ke andar doosra object ya array hona. Deep accessing matlab hota hai ki hum us nested structure ke andar ke values ko access kar rahe hain using multiple dot or bracket notations.

//Object destructuring matlab hota hai ki hum ek object ke properties ko alag-alag variables mein extract kar rahe hain using a special syntax. Isse ye help hota hai ki hum easily object ke andar ke values ko access kar sake bina baar-baar object ka naam likhe.

let {zip, street} = school.address;
console.log(zip); // "12345"
console.log(street); // "123 Main St"

// 🔁 Looping Through Objects
// for-in loop
for (let key in car) {
  console.log(key + ": " + car[key]); //We cannot use car.key because key is a variable here
} // Logs each key-value pair

// 🧩 Common Object Methods
let person = {
  firstName: "John",
  lastName: "Doe",
  age: 30
};
let keys = Object.keys(person); // ["firstName", "lastName", "age"]
let values = Object.values(person); // ["John", "Doe", 30]
let entries = Object.entries(person); // [["firstName", "John"], ["lastName", "Doe"], ["age", 30]]

// Merging Objects
let objA = {a: 1, b: 2};
let objB = {b: 3, c: 4};
let mergedObj = Object.assign({}, objA, objB); // {a: 1, b: 3, c: 4}
// Here, Object.assign() merges objA and objB into a new object. If there are overlapping keys (like 'b'), the value from the last object (objB) is used.
let mergedObj2 = {...objA, ...objB}; // {a: 1, b: 3, c: 4}
// Here, the spread operator (...) is used to merge objA and objB into a new object. Similar to Object.assign(), if there are overlapping keys, the value from the last object is used. 

//Jab apka ek object nested object banta hai then spread operator ya Object.assign() se shallow copy banta hai, matlab sirf top-level properties hi copy hoti hain. Agar nested object ke andar changes karoge to original object pe bhi effect padega. Isliye deep cloning ke liye alag techniques use karni padti hain jaise ki JSON.parse(JSON.stringify(object)) ya libraries jaise lodash ka use karna padta hai.
// ❗ Note: JSON-based copy works only for plain data (no functions, undefined, etc.)

// Cloning Objects
let clonedObj = Object.assign({}, person); // Shallow clone using Object.assign
let clonedObj2 = {...person}; // Shallow clone using spread operator
// Both methods create a new object with the same properties as person. Changes to clonedObj or clonedObj2 won't affect the original person object.

// 🧠 What is JSON ?
// JSON (JavaScript Object Notation) is a lightweight data-interchange format that is easy for humans to read and write, and easy for machines to parse and generate. It is commonly used for transmitting data between a server and a web application as text.
// Example of JSON:
let jsonData = `{
  "name": "Alice",
  "age": 25, 
  "isStudent": false,
  "courses": ["Math", "Science"],
  "address": {
    "street": "456 Elm St",
    "city": "Gotham"
  }
}`;
// Here, jsonData is a string that represents a JSON object with various data types including strings, numbers, booleans, arrays, and nested objects.

// 🔄 Converting JSON to JavaScript Object
let jsObject = JSON.parse(jsonData);
console.log(jsObject.name); // "Alice"
console.log(jsObject.courses[0]); // "Math"
// Here, JSON.parse() converts the JSON string into a JavaScript object that we can work with in our code.

// 🔄 Converting JavaScript Object to JSON
let newJsonData = JSON.stringify(jsObject);
console.log(newJsonData);
// Here, JSON.stringify() converts the JavaScript object back into a JSON string format.

//Optional Chaining in Objects
// Optional chaining (?.) allows you to safely access nested object properties without having to check if each reference in the chain is valid. If any reference is null or undefined, the expression short-circuits and returns undefined instead of throwing an error.
let userProfile = {
  name: "Srinjay",
  address: {
    city: "Metropolis"
  }
};
console.log(userProfile.address?.city); // "Metropolis
console.log(userProfile.contact?.phone); // undefined (no error thrown)
// Here, userProfile.contact is undefined, but using optional chaining (?.) prevents an error when trying to access phone. Instead, it safely returns undefined.

//Computed properties object mein hamlog use karte hai taaki humlog dynamically kisi property ko set kar sakein.
let propName = "age";
let userProfile2 = {
  name: "Srinjay",
  [propName]: 25 // Dynamically sets the 'age' property
};
console.log(userProfile2.age); // 25

const user3 ={
    "first-name":"Srinjay",
};

let {firstName}=user3["first-name"];
console.log(firstName); //undefined aa rha hai kyuki humne galat destructuring kiya hai

//Correct way to destructure
let {"first-name":first_name}=user3;
console.log(first_name); //Srinjay aa gya ab

// Ye islie ho rha hai kyuki jab humlog destructuring karte hain to humlog variable ka naam wahi rakhte hain jo object mein key ka naam hota hai. Lekin agar key mein hyphen (-) ya space hota hai to wo valid variable name nahi hota. Isliye humlog us key ko quotes mein likhte hain aur uske baad colon (:) lagake ek valid variable name dete hain jisme humlog value ko store karna chahte hain.