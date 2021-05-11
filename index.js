console.time('script');

// Arithmetic operators

let x = 7; 
let y = 5; 

console.log(x + y);
console.log(x - y);
console.log(x * y); 
console.log(x / y); 
console.log(x % y); 

x++;
console.log(x);
y--;
console.log(y);


// Comparsion operators

x = x + 1 - y;

console.log( x == y);
console.log(x === y);
console.log(x != y);
console.log(x !== y);
console.log(x > y);
console.log(x >= y);
console.log(x < y);
console.log(x <= y); 


// Logical operators

x = 5;
y = 4;

console.log(x == y && y <= x); 
console.log(! (x == y && y <= x));

console.log(x !== y || y >= x); 
console.log(! (x !== y || y >= x)); 


console.error('The user is not logged in!'); 
console.table(['mammals', 'birds', 'reptiles', 'amphibians', 'fishes']); 
console.log(['roma', 'inter', 'atalanta']);
let person = { name: 'Kristina', year: 2021 };
console.dir(person);
console.dir(location); 
console.log(location);
console.info('Domashna: Vtora domashna.');

setTimeout(() => {
    console.timeEnd('script');
}, 3000);



console.warn('Warning message');
console.group('Operators: Logical');

 