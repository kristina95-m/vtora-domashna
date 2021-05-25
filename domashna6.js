let book1 = {
    title: 'Il nome della rosa',
    author: 'Umberto Eco'
};

let book2 = {
    title: 'Palomar',
    author: 'Italo Calvino'
};

let books = [book1, book2];

let author = document.createElement('li');
author.innerHTML = 'Author: Umberto Eco';
let ul_book1 = document.getElementById('book1');
document.body.appendChild(author);
ul_book1.appendChild(author);


let title = document.createElement('li');
title.innerHTML = 'Title: Palomar';
let ul_book2 = document.getElementById('book2');
document.body.appendChild(title);
ul_book2.appendChild(title);

let first_list = document.getElementById('book1');
first_list.classList.add('style');

let second_list = document.getElementById('book2');
second_list.classList.add('style');


let mouse_over = () => {
    first_list.style.backgroundColor = 'yellow';
};

let mouse_out = () => {
    first_list.style.backgroundColor = 'greenyellow'
};

first_list.addEventListener('mouse_over', mouse_over);
first_list.addEventListener('mouse_out', mouse_out);


