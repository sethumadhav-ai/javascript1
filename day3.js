// Check whether a number is positive, negative or zero.
let inputNumber = -10;

if (inputNumber > 0) {
    console.log("Positive Number");
} 
else if (inputNumber < 0) {
    console.log("Negative Number");
} 
else {
    console.log("Zero");
}
// Find the largest of two numbers.
let firstValue = 20;
let secondValue = 30;

if (firstValue > secondValue) {
    console.log("Largest:", firstValue);
} 
else if (secondValue > firstValue) {
    console.log("Largest:", secondValue);
} 
else {
    console.log("Both are equal");
}

// Find the largest of three numbers.
let numberOne = 10;
let numberTwo = 50;
let numberThree = 30;

if (numberOne >= numberTwo && numberOne >= numberThree) {
    console.log("Largest:", numberOne);
} 
else if (numberTwo >= numberOne && numberTwo >= numberThree) {
    console.log("Largest:", numberTwo);
} 
else {
    console.log("Largest:", numberThree);
}
// Check whether a year is a leap year.

let calendarYear = 2024;

if (calendarYear % 400 === 0) {
    console.log("Leap Year");
} 
else if (calendarYear % 100 === 0) {
    console.log("Not a Leap Year");
} 
else if (calendarYear % 4 === 0) {
    console.log("Leap Year");
} 
else {
    console.log("Not a Leap Year");
}
// Check whether a student passed or failed.
let examMarks = 45;

if (examMarks >= 35) {
    console.log("Student Passed");
} 
else {
    console.log("Student Failed");
}
// Print numbers from 1 to 100.
for (let sequenceNumber = 1; sequenceNumber <= 100; sequenceNumber++) {
    console.log(sequenceNumber);
}
// Print even numbers from 1 to 50.
for (let evenValue = 2; evenValue <= 50; evenValue += 2) {
    console.log(evenValue);
}
// Calculate the sum of numbers from 1 to 100.
let accumulatedSum = 0;

for (let currentValue = 1; currentValue <= 100; currentValue++) {
    accumulatedSum = accumulatedSum + currentValue;
}

console.log("Total Sum:", accumulatedSum);
// Level 2 – Intermediate
// Print the multiplication table of any number.
let selectedTable = 5;

for (let tableMultiplier = 1; tableMultiplier <= 10; tableMultiplier++) {
    console.log(selectedTable + " x " + tableMultiplier + " = " + (selectedTable * tableMultiplier));
}
// Find the factorial of a number.

let factorialInput = 5;
let factorialAnswer = 1;

for (let factorialCounter = 1; factorialCounter <= factorialInput; factorialCounter++) {
    factorialAnswer = factorialAnswer * factorialCounter;
}

console.log("Factorial:", factorialAnswer);
// Reverse a number.
let reverseInput = 1234;
let reverseOutput = 0;

while (reverseInput > 0) {
    let extractedNumber = reverseInput % 10;

    reverseOutput = reverseOutput * 10 + extractedNumber;

    reverseInput = Math.floor(reverseInput / 10);
}

console.log("Reversed Number:", reverseOutput);
// Count the digits in a number.

let digitInput = 12345;
let totalDigits = 0;

while (digitInput > 0) {
    totalDigits++;

    digitInput = Math.floor(digitInput / 10);
}

console.log("Total Digits:", totalDigits);
// Find the sum of digits.
let sumInput = 123;
let calculatedSum = 0;

while (sumInput > 0) {
    let removedDigit = sumInput % 10;

    calculatedSum = calculatedSum + removedDigit;

    sumInput = Math.floor(sumInput / 10);
}

console.log("Sum of Digits:", calculatedSum);
// Check whether a number is prime.
let primeInput = 7;
let primeStatus = true;

if (primeInput <= 1) {
    primeStatus = false;
} 
else {
    for (let primeDivisor = 2; primeDivisor < primeInput; primeDivisor++) {

        if (primeInput % primeDivisor === 0) {
            primeStatus = false;
            break;
        }
    }
}

if (primeStatus) {
    console.log("Prime Number");
} 
else {
    console.log("Not a Prime Number");
}
// Print all prime numbers between 1 and 100.

for (let candidateValue = 2; candidateValue <= 100; candidateValue++) {

    let primeFlag = true;

    for (let checkingDivisor = 2; checkingDivisor < candidateValue; checkingDivisor++) {

        if (candidateValue % checkingDivisor === 0) {
            primeFlag = false;
            break;
        }
    }

    if (primeFlag) {
        console.log(candidateValue);
    }
}
// Generate the Fibonacci sequence.
let previousTerm = 0;
let currentTerm = 1;
let numberOfTerms = 10;

for (let termPosition = 1; termPosition <= numberOfTerms; termPosition++) {

    console.log(previousTerm);

    let upcomingTerm = previousTerm + currentTerm;

    previousTerm = currentTerm;
    currentTerm = upcomingTerm;
}
// Create a simple calculator using switch.
let operandOne = 20;
let operandTwo = 10;
let selectedOperator = "+";
let calculationResult;

