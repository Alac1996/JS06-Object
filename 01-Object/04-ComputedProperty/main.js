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

console.log(user);
