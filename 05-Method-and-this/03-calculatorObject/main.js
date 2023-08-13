let calculator = {
  x: null,
  y: null,
  read: function () {
    this.x = +prompt("Input1"); // calculator.x = +prompt()
    this.y = +prompt("Input2"); // calculator.y = +prompt()
  },
  sum: function () {
    return this.x + this.y;
  },
  mul: function () {
    return this.x * this.y;
  },
};
calculator.read(6, 9);
console.log(calculator);
alert(calculator.sum());
alert(calculator.mul());
