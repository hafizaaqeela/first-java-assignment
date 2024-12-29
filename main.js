// TASK # 1
alert("WELCOME TO JAVA SCRIPT !");

var a = prompt(" WHAT IS YOUR NAME?");
alert( "HELLO, " + a + " ! ")

// TASK # 2
var firstname = prompt("enter your first name");
var lastname = prompt("enter your last name");
var fullname = (firstname + " " + lastname);
alert(fullname);
// TASK # 2 (2)
var hobby = prompt("your favourite hobbies");
alert("your favourite hobbiy is " + hobby + ".")

// TASK # 3 (VARIABLES FOR NUMBERS)
// TASK # 1 
var yearofbirth = prompt("enter your birth year");
var currentyear = prompt("enter the current year");
var age = currentyear - yearofbirth;
alert("your age is " + age);
// TASK # 2
var length = prompt("enter the length of rectangle");
var width = prompt("enter the width of rectangle");
var area = length + width;
alert("The Area of the rectangle is " + area);

// TASK # 4 (VARIABLES NAMES LEGAL AND ILLEGAL)
// TASK # 1 
// legal
// var _eye;
// var $dollar;
// TASK # 2 
var myage = prompt("enter your age");
var myfriendsage = prompt("enter your friends age");
alert("my age is " + myage + "and my friends age is " + myfriendsage);

// TASK # 5
// TASK # 1
number1 = prompt("enter the first number:");
number2 = prompt("enter the second number:");
sum = number1 + number2
alert("the sum is: " + sum)
// TASK # 2
number1 = prompt("enter the first number:");
number2 = prompt("enter the second number:");
sum = number1 * number2
alert("the sum is: " + sum)
// TASK # 3
alert( 17 % 5)


   // CHALLENGE //

// CHALLENGE # 1
currentyear = prompt("please enter current year");
birthyear = prompt("please enter your birth year");
age = currentyear - birthyear
alert("you are " + age + " years old.");

// CHALLENGE # 2
var number1 = prompt("enter the first number:");
var number2 = prompt("enter the second number:");
sum_total = number1 + number2;
difference_total = number1 - number2;
product_total = number1 * number2;
quotient_total = number1 / number2;
remainder_total = number1 % number2;
alert("sum: " + sum_total);
alert("difference: " + difference_total);
alert("product: " + product_total);
alert("quotient: " + quotient_total);
alert("remainder: " + remainder_total);