//Multiplication of 12 with odd numbers upto 10
let i = 12;
for (let j = 1; j <= 10; j = j + 2) {
  console.log(`${i}*${j}=${i * j}`);
}

/*Write a program that prints the following pattern:
 *
 * *
 * * *
 * * * *
 * * * * *   */
for (let p = 0; p < 5; p++) {
  let pattern = "";
  for (let q = 0; q <= p; q++) {
    pattern = pattern + "*\t";
  }
  console.log(pattern, "\n");
}

//Program to Print the sum of all numbers from 1 to 50
i = 1;
let sum = 0;
while (i <= 50) {
  sum = sum + i;
  i++;
}
console.log("Sum of all numbers from 1 to 50 is: ", sum);

i = 1;
sum = 0;
do{
  sum = sum + i;
  i++;
}while (i <= 30) 
console.log("Sum of all numbers from 1 to 30 is: ", sum);

//Program to print numbers from 1 to 10. Skip number 5 and Stop the loop when the number is 8.
for (let j = 1; j <= 10; j++) {
  if (j == 5) continue;
  else if (j == 8) break;
  console.log(j);
}
