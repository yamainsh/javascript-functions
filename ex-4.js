let calculator = {
    add:(a,b) =>a + b,
    subtract:(a,b) => a - b,
    multiply:(a,b) => a * b,
    divide:(a,b) => a / b,
};

let addResult = calculator.add;
console.log(calculator.add(10,20));
let divideResult = calculator.divide;
console.log(calculator.divide(3000,10));