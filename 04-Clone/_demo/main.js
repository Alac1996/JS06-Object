const log = console.log;
log("Object Clone");

let todo = {
  task: "Do Hw",
  complete: false,
  due_date: "13-08-2023",
};

// const newTodo = todo;
// newTodo.complete = true;
// log(todo.complete);

// Clone
// const newTodo = {};
// // เอาต้นแบบมา loop แล้ว assign ทีละ key:value ให้ object ใหม่

// for (let key in todo) {
//   // assign ทีละ key:value  ให้ newTodo
//   newTodo[key] = todo[key];
//   // newTodo['task'] = todo['task'] => 'Do Hw'
//   // newTodo['complete'] = todo['complete'] => false
//   // newTodo['complete'] = todo['complete'] => '13-08-2023'
// }

// log(newTodo);
// newTodo.complete = true;
// log(newTodo.complete);
// log(todo.complete);

//  2. Object.assign

// const newTodo = {
//   complete: true,
// };

// // MERGE/OVERIDE EVAL Direction : Right -> Left
// Object.assign(newTodo, todo);

// log(newTodo);
// // ในกรณ๊ที่มี key ซ้ำกันจะเอา properties ตัวขวามาทับ properties ตัวซ้าย

// const newTodo = {};

//   Object.assign(newTodo, todo); //

// 2.Object.assign(dst, [src1,src2,.....,srcN])
// return address ของ destination (param1)
const newTodo = Object.assign({}, todo);
log(newTodo);
