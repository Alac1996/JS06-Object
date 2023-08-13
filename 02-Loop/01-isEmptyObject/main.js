// Object => BOOL
function isEmptyObject(obj) {
  let isEmpty = true;

  for (let key in obj) {
    isEmpty = false;
  }
  return isEmpty;
}

// const a = {
//   //   name: "cc",
// };
