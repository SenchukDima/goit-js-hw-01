'use strict'

let input;
let controlInput;
let total = 0;
do {
  input = prompt('Введите число:');
controlInput = +input;
  if(Number.isNaN(controlInput) === true){
  alert('Было введено не число, попробуйте еще раз');
  continue;
}
total = +total + +input;
} while(input != null) {
  alert(`Общая сумма чисел равна ${total}`);
}
console.log(total);