switch (selectedOperator) {

    case "+":
        calculationResult = operandOne + operandTwo;
        break;

    case "-":
        calculationResult = operandOne - operandTwo;
        break;

    case "*":
        calculationResult = operandOne * operandTwo;
        break;

    case "/":
        if (operandTwo !== 0) {
            calculationResult = operandOne / operandTwo;
        } else {
            calculationResult = "Cannot divide by zero";
        }
        break;

    default:
        calculationResult = "Invalid Operator";
}

console.log("Result:", calculationResult);
// Level 3 – Advanced

// Check whether a number is an Armstrong number.
let armstrongInput = 153;
let armstrongOriginal = armstrongInput;
let armstrongTemporary = armstrongInput;
let armstrongDigitCount = 0;
let armstrongTotal = 0;

while (armstrongTemporary > 0) {
    armstrongDigitCount++;
    armstrongTemporary = Math.floor(armstrongTemporary / 10);
}

armstrongTemporary = armstrongInput;

while (armstrongTemporary > 0) {

    let armstrongDigit = armstrongTemporary % 10;
    let armstrongPower = 1;

    for (let powerCounter = 1; powerCounter <= armstrongDigitCount; powerCounter++) {
        armstrongPower = armstrongPower * armstrongDigit;
    }

    armstrongTotal = armstrongTotal + armstrongPower;

    armstrongTemporary = Math.floor(armstrongTemporary / 10);
}

if (armstrongTotal === armstrongOriginal) {
    console.log("Armstrong Number");
} 
else {
    console.log("Not an Armstrong Number");
}
// Check whether a number is a palindrome.
let palindromeInput = 121;
let palindromeOriginal = palindromeInput;
let palindromeReverse = 0;

while (palindromeInput > 0) {

    let palindromeDigit = palindromeInput % 10;

    palindromeReverse = palindromeReverse * 10 + palindromeDigit;

    palindromeInput = Math.floor(palindromeInput / 10);
}

if (palindromeOriginal === palindromeReverse) {
    console.log("Palindrome Number");
} 
else {
    console.log("Not a Palindrome Number");
}
// Print a right triangle star pattern.

for (let triangleRow = 1; triangleRow <= 5; triangleRow++) {

    let trianglePattern = "";

    for (let triangleColumn = 1; triangleColumn <= triangleRow; triangleColumn++) {
        trianglePattern += "* ";
    }

    console.log(trianglePattern);
}
// Print an inverted star pattern.
for (let invertedRow = 5; invertedRow >= 1; invertedRow--) {

    let invertedPattern = "";

    for (let invertedColumn = 1; invertedColumn <= invertedRow; invertedColumn++) {
        invertedPattern += "* ";
    }

    console.log(invertedPattern);
}
// Print a pyramid pattern.
for (let pyramidRow = 1; pyramidRow <= 5; pyramidRow++) {

    let pyramidPattern = "";

    for (let pyramidSpace = 1; pyramidSpace <= 5 - pyramidRow; pyramidSpace++) {
        pyramidPattern += " ";
    }

    for (let pyramidStar = 1; pyramidStar <= (2 * pyramidRow - 1); pyramidStar++) {
        pyramidPattern += "*";
    }

    console.log(pyramidPattern);
}
// Generate a multiplication table from 1 to 10 using nested loops.
for (let outerTable = 1; outerTable <= 10; outerTable++) {

    console.log("Multiplication Table:", outerTable);

    for (let innerMultiplier = 1; innerMultiplier <= 10; innerMultiplier++) {

        console.log(outerTable + " x " + innerMultiplier + " = " + (outerTable * innerMultiplier));
    }
}
// Create an employee salary processing program for 10 employees.

for (let employeeId = 1; employeeId <= 10; employeeId++) {

    let employeeBasic = 20000 + (employeeId * 1000);

    let employeeHRA = employeeBasic * 20 / 100;

    let employeeDA = employeeBasic * 10 / 100;

    let employeePF = employeeBasic * 12 / 100;

    let employeeGross = employeeBasic + employeeHRA + employeeDA;

    let employeeNet = employeeGross - employeePF;

    console.log("Employee ID:", employeeId);
    console.log("Basic Salary:", employeeBasic);
    console.log("HRA:", employeeHRA);
    console.log("DA:", employeeDA);
    console.log("PF:", employeePF);
    console.log("Gross Salary:", employeeGross);
    console.log("Net Salary:", employeeNet);

    console.log("------------------------");
}
// Create a student grading system for 20 students.
for (let studentId = 1; studentId <= 20; studentId++) {

    let studentScore = studentId * 5;
    let assignedGrade;

    if (studentScore >= 90 && studentScore <= 100) {
        assignedGrade = "A Grade";
    } 
    else if (studentScore >= 75) {
        assignedGrade = "B Grade";
    } 
    else if (studentScore >= 60) {
        assignedGrade = "C Grade";
    } 
    else if (studentScore >= 35) {
        assignedGrade = "D Grade";
    } 
    else if (studentScore >= 0) {
        assignedGrade = "Fail";
    } 
    else {
        assignedGrade = "Invalid Marks";
    }

    console.log("Student ID:", studentId);
    console.log("Marks:", studentScore);
    console.log("Grade:", assignedGrade);

    console.log("------------------------");
}
