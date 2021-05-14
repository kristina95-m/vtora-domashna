// Task 01

let x = 5;
console.log('x =', x);

x += 8;
console.log(x);

x -= 4;
console.log(x);

x *= 6;
console.log(x);

x /= 3;
console.log(x);

x %= 5; 
console.log(x);


// Task 02

let a = 3;
let b = 0;
let c = -6;

if(a < 0 && a <= -6) {
    console.log('a is a negative number');
} else {
    console.log('a is a positive number');
}


if (b < 0) {
    console.log ('b is a negative number');
} else if(b > 0) {
    console.log('b is a positive number');
} else {
    console.log('b equals to zero');
}


if(c >= a && c > b) {
    console.log('c is a positive number');
} else {
    console.log('c is a negative number');
}


// Task 03

let student1 = 80;
let student2 = 77;
let student3 = 88;
let student4= 95;
let student5 = 68;

let sum = student1 + student2 + student3 + student4 + student5;
console.log(sum);

let average = sum / 5;
console.log('average =', average);

if(average < 60) {
    console.log('The grade is F');
} else if (average > 60 && average < 70) {
    console.log('The grade is D');
} else if (average > 70 && average < 80) {
    console.log('The grade is C');
} else if (average > 80 && average < 90) {
    console.log('The grade is B');
} else if (average > 90 && average < 100) {
    console.log('The grade is A');
}



// Task 04
let day = 'Friday';

switch(day) {
    case 'Saturday' :
        console.log('The day is weekend');
        break;
    case 'Sunday' :
        console.log('The day is weekend');
        break;
    case 'Friday' :
        console.log('The day is a day of the week');
        
}


// Task 05
let month = 'May'

switch(month) {
    case 'June', 'July', 'August': 
        console.log('The month belongs in summer');
        break;
    case 'September', 'October', 'November': 
        console.log('The month belons in autumn');
        break;
        case 'December', 'January', 'February' :
            console.log('The month belongs in winter');
            break;
    case 'March', 'April', 'May' :
        console.log('The month belongs in spring'); 
}






