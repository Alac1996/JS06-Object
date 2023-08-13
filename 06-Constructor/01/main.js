function Calculator() {
  this.read = function () {
    this.num1 = +prompt("Enter the first number:");
    this.num2 = +prompt("Enter the second number:");
  };

  this.sum = function () {
    return this.num1 + this.num2;
  };

  this.mul = function () {
    return this.num1 * this.num2;
  };
}

const calculator = new Calculator();
calculator.read();

console.log(`sum: ${calculator.sum()}`);
console.log(`product: ${calculator.mul()}`);
