// Create a function to print your name.
function name1(enteryourname){
    return enteryourname
}
const a=name1("sethumadhav");
console.log(a);

// Create a function to add two numbers.
function add(a,b)
{
    return a+b;
}
const b=add(12,58);
console.log(b);

// Create a function to subtract two numbers.
function sub(a,b)
{
    return a-b;
}
const c=sub(12,58);
console.log(c);
// Create a function to find the square of a number.

function sqr(a)
{
    return a**2;
}
const d=sqr(12);
console.log(d);
// Create a function to check even or odd.
function check(a)
{
    if(a%2===0)
    {
        console.log("even number...")
    }
    else
    {
        console.log("odd number...")
    }
}
 check(34);
// Create a function to find the largest of two numbers.
function findLargest(firstValue, secondValue) {

    if (firstValue > secondValue) {
        console.log("Largest:", firstValue);
    } 
    else if (secondValue > firstValue) {
        console.log("Largest:", secondValue);
    } 
    else {
        console.log("Both are equal");
    }

}

findLargest(40, 60);
// Create a function to calculate student average marks.
function calculateAverageMarks(subjectOne, subjectTwo, subjectThree) {

    let totalMarks = subjectOne + subjectTwo + subjectThree;

    let averageMarks = totalMarks / 3;

    console.log("Total Marks:", totalMarks);
    console.log("Average Marks:", averageMarks);

}

calculateAverageMarks(80, 90, 70);
// Create a function to convert Celsius to Fahrenheit.
function convertTemperature(celsiusValue) {

    let fahrenheitValue = (celsiusValue * 9 / 5) + 32;

    console.log("Fahrenheit:", fahrenheitValue);

}

convertTemperature(30);
// Level 2 – Intermediate

// Create a function to calculate factorial.
function calculateFactorial(factorialNumber) {

    let factorialResult = 1;

    for (let factorialCounter = 1; factorialCounter <= factorialNumber; factorialCounter++) {

        factorialResult = factorialResult * factorialCounter;

    }

    return factorialResult;
}

console.log(calculateFactorial(5));
// Create a function to check prime numbers.
function checkPrimeNumber(primeCandidate) {

    if (primeCandidate <= 1) {
        return false;
    }

    for (let primeDivisor = 2; primeDivisor < primeCandidate; primeDivisor++) {

        if (primeCandidate % primeDivisor === 0) {
            return false;
        }

    }

    return true;
}

console.log(checkPrimeNumber(7));
console.log(checkPrimeNumber(8));
// Create a function to reverse a string.
function reverseString(originalText) {

    let reversedText = "";

    for (let characterIndex = originalText.length - 1; characterIndex >= 0; characterIndex--) {

        reversedText = reversedText + originalText[characterIndex];

    }

    return reversedText;
}

console.log(reverseString("javascript"));
// Create a function to check palindrome.
function checkPalindrome(inputText) {

    let reversedText = "";

    for (let textIndex = inputText.length - 1; textIndex >= 0; textIndex--) {

        reversedText = reversedText + inputText[textIndex];

    }

    if (inputText === reversedText) {
        console.log("Palindrome");
    } else {
        console.log("Not Palindrome");
    }

}

checkPalindrome("madam");
// Create a function to calculate employee salary with bonus.
function calculateEmployeeSalary(basicPay, bonusPercentage) {

    let bonusAmount = basicPay * bonusPercentage / 100;

    let totalSalary = basicPay + bonusAmount;

    console.log("Basic Salary:", basicPay);
    console.log("Bonus:", bonusAmount);
    console.log("Total Salary:", totalSalary);

}

calculateEmployeeSalary(30000, 10);
// Create a function with default parameters.
function welcomeUser(userName = "Guest") {

    console.log("Welcome", userName);

}

welcomeUser("Sethu");
welcomeUser();
// Create a function using rest parameters to calculate total.
function calculateTotal(...priceList) {

    let finalTotal = 0;

    for (let priceIndex = 0; priceIndex < priceList.length; priceIndex++) {

        finalTotal = finalTotal + priceList[priceIndex];

    }

    return finalTotal;
}

console.log(calculateTotal(100, 200, 300, 400));
// Create a callback-based calculator.
function add1(a,b)
{
    console.log(a+b);
}
function sub1(a,b)
{
    console.log(a-b);
}
function mul1(a,b)
{
    console.log(a*b);
}
function div1(a,b)
{
    console.log(a/b);
}

