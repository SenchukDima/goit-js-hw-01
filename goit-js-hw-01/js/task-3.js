'use strict'

const ADMIN_PASSWORD = 'jqueryismyjam';
let message;

const writeYourPassword = prompt('Пожалуйста, введите ваш пароль:');

if(writeYourPassword === null) {
    message = 'Отменено пользователем!';
} else if (writeYourPassword === ADMIN_PASSWORD) {
    message = 'Добро пожаловать!';
} else {
    message = 'Доступ запрещен, неверный пароль!';
}

console.log(message);


