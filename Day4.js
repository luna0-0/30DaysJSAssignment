// 1. WAP to add two numbers and display whether the result is even or odd using if…else.
let a = 129;
let b = 282;
let sum = a + b;
if (sum % 2 == 0) {
  console.log("The sum is even.");
} else {
  console.log("The sum is odd.");
}

// 2. WAP to show implicit and explicit type conversion in JavaScript.**
let c = "29";
console.log("Implicit conversion: ", a - c);
console.log("Implicit conversion: ", b / c);
console.log("Explicit conversion: ", a + Number(c));
console.log("Explicit conversion: ", !Boolean(b));
a = String(a);
console.log("Explicit conversion: ", typeof a);

/* 3. WAP to check whether a number is 
positive, negative, or zero 
using if…else if…else statement.*/
let num = -23;
if (num > 0) 
    console.log(num, " is positive");
else if (num < 0) 
    console.log(num, " is negative");
else 
    console.log(num, " is zero");

// 4. WAP using nested if…else to find the greatest of three numbers.
let num1 = 24;
let num2 = -43;
let num3 = 30;
if (num1 > num2) {
  if (num1 > num3) {
    console.log(num1, " is greatest");
  } else {
    console.log(num3, " is greatest");
  }
} else {
  if (num2 > num3) {
    console.log(num2, " is greatest");
  } else {
    console.log(num3, " is greatest");
  }
}

/* 5. WAP to determine if a user is eligible to vote using ternary operator.
if age is 18 or above Eligible, else Not eligible*/
let age = 17;
age > 18
  ? console.log("Eligible to vote!")
  : console.log("Not eligible to vote!");
