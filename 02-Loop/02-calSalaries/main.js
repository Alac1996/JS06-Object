// (OBJ) => NUMBER
function isEmptyObj(object) {
  let isEmpty = true;
  for (let key in object) {
    isEmpty = false;
  }
  return isEmpty;
}

function calSalaries(object) {
  //1. Validate => แยก service
  if (isEmptyObj(object)) return 0;
  // 2.Calculate
  let sum = 0;
  for (let key in object) {
    // obj.key เข้าถึง value
    // <obj>[key] ใช้เข้าถึงวิธีนี้
    console.log(object[key]); //object['--']
    sum += object[key];
  }
  return sum;
}

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};

let total = calSalaries(salaries);
console.log(total);
