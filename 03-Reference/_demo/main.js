const log = console.log;
log("Learn Ref.");

// Copied by Value
// Copied by Reference

// Primitive
let message = "hello";

// Copy by value
let word = message;
log(message);
log(word);

message = "Hi";
log(message);
log(word);

// OBject
// user เก็บ address ของ Literal Object
let user = {
  name: "John",
  age: 33,
};

// *******
// assign
let employee = user;
log(employee);

user.name = "Joe";
log(user);
log(employee);
