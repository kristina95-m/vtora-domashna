// Task 01

let person1 = {
    firstName:'Francesco',
    lastName: 'Totti'
};
console.log('First name:', person1.firstName);
console.log('Last name:', person1['lastName']);


let person2 = {
    firstName:'Andrea',
    lastName: 'Pirlo'
};
console.log('First name:', person2['firstName']);
console.log('Last name:', person2.lastName);


let person3 = {
    firstName:'Paolo',
    lastName: 'Maldini'
};
console.log('First name:', person3.firstName);
console.log('Last name:', person3['lastName']);


// Task 02

person1['age'] = 44;
console.log('person1', person1);

person2.age = 41;
console.log('person2', person2);

person3['age'] = 52;
console.log('person3', person3);

// Task 03
 let a = 44;
 let b = 41;
 let c = 52;

 if(a > b && a > c) {
     console.log('a is the oldest');
 } else if(b > a && b > c) {
     console.log('b is the oldest');
 } else if (c > a && c > b){
     console.log('c is the oldest');
 }


// Task 04

let people = [person1, person2, person3];
console.log('people', people);


// Task 05

let sum = 0;
let age = [44, 41, 52];

age.forEach(person => {
    sum += person;
    console.log('sum', sum);
});


// Task 06

let average = 0;
age.forEach(person => {
    average = sum / 3;
    console.log('average', average);
});

