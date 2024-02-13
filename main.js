console.log("Hello world!")

// let message;
// message = 'Hello'; // store the string 'Hello' in the variable message

// alert(message); // shows the variable content

// let message = 'Hello!'; // define the variable and assign the value
// alert(message);

// let user = 'John', age = 25, message = 'Hello'; // single line

// let user = 'John'
// let age = '25'
// let message = 'Hello!'

// let hello = 'Hello world!';

// let message;

// // copy 'Hello world' from hello into message
// message = hello;

// // now two variables hold the same data
// alert(hello); // Hello world!
// alert(message); // Hello world!

// const myBirthday = '20.08.1998';
// alert(myBirthday)

// const COLOR_RED = "#F00";
// const COLOR_GREEN = "#0F0";
// const COLOR_BLUE = "#00F";
// const COLOR_ORANGE = "#FF7F00";

// // ...when we need to pick a color
// let color = COLOR_ORANGE;
// alert(color); // #FF7F00

// let admin;
// let name = 'John';

// admin = name;
// alert(admin)

// let myPlanetName = 'Earth';
// let currentUserName = 'John';

// const birthday = '18.04.1982'; // can be with an uppercase because the value is known prior to execution and directly written into the code. (hard-coded)
// const age = someCode(birthday); // is less of a constant as it can change with time so keep lowercase


// let x = 100 / "Apple";
// isNaN(x);

// console.log(23+97)
// console.log(23+13+34+52+12+34)

// let result = (4 + 6 + 9) / 77
// console.log(result)

// let a = 10
// console.log(a)

// const MAX = 57;
// let actual = MAX - 13;
// let percentage = actual / MAX;

// DECLARING STRINGS

// const string = "The revolution will not be televised.";
// console.log(string);

// const badString = string;
// console.log(badString)

// EMBEDDING JAVASCRIPT with BACKTICKS

// const name = "Chris";
// const greeting = `Hello, ${name}`;
// console.log(greeting); // "Hello, Chris"

// concatenation
// const one = "Hello, ";
// const two = "how are you?";
// const joined = `${one}${two}`;
// console.log(joined); // "Hello, how are you?"


// concatenation with button 
// const button = document.querySelector("button");

// function greet() {
//   const name = prompt("What is your name?");
//   const greeting = document.querySelector("#greeting");
//   greeting.textContent = `Hello ${name}, nice to see you!`;
// }

// button.addEventListener("click", greet);

// Concatenation using "+"
// const greeting = "Hello";
// const name = "Chris";
// console.log(greeting + ", " + name); // "Hello, Chris"

// use this instead vvvvv
// const greeting = "Hello";
// const name = "Chris";
// console.log(`${greeting}, ${name}`); // "Hello, Chris"

// including expressions in strings 
// const song = "Fight the Youth";
// const score = 9;
// const highestScore = 10;
// const output = `I like the song ${song}. I gave it a score of ${
//   (score / highestScore) * 100 }%.`;
// console.log(output); // "I like the song Fight the Youth. I gave it a score of 90%."

// multiline strings 
// const newline = `One day you finally knew
// what you had to do, and began,`;
// console.log(newline);

// a normal string will need a line breaker (\n) to seperate the sentence 
// const newline = "One day you finally knew\nwhat you had to do, and began,";
// console.log(newline);

// quotes in strings 
// const goodQuotes1 = 'She said "I think so!"';
// const goodQuotes2 = `She said "I'm not going in there!"`;

// const bigmouth = 'I\'ve got no right to take my place…';
// console.log(bigmouth);

// numbers vs strings
// const name = "Front ";
// const number = 242;
// console.log(name + number); // "Front 242"

// Number() function 
// const myString = "123";
// const myNum = Number(myString);
// console.log(typeof myNum)

// String() function 
// const myNum2 = 123;
// const myString2 = String(myNum2);
// console.log(typeof myString2);

// The concat() method can be used instead of the plus operator. These two lines do the same:
// text = "Hello" + " " + "World!";
// text = "Hello".concat(" ", "World!");

// if(age >= 14 && age <=90)

// if (!(age >= 14 && age <=90))


// COMPARISON OPERATORS
// === and !== — test if one value is identical to, or not identical to, another.
// < and > — test if one value is less than or greater than another.
// <= and >= — test if one value is less than or equal to, or greater than or equal to, another.


// let userName = prompt("Who's there?", '');
// if(userName === 'Admin') {
//     let pass = prompt("Password?", '');

//     if (pass === 'TheMaster') {
//         alert('Welcome!');
//     } else if (pass === '' || pass === null) {
//         alert('Cancelled');
//     } else {
//         alert('Wrong password.');
//     }
    
// }

// else if (userName === '' || userName === null) {
//     alert('Canceled');
// } else {
//     prompt("I don't know you. Try again?");
// }

// +prompt() converts the value from a string to a number





let tryAgain = true;

while (tryAgain) {
    let userName = prompt("Who's there?", '');

    if (userName === 'Admin') {
        let passwordAttempts = 3; // You can set the number of password attempts allowed

        while (passwordAttempts > 0) {
            let pass = prompt("Password?", '');

            if (pass === 'TheMaster') {
                alert('Welcome!');
                tryAgain = false; // Set to false to exit the outer loop
                break; // Exit the inner loop
            } else if (pass === '' || pass === null) {
                alert('Cancelled');
                tryAgain = false; // Set to false to exit the outer loop
                break; // Exit the inner loop
            } else {
                alert(`Wrong password. ${passwordAttempts} attempts remaining.`);
                passwordAttempts--;
            }
        }

    } else if (userName === '' || userName === null) {
        alert('Cancelled');
        tryAgain = false; // Set to false to exit the outer loop
    } else {
        let tryAgainInput = prompt("I don't know you. Try again? Enter 'Yes' to try again.");
        tryAgain = tryAgainInput.toLowerCase() === 'yes';
    }
}



