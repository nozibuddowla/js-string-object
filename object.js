/*
Task-1
Access the golden rod color value in output.

*/

// const colors = {
//     red: "#ff0000",
//     green: "#00ff00",
//     blue: "#0000ff",
//     "golden rod": '#daa520'
// };

// console.log(colors["golden rod"]);

/*
Task-2
For this object below add a property named passenger capacity with value 5

*/

// const car = {
//     make: "Toyota",
//     model: "Corolla",
//     year: 2020
// };

// car['passenger capacity'] = 5;
// console.log(car);

/*
Task-3
Display the physics marks as output.
*/
// const student = {
//     name: "Hamim Sakep",
//     id: 5421,
//     physics: {
//         subject: "HSC Physics",
//         author: "Shahjahan Tapan",
//         marks: 30
//     }
// };

// console.log(student.physics.marks);


/*
Task-4
Count the number of properties.

Input:
let student = {
    name: 'Ariana Grande',
    age: 21,
    city: 'Gaibandha',
    isStudent: true
};

Output:
4
*/
let student = {
    name: 'Ariana Grande',
    age: 21,
    city: 'Gaibandha',
    isStudent: true
};

console.log(`Number of properties: ${(Object.keys(student)).length}`);

/* 
Task-5 (Hard)
Loop through an object and print the key-value pairs with their types

Input:

let myObject = {
    name: 'John Doe',
    age: 25,
    city: 'Example City',
    isStudent: true
};

Output:
key: name | type:  string
key: age | type:  number
key: city | type:  string
key: isStudent | type:  boolean

*/

let myObject = {
    name: 'John Doe',
    age: 25,
    city: 'Example City',
    isStudent: true
};

for (const key in myObject) {
    console.log(`Key: ${key} | Type: ${ typeof myObject[key]}`);
}