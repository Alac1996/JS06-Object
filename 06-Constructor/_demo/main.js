const log = console.log;

log("Constructor Function");

const dev1 = {
  name: "john",
  age: 32,
  role: "dev",
  salary: 40_000,
  dev: function () {
    console.log("Im develop some features");
  },
};

function Developer(name, age) {
  this.name = name;
  this.age = age;
  this.role = "dev";
  this.salary = 40_000;
  this.dev = function () {
    console.log("I'm develop some features");
  };
}

const dev2 = new Developer("Pavit", 25);
log(dev2);
log(new Developer("Pavit", 25));
