// Write a program to add, subtract, multiply and divide two numbers
let a= 10;
let b= 50;

let add= a+b;
let sub= a-b;
let mul= a*b;
let div= a/b;

console.log(add);
console.log(sub);
console.log(mul);
console.log(div);


// Find the remainder of two numbers.
let a1=10;
let b1=50;

let d=a1%b1;
console.log(d);


// Check whether a number is even or odd using modulus.
let a2=50;

if(a2 % 2 === 0)
{
    console.log("even number");
}
else{
    console.log("odd number");
}
// Calculate the square and cube of a number.
let a3=5;
let a4=8;
let e= a3**2;
let f=a4**3;
console.log(e);
console.log(f);




// Swap two variables using a third variable.
let a5=1;
let b5=2;
let temp;
console.log(a5);
console.log(b5);


temp=a5;
a5=b5;
b5=temp;

console.log(a5);
console.log(b5);


// Swap two variables without using a third variable.
let a6=1;
let b6=2;



a6,b6=b6,a6

console.log(a6);
console.log(b6);


// Level 2 – Intermediate
// Intermediate
// Check whether a student passed using marks and attendance.
let marks = 65;
let attendance = 80;

if (marks >= 35 && attendance >= 75) {
    console.log("Student Passed");
} else {
    console.log("Student Failed");
}

// Calculate employee gross salary using percentage operators.
let basicSalary = 30000;

let hra = basicSalary * 20 / 100;
let da = basicSalary * 10 / 100;

let grossSalary = basicSalary + hra + da;

console.log("Basic Salary:", basicSalary);
console.log("HRA:", hra);
console.log("DA:", da);
console.log("Gross Salary:", grossSalary);
// Calculate discount based on shopping amount.
let amount = 6000;
let discount = 0;

  if (amount > 5000) {
    discount = amount * 20 / 100;
} else if (amount > 2000) {
    discount = amount * 10 / 100;
} else {
    discount = 0;
}

let finalAmount = amount - discount;

console.log("Shopping Amount:", amount);
console.log("Discount:", discount);
console.log("Final Amount:", finalAmount);
// Convert a string price into a number and calculate GST.
let price = "1000";

let convertedPrice = Number(price);

let gst = convertedPrice * 18 / 100;

let totalPrice = convertedPrice + gst;

console.log("Original Price:", convertedPrice);
console.log("GST:", gst);
console.log("Total Price:", totalPrice);
// Check whether a user is eligible for a loan based on salary and age.
let age = 25;
let salary = 30000;

if (age >= 21 && salary >= 25000) {
    console.log("Eligible for Loan");
} else {
    console.log("Not Eligible for Loan");
}