// INIT
const TERMINATE = "stop";
const fruits = {};

let key;
let value;

// ACCEPT INPUT
do {
  key = prompt("Enter fruit");
  value = prompt("Enter Quantity");

  if (value == 1) {
    fruits[key] = value;
  } else if (value > 1) {
    fruits[`${key}s`] = value;
  }
  console.log(key, value);
  console.log(key != TERMINATE && value != TERMINATE);
} while (key != TERMINATE && value != TERMINATE);
// UPDATE FRUITS
// fruits.key = value // {key:10}

// fruits["apple"] = value; // {apple : 10}

console.log(fruits);
