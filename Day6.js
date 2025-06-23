// WAP in JavaScript to convert a letter grade (A–F) into its corresponding marks range using a switch-case.
let grade = prompt("Enter your grade(A-F)");
switch (grade) {
  case "A":
    console.log("Marks range: 90-100");
    break;
  case "B":
    console.log("Marks range: 80-89");
    break;
  case "C":
    console.log("Marks range: 70-79");
    break;
  case "D":
    console.log("Marks range: 60-69");
    break;
  case "E":
    console.log("Marks range: 50-59");
    break;
  case "F":
    console.log("Marks range: 0-49");
    break;
  default:
    console.log("Invalid grade entered.");
}

// WAP to create a function that returns the square of a number.
function square(number) {
  return number ** 2;
}
let num = Number(prompt("Enter a number to find its square and factorial"));
console.log(`Square of ${num} is: ${square(num)}`);

// Write a JavaScript program that defines a function expression to calculate the factorial of a given number.
let factorial = function (num) {
  let f = 1;
  if (num == 0 || num == 1) {
    return 1;
  }
  for (let i = 2; i < num; i++) {
    f = f * i;
    return f;
  }
};
console.log("Factorial of ", num, " is: ", factorial(num));
