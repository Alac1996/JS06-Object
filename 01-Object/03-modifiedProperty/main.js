let user = {
  name: "John",
  surname: "Doe",
};
console.log(user);

user.name = "Matt";
console.log(user.name);

delete user.name;
console.log(user);
