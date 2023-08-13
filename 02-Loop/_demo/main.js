const user = {
  firstName: "Codecamp",
  lastName: "software park",
  age: 15,
  //   key: "JaAEEEE",
};

// For IN : Loop through Object
// for (let <key_variable> in <obj> {})

for (let key in user) {
  console.log(key); // auto dynamics assign by JS in <string>
  // 1st : let key = "firstname"
  // 2nd : let key = "lastname"
  // 3rd : let key = 'age'

  console.log(user[key]); // need to access by bracket , computed key
  // 1st : user[key] == user['firstName] ==> Codecamp
  // 2nd : user[key] == user['lastName] ==> software park
  // 3rd : user[key] == user['age'] ==> 15

  console.log(user.key);
  //  1st : user.key == user['key'] ==> undefined
  //  2nd : user.key == user['key'] ==> undefined
  //  3rd : user.key == user['key'] ==> undefined
}

// "firstName" in user; //true
// "age" in user; // true
// "phone" in user; // false

const Alac = {
  age: 29,
};

let key = "age";

Alac[key] += 5;

let a = Alac[key];

console.log(a);

//Critical Point
// Bracket notation ใช้กับคีย์ที่เป็น string หรือ ตัวแปรที่เก็บ string
// -for ( <key> in <obj> ) Js จะ auto reassign key ใหม่ให้ทุกรอบ (string)
// -obj[key] = obj[key] + new =>  container = value + new
