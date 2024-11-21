

// 1- Write a program that allow to user enter number then printit

/*

var number = Number(window.prompt("Please Enter Your Number ?"));
console.log("Your Number Is " + number);

*/

// 2- Write a program that take number from user then print yes if that number can divide by 3 and 4 otherwise print no

/*

var number = Number(window.prompt("Please Enter Your Number ?"));

if (number % 3 == 0 && number % 4 == 0) {
    console.log("Yes");
}
else {
    console.log("No");
}

*/

// 3- Write a program that allows the user to insert 2 integers then print the max

/*

var number_1 = Number(window.prompt("Please Enter First Number ?"));
var number_2 = Number(window.prompt("Please Enter Second Number ?"));

if (number_1 > number_2) {
    console.log("Max Number Is " + number_1);
}
else if (number_2 > number_1) {
    console.log("Max Number Is " + number_2);
}

*/

// 4- Write a program that allows the user to insert an integer then print negative if it is negative number otherwise print positive.

/*

var number = Number(window.prompt("Please Enter Your Number ?"));

if (number > 0) {
    console.log(" Number Is positive ");
}
else if (number < 0) {
    console.log(" Number Is negative ");
}
else {
    console.log(" Number Is Zero ");
}

*/

// 5 - Write a program that take 3 integers from user then print the max element and the min element.

/*

var number_1 = Number(window.prompt("Please Enter First Number ?"));
var number_2 = Number(window.prompt("Please Enter Second Number ?"));
var number_3 = Number(window.prompt("Please Enter Third Number ?"));

if (number_1 > number_2 && number_1 > number_3) {
    console.log("Max Number Is " + number_1);
    if (number_2 > number_3) {
        console.log("Min Number Is " + number_3);
    }
    else {
        console.log("Min Number Is " + number_2);
    }
}
else if (number_2 > number_1 && number_2 > number_3) {
    console.log("Max Number Is " + number_2);
    if (number_1 > number_3) {
        console.log("Min Number Is " + number_3);
    }
    else {
        console.log("Min Number Is " + number_1);
    }
}
else if (number_3 > number_1 && number_3 > number_2) {
    console.log("Max Number Is " + number_3);
    if (number_1 > number_2) {
        console.log("Min Number Is " + number_2);
    }
    else {
        console.log("Min Number Is " + number_1);
    }
}

*/

// 6- Write a program that allows the user to insert integer number then check If a number is even or odd.

/*

var number = Number(window.prompt("Please Enter Your Number ?"));

if (number % 2 == 0) {
    console.log("Even");
} else {
    console.log("Odd");
}

*/

// 8 - Write a program that take character from user then if it is vowel chars(a, e, I, o, u) then print vowel otherwise print consonant.

/*

var char = window.prompt("Please Enter Your Character ?");

if (char == 'a' || char == 'e' || char == 'i' || char == 'o' || char == 'u') {
    console.log("vowel");
}
else {
    console.log("consonant");

}

*/

// 9 - Write a program that allows user to insert integer then print all numbers between 1 to that’s number.

/*

var number = Number(window.prompt("Please Enter Your Number ?"));

for (i = 1; i <= number; i++) {
    console.log(i);
}

*/

// 10- Write a program that allows user to insert integer then print a multiplication table up to 12.

/*

var number = Number(window.prompt("Please Enter Your Number ?"));

for (i = 1; i <= 12; i++) {
    console.log(number * i);
}

*/

// 11 - Write a program that allows to user to insert number then print all even numbers between 1 to this number.

/*

var number = Number(window.prompt("Please Enter Your Number ?"));

for (i = 2; i <= number; i += 2) {
    console.log(i);
}

*/

// 12- Write a program that take two integers then print the power.

/*

var base = Number(window.prompt("Please Enter First Number ?"));
var power = Number(window.prompt("Please Enter Second Number ?"));
var number = 1;
for (i = 1; i <= power; i++) {
    number *= base;
}
console.log(base + " ^ " + power + " = " + number);

*/

// 13- Write a program to enter marks of five subjects and calculate total, average and percentage.

/*

var subject_1 = Number(window.prompt("Enter The Marks of The 1st Subject ?"));
var subject_2 = Number(window.prompt("Enter The Marks of The 2nd Subject ?"));
var subject_3 = Number(window.prompt("Enter The Marks of The 3rd Subject ?"));
var subject_4 = Number(window.prompt("Enter The Marks of The 4Th Subject ?"));
var subject_5 = Number(window.prompt("Enter The Marks of The 5Th Subject ?"));
var totalMarks;
var averageMarks;
var percentage;

totalMarks = subject_1 + subject_2 + subject_3 + subject_4 + subject_5;
averageMarks = totalMarks / 5;
percentage = (totalMarks / 500) * 100;

console.log("Total Marks = " + totalMarks);
console.log("Average Marks = " + averageMarks);
console.log("Percentage = " + percentage + "%");

*/

