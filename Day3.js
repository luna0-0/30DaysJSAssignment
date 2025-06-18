// 1. Program to check whether a given data is a number, string, or boolean.

let data = "32mpv";
console.log(`The data is: ${typeof data}`);


//2. Program to implement different types of operators

let num1 = 20;
let num2 = 3;
console.log("Addition=", num1 + num2);
console.log("Subtraction=", num1 - num2);
console.log("Multiplication=", num1 * num2);
console.log("Division=", num1 / num2);
console.log("Remainder=", num1 % num2);
console.log("Exponentiation=", num1 ** num2);

num1 += 7;
console.log("num1+7=", num1);

let n = "27";
console.log("n==num1:", n == num1);
console.log("n===num1:", n === num1);

console.log(num1 > 20 && n == 27);
console.log(num1 != 27 || n === 27);

let a = true;
console.log("!a=",!a);
