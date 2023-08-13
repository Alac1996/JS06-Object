// function multiplyNumeric(obj, num) {
//   multi = 0;
//   for (let key in obj) {
//     multi += obj*num;
//     if()
//   }
// }

let menu01 = {
  width: 200,
  height: 300,
  title: "My menu",
};

let menu02 = {
  width: 500,
  height: 800,
  title: "My menu",
};

const multiplyNumeric = (object, num) => {
  for (let key in object) {
    // console.log(key);
    let value = object[key];
    if (typeof value === "number") {
      // console.log(value, num);
      // update value
      object[key] = object[key] * num;
      // menu['width'] = 200*3
      // menu['height']= 300*3
    }
  }
};

multiplyNumeric(menu01, 3);
console.log(menu0);
multiplyNumeric(menu02, 3);
console.log(menu02);
