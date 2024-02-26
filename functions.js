// FUNCTIONS AND HOW THEY WORK 

// function myFunction() {
//     alert("hello");
//   }
  
//   myFunction();
  
// function parameters
// const myText = "I am a string";
// const newString = myText.replace("string", "sausage");

// console.log(newString)

// optional parameters - takes default value of function 
// const myArray = ["I", "love", "chocolate", "frogs"];
// const madeAString = myArray.join(" ");
// console.log(madeAString);
// // returns 'I love chocolate frogs'

// const madeAnotherString = myArray.join();
// console.log(madeAnotherString);
// // returns 'I,love,chocolate,frogs'


// anonymous functions (function expression) 

// default function 
// function myFunction() {
//     alert("hello");
//   }

// anonymous function 

// (function () {
//     alert("hello");
//   });
  

// EXAMPLE (anonymous function)

// FROM 
// function logKey(event) {
//     console.log(`You pressed "${event.key}".`);
//   }
  
//   textBox.addEventListener("keydown", logKey);

// TO 
// textBox.addEventListener("keydown", function (event) {
//     console.log(`You pressed "${event.key}".`);
//   });
  
// arrow functions (Instead of function(event), you write (event) =>)
// textBox.addEventListener("keydown", (event) => {
//     console.log(`You pressed "${event.key}".`);
//   });


// If the function only takes one parameter, you can omit the parentheses around the parameter:
// textBox.addEventListener("keydown", event => {
//     console.log(`You pressed "${event.key}".`);
//   });
  
  
// RETURN VALUES 

// PARAMETERS 
// function showMessage(from, text) { // parameters: from, text
//     alert(from + ': ' + text);
//   }
  
//   showMessage('Ann', 'Hello!'); // Ann: Hello! (*)
//   showMessage('Ann', "What's up?"); // Ann: What's up? (**)

// Function Declaration
// function sum(a, b) {
//     return a + b;
//   }

  // Function Expression
// let sum = function(a, b) {
//     return a + b;
//   };
  

// EXERCISES 

// function add7(number) {
//   return number + 7;
// }

// let result = add7(10);
// console.log(result);


// function multiply(a,b) {
//   return a * b;
// }

// let result = multiply(3,4)
// console.log


// function capitalize(string) {
//   return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
// }

// let result1 = capitalize("hello");  
// let result2 = capitalize("WORLD");   
// let result3 = capitalize("MiXeD"); 

// console.log(result1);
// console.log(result2);
// console.log(result3);



// function lastLetter(string) {
//   return string.slice(-1);
// }

// let result = lastLetter("German");
// console.log(result)