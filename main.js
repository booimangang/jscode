// let userName = prompt("Who's there?")
// let password;

// const { stringify } = require("querystring");

// if (userName == "Other" || userName == "other") {
//     alert("I don't know you.");
// } else if (userName == null) {
//     alert("Canceled!");
// } else if (userName == "Admin") {
//     password = prompt("Password?")
//     if (password == "TheMaster") {
//         alert("Welcome")
//     } else if (password == null) {
//         alert("Canceled")
//     } else { alert("Wrong Password") }
// }

// let userName = prompt("Who's there?", '');

// if (userName === 'Admin') {

//     let pass = prompt('Password?', '');

//     if (pass === 'TheMaster') {
//         alert('Welcome!');
//     } else if (pass === '' || pass === null) {
//         alert('Canceled');
//     } else {
//         alert('Wrong password');
//     }

// } else if (userName === '' || userName === null) {
//     alert('Canceled');
// } else {
//     alert("I don't know you");
// }

let inputString = prompt("write your string", '');

function capitalize(string) {
    let fistLetter = string.charAt(0);
    alert(`this is the firs letter of the string, capitalized - ${fistLetter.toUpperCase()}`)
}

function lasLetter(string) {
    let lasLetter = string.charAt(string.length - 1)
    alert(`this is the last letter -a ${lasLetter}`)
}

capitalize(inputString)
lasLetter(inputString)