// 14-Write a program to input month number and print number of days in that month.

/*

var monthNumber = Number(window.prompt("Enter Month Number ?"));

switch (monthNumber) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
        console.log("31 Days");
        break;
    case 2:
        console.log("28 Days");
        break;
    case 4:
    case 6:
    case 9:
    case 11:
        console.log("30 Days");
        break;
}

*/

// 15 - Write a program to input marks of five subjects Physics, Chemistry, Biology, Mathematics and Computer, Find percentage and grade.

/*

var subject_1 = Number(window.prompt("Enter The Marks of Physics Subject ?"));
var subject_2 = Number(window.prompt("Enter The Marks of Chemistry Subject ?"));
var subject_3 = Number(window.prompt("Enter The Marks of Biology Subject ?"));
var subject_4 = Number(window.prompt("Enter The Marks of Mathematics Subject ?"));
var subject_5 = Number(window.prompt("Enter The Marks of Computer Subject ?"));
var totalMarks = subject_1 + subject_2 + subject_3 + subject_4 + subject_5;
var percentage = (totalMarks / 500) * 100;
console.log("Percentage = " + percentage + "%");

if (percentage >= 90) {
    console.log("Grad A");
}
else if (percentage >= 80) {
    console.log("Grad B");
}
else if (percentage >= 70) {
    console.log("Grad C");
}
else if (percentage >= 60) {
    console.log("Grad D");
}
else if (percentage >= 40) {
    console.log("Grad E");
}
else if (percentage < 40) {
    console.log("Grad F");
}

*/

// 16- Write a program to print total number of days in month.

/*

var monthNumber = Number(window.prompt("Enter Month Number ?"));

switch (monthNumber) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
        console.log("31 Days");
        break;
    case 2:
        console.log("28 Days");
        break;
    case 4:
    case 6:
    case 9:
    case 11:
        console.log("30 Days");
        break;
}

*/

// 17- Write a program to check whether an alphabet is vowel or consonant.

/*

var char = window.prompt("Please Enter Your Character ?");

switch (char) {
    case 'a':
    case 'e':
    case 'i':
    case 'o':
    case 'u':
        console.log("Vowel");
        break;
    default: console.log("Consonant");
}

*/

// 18 - Write a program to find maximum between two numbers.

/*

var number_1 = Number(window.prompt("Please Enter First Number ?"));
var number_2 = Number(window.prompt("Please Enter Second Number ?"));

switch (true) {
    case number_1 > number_2:
        console.log("Max Number Is " + number_1);
        break;
    case number_2 > number_1:
        console.log("Max Number Is " + number_2);
        break;
}

*/

// 19- Write a program to check whether a number is even or odd.

/*

var number = Number(window.prompt("Please Enter Your Number ?"));

switch (true) {
    case number % 2 == 0:
        console.log("Even");
        break;
    default:
        console.log("Odd");
}

*/

// 20- Write a program to check whether a number is positive or negative or zero.

/*

var number = Number(window.prompt("Please Enter Your Number ?"));

switch (true) {
    case number > 0:
        console.log(" Number Is positive ");
        break;
    case number < 0:
        console.log(" Number Is negative ");
        break;
    default:
        console.log(" Number Is Zero ");
}

*/


// 21- Write a program to create Simple Calculator. 

/*

var number_1 = Number(window.prompt("Please Enter First Number ?"));
var number_2 = Number(window.prompt("Please Enter Second Number ?"));
var operation = window.prompt("Select The Operation ( add - subtract - multiply - divide )")
var add = number_1 + number_2;
var subtract = number_1 - number_2;
var multiply = number_1 * number_2;
var divide = number_1 / number_2;

switch (operation) {
    case "add":
        console.log(number_1 + " + " + number_2 + " = " + add);
        break;
    case "subtract":
        console.log(number_1 + " - " + number_2 + " = " + subtract);
        break;
    case "multiply":
        console.log(number_1 + " * " + number_2 + " = " + multiply);
        break;
    case "divide":
        console.log(number_1 + " / " + number_2 + " = " + divide);
        break;
}

*/
