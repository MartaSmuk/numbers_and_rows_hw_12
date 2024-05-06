"use strict";

// //Task 1

let sName = prompt("What is your name? ");
let sAge = prompt("How old are you?");
let sOrigin = prompt("Where are you from?");

alert(`${sName} ${sAge} ${sOrigin}`);

// Task 2

let nNumber = +prompt("Enter 5-digits number!");

let sNumToString = nNumber.toString();
let aNumbers = sNumToString.split(""); 

let res = "";
for (let i = 0; i < aNumbers.length; i++) {
    res += aNumbers[i] + " ";
}
alert(res);








