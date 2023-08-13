const locker = {};
const TERMINATE = "stop";

let key;
let value;

do {
  input1 = prompt("Enter lockerName");
  input2 = prompt("Enter itemNo");
  if (input1 != TERMINATE && input2 != TERMINATE) {
    locker[input1] = input2;
  }

  //   locker[input1] = input2;
  console.log("locker", locker);
} while (input1 != TERMINATE && input2 != TERMINATE);
