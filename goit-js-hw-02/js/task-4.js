'use strict'

const credits = 23580;
const pricePerDroid = 3000;
let totalPrice;
const whatTheQuantityDroids = prompt('Какое количество дроидов вы хотите купить?');

if (whatTheQuantityDroids === null) {
    alert('Отменено пользователем!');
} else{
    totalPrice = credits - (pricePerDroid * whatTheQuantityDroids);
}

if (totalPrice < 0) {
    alert('Недостаточно средств на счету!');
} else {
    alert(`Вы купили ${whatTheQuantityDroids} дроидов, на счету осталось ${totalPrice} кредитов.`)
}