function set(a,b,callback)
{
    callback(a,b)
}

set(12,13,add1);
// Create a function that returns another function.
function outerFunction() {

    let message = "Hello JavaScript";

    function innerFunction() {

        console.log(message);

    }

    return innerFunction;
}

let returnedFunction = outerFunction();

returnedFunction();

// Level 3 – Advanced

// Create a recursive factorial function.
function recursiveFactorial(factorialValue) {

    if (factorialValue === 0 || factorialValue === 1) {
        return 1;
    }

    return factorialValue * recursiveFactorial(factorialValue - 1);

}

console.log(recursiveFactorial(5));
// Generate Fibonacci numbers using recursion.
function recursiveFibonacci(termPosition) {

    if (termPosition === 0) {
        return 0;
    }

    if (termPosition === 1) {
        return 1;
    }

    return recursiveFibonacci(termPosition - 1) +
           recursiveFibonacci(termPosition - 2);

}

for (let sequencePosition = 0; sequencePosition < 10; sequencePosition++) {

    console.log(recursiveFibonacci(sequencePosition));

}
// Create a recursive function to calculate the sum of digits. 
function recursiveDigitSum(numberInput) {

    if (numberInput === 0) {
        return 0;
    }

    let lastDigit = numberInput % 10;

    let remainingNumber = Math.floor(numberInput / 10);

    return lastDigit + recursiveDigitSum(remainingNumber);

}

console.log(recursiveDigitSum(1234));
// Demonstrate global, function and block scope.

let globalMessage1= "Global Scope";

function demonstrateScope() {

    let functionMessage = "Function Scope";

    console.log(globalMessage);
    console.log(functionMessage);

    if (true) {

        let blockMessage = "Block Scope";

        console.log(blockMessage);
        console.log(functionMessage);

    }

    // blockMessage cannot be accessed here
}

demonstrateScope();

console.log(globalMessage);
// Demonstrate function declaration and function expression hoisting.
let globalMessage = "Global Scope";

function demonstrateScope() {

    let functionMessage = "Function Scope";

    console.log(globalMessage);
    console.log(functionMessage);

    if (true) {

        let blockMessage = "Block Scope";

        console.log(blockMessage);
        console.log(functionMessage);

    }

    // blockMessage cannot be accessed here
}

demonstrateScope();

console.log(globalMessage);
// Create an IIFE with parameters.
(function displayUserDetails(userName, userAge) {

    console.log("Name:", userName);
    console.log("Age:", userAge);

})("Sethu", 21);
// Build a calculator using higher-order functions.
function performCalculation(firstNumber, secondNumber, operation) {

    return operation(firstNumber, secondNumber);

}

function addition(firstOperand, secondOperand) {
    return firstOperand + secondOperand;
}

function subtraction(firstOperand, secondOperand) {
    return firstOperand - secondOperand;
}

function multiplication(firstOperand, secondOperand) {
    return firstOperand * secondOperand;
}

function division(firstOperand, secondOperand) {

    if (secondOperand === 0) {
        return "Cannot divide by zero";
    }

    return firstOperand / secondOperand;
}

console.log(performCalculation(20, 10, addition));
console.log(performCalculation(20, 10, subtraction));
console.log(performCalculation(20, 10, multiplication));
console.log(performCalculation(20, 10, division));
// Create a student fee management program using reusable functions.
function calculateTotalFees(tuitionFee, libraryFee, examFee) {

    return tuitionFee + libraryFee + examFee;

}

function calculateRemainingFees(totalFees, paidAmount) {

    return totalFees - paidAmount;

}

function checkFeeStatus(remainingAmount) {

    if (remainingAmount === 0) {
        return "Fees Fully Paid";
    } else {
        return "Fees Pending";
    }

}

function displayStudentFeeDetails(studentName, tuitionFee, libraryFee, examFee, paidAmount) {

    let totalFees = calculateTotalFees(tuitionFee, libraryFee, examFee);

    let remainingFees = calculateRemainingFees(totalFees, paidAmount);

    let paymentStatus = checkFeeStatus(remainingFees);

    console.log("Student Name:", studentName);
    console.log("Total Fees:", totalFees);
    console.log("Paid Amount:", paidAmount);
    console.log("Remaining Fees:", remainingFees);
    console.log("Payment Status:", paymentStatus);

}

displayStudentFeeDetails("Sethu", 20000, 2000, 3000, 15000);
