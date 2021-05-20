// Task 01

let fruits = ['Apple', 'Banana', 'Orange'];

for(let i = 0; i < fruits.length; i++) {
    console.log(`fruits [${i}] = `, fruits[i]);
}


// Task 01

let students = [
    {
        firstName: 'John',
        lastName: 'Doe',
        index: 20201
    },
    {
        firstName: 'Jane',
        lastName: 'Doe',
        index: 20202
    },
    {
        firstName: 'David',
        lastName: 'Vinoth',
        index: 20203
    },
    {
        firstName: 'Divya',
        lastName: 'Ishitha',
        index: 20204
    },
    {
        firstName: 'Thomas',
        lastName: 'Edgardson',
        index: 20205
    }
];

for(let i = 0; i < students.length; i++) {
    console.log(`students [${i}] = `, students[i]);
}


// Task 03

let numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25];

let result = numbers.filter(number => {
    if(numbers.length < 10) {
        return true;
    } else {
        return false;
    }
});
console.log(numbers); 
console.log(result);  // ne mi javuva greshka ama ne mi pechati nishto


// Task 04

let numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25];
let counter = 0;
let even = 0;

while (counter < numbers.length) {
   even % 2 === 0 numbers[counter];
    counter +2;
}
console.log(counter);  // mi javuva greshka za numbers ama ne razbiram zoshto
                        
                       


