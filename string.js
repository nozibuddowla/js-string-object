/*
Task-1:
Count how many times a string has the letter a
*/ 

// let str = "JavaScript is a powerful and amazing language.";
// let count = 0;

// for (const element of str.toLowerCase()) {
//     if (element === 'a') {
//         count = count + 1;
//     }
// }

// console.log(`Number of 'a': ${count}`);

/*
Task-2:
Count how many times a string has the letter a or A
*/ 

// let str = "An Amazing Adventure awaits All who dare to dream.";
// let count = 0;

// for (const element of str) {
//     if (element === 'a' || element === 'A') {
//         count = count + 1;
//     }
// }

// console.log(`Number of 'a' or 'A': ${count}`);


/*
Task-3:
Check whether a string contains all the vowels a, e, i, o, u
*/ 
// let str = "Education is a powerful tool.";
// str = str.toLowerCase();

// if (str.includes('a') && str.includes('e') && str.includes('i') && str.includes('o') && str.includes('u')) {
//     console.log("The string contains all the vowels.");
    
// } else {
//     console.log("The string does not contain all the vowels.");
    
// }

/*
Task-4:
If a given string has either x, replace x by y. if the given string has X, replace it by Y.
*/ 

// let str = "Xerox and xylophone are examples.";

// if (str.includes("x") || str.includes("X")) {
//     let result = str.replace(/x/g, "y").replace(/X/g, "Y");
//     console.log(result);
// }

/*
Task-5:
Capitalize Every first Letter of each word in a String
*/

let str = "the quick brown fox jumps over the lazy dog";
str = str.split(" ")

for (let index = 0; index < str.length; index++) {
    str[index] = str[index][0].toUpperCase() + str[index].slice(1);
}

console.log(str.join(" "));