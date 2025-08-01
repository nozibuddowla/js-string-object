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

let str = "An Amazing Adventure awaits All who dare to dream.";
let count = 0;

for (const element of str) {
    if (element === 'a' || element === 'A') {
        count = count + 1;
    }
}

console.log(`Number of 'a' or 'A': ${count}`);
