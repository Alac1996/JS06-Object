function Accumulator(startingValue) {
  this.currentValue = startingValue;

  this.read = function () {
    const inputValue = +prompt("Enter value");
    if (!isNaN(inputValue)) {
      this.currentValue += inputValue;
    } else {
      alert("Invalid input. please enter a valid number");
    }
  };

  this.show = function () {
    alert(`Current Value: ${this.currentValue}`);
  };
}
const accumulator = new Accumulator(10);

accumulator.read();
accumulator.show();
