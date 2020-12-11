import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

ReactDOM.render(<App />, document.getElementById("root"));

var numbers = [3, 56, 2, 48, 5];

//Map -Create a new array by doing something with each item in an array.
const newNumbers = numbers.map((x) => {
  return x * 2;
});

//Filter - Create a new array by keeping the items that return true.
const newNumber = numbers.filter((num) => {
  return num < 10;
});

//Reduce - Accumulate a value by doing something to each item in an array.
var newNu = numbers.reduce((accumulator, currentNumber) => {
  return accumulator + currentNumber;
});

////Find - find the first item that matches from an array.
const Number = numbers.find((num) => {
  return num > 10;
});

////FindIndex - find the index of the first item that matches.
const newNumb = numbers.findIndex((num) => {
  return num > 10;
});
