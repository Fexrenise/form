let name = document.querySelector('name');
let surname = document.querySelector('surname');
let mail = document.querySelector('#mail');

function capitalized(){
    name.value = name.value.toUpperCase();
    surname.value = surname.value.toUpperCase();
}

function lowercase(){
    mail.value = mail.value.toLowerCase();
}