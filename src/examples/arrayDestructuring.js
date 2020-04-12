const numbers = [1,2,3];

[num1,num2] = numbers;
console.log("num1:",num1);
console.log("numm2:",num2);

[num1,,num2] = numbers;
console.log("num1:",num1);
console.log("numm2:",num2);