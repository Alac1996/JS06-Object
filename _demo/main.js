console.log("learn object");

//   Datatypes
// - Primitive : Boolean,Number,String etc....
// - Non-Primitive : Object

// ######################################
// ### Object Declaration
// ######################################
//  {} == stand for Object / Scope สื่งที่อยู่ในก้อนเดียวกัน สื่งที่อยู่เป็น group เดียวกัน
// { record_1 , record_2, record_3,...}
// each record => <key_name> : <value>
// <value> any Datatype
// <key_name> Datatype : string
// record === property (คุณสมบัติ,สิ่งที่มี) == key-Value pair

let user = {
  firstName: "Alac",
  lastName: "Unknown",
  age: 26,
  isAdmin: true,
  "like human": true,
};

console.log(user);

// ######################################
// ### Access, Modify, Delete
// ######################################

// Every action need <KEY_NAME> !!
// Dot Notation <obj>.<key_name> === <value>
// ถ้าไม่มี record => return undefined
// ข้อจำกัด : เข้าถึง key ที่มี  space ไม่ได้

// GET,POLL,READ
// console.log(user);
// console.log(user.firstName);
// console.log(user.firstName === "Alac");
// console.log(user.age === 36);
// console.log(user.lastName);
// console.log(user.firstName === "Payut");
// console.log(user.salary);
// console.log(user.like human) //limitation : can't access to the key that has space in-between!!

// MODIFY,UPDATE
// Syntax : <obj>.<key_name> = newValue

// Syntax : <obj>.<old_name> = newValue
user.firstName = "Kittithat";
user.age = 22;
user.age += 2;
user.age++;
console.log(user.age);

// ADD
// Syntax : <obj>.<new_key> = newValue
user.address = "bangkok";
console.log(user);

// DELETE
// Syntax : delete <obj>.<key_name>
delete user.isAdmin;
console.log(user);

// ######################################
// ### NESTED Object
// ######################################

const employee = {
  fullName: "John Snow",
  salary: 500_000,
  address: {
    district: "Phaya Thai",
    province: "Bangkok",
    country: "Thailand",
  },
};
console.log(user.address);
console.log(employee.salary);
console.log(employee.address.province);
console.log(employee.address.district);
console.log(employee.address.village); // can't access to the key address (value:villa) => return !!undefined!!

employee.address.province = "Nonthaburian";
delete employee.address.country;

// Dot ใช้กับ Object เท่านั้น!!
// ห้ามมมมมมมมมมมมมมมมมม ใช้กับ undefinied <undefined>.<key>
// วิธีแก้ optional chaining  =>  <undefined>?.<key>

console.log(employee.addr); // return => undefined
// console.log(employee.addr.province); // undefined.province return => Error!!  # . only apply with Object, which on this line addr is an undefined, not an object, # ans. is error!!
console.log(employee.addr?.province); // ? use for checking wether addr can use along with . or not if not return !! undefined !!
console.log(employee.address?.province);
console.log(employee.address?.village); // undefined //value village does not exist! in employee

// ######################################
// ### 4. Check key ?
// ######################################

const product = {
  id: 227,
  name: "IPhone",
  price: 50_000,
  // discount : 0.05,
  "is mobile": true,
};

console.log(product.discount); //undefined

// IN Operator
// Syntax: <key_name_string> in <obj>

// 'name' in product // true,false
console.log("name" in product);
console.log("discount" in product);

// method hasOwnProperty
// Syntax : <obj>.hasOwnProperty(<key_name>) => BOOL
console.log(product.hasOwnProperty("name"));
console.log(product.hasOwnProperty("discount"));

// ######################################
// ### 5. Bracket Notation []
// ######################################

// Syntax : <obj>[ "<key_name_string>" ]
// *** 1 ใช้ bracket เมื่อไหร่ ชื่อ key ข้างในต้องเป็น string
// **** 2 ถ้าไม่ใช่ string ต้องเป็นตัวแปรที่เก็บ string // Computed key
// Access key-value ผ่านชื่อตัวแปรได้
console.log(product.id);
console.log(product["id"]);

// console.log(product.is mobile) crash
console.log(product["is mobile"]);

product["name"] = "Iphone-15";
console.log(product);

let aaaaa = "name";

console.log(product["name"]);
console.log(product[aaaaa]);
console.log(product.aaaaa); // product.aaaaa === product['aaaaa'] === undefined

// #############Lab 6.1.4
// ##############
let username = prompt("username"); // Alac
let age = prompt("age"); // 26

// let user = {
//   username: username, //username : 'Alac'
//   email: email, // alacarno@gmail.com
// };
// property shorthand
let user = {
  username,
  age,
};
/*
    {
        username: <value in username variable>,
        age : <value in age variable>
    }
*/
// short-hand if key-value has the same name
// console.log(user);

// let username = 'Codecamp';
// let age = 15;
// let user = {username, age};

// console.log(user);
