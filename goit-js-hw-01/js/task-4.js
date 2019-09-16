'use strict'

const credits = 23580;
const pricePerDroid = 3000;
let totalPrice;
const whatTheQuantityDroids = prompt('Какое количество дроидов вы хотите купить?');

if (whatTheQuantityDroids === null) {
    alert('Отменено пользователем!');
 } else if(isNaN(whatTheQuantityDroids)) {
    alert('Было введено не число!');
    } 
else{
    totalPrice = pricePerDroid * whatTheQuantityDroids;
};
if (totalPrice > credits) {
    alert('Недостаточно средств на счету!');
} else if(whatTheQuantityDroids !== null && whatTheQuantityDroids !== '' && !isNaN(whatTheQuantityDroids)) {
    alert(`Вы купили ${whatTheQuantityDroids} дроидов, на счету осталось ${credits - totalPrice} кредитов.`)
}




