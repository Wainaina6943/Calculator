// define calculator functions
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

// create a function that calls the calculator functions
const calculator = (a, operator, b) => {
 switch (operator) {
    case '+':
      return add(a, b);
    case '-':
      return subtract(a, b);
    case '*':
      return multiply(a, b);
    case '/':
      return divide(a, b);
    default:
      return 'Invalid operator';
 }
};

// test the calculator function
console.log(calculator(5, '+', 3)); // outputs 8
console.log(calculator(5, '-', 3)); // outputs 2
console.log(calculator(5, '*', 3)); // outputs 15
console.log(calculator(5, '/', 3)); // outputs 1.6666666666666667
console.log(calculator(5, 'invalid', 3)); // outputs 'Invalid operator'