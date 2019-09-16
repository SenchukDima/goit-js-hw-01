'use strict'

let input;
let totalSumm = 0;
do {
  input = prompt('Введите число:');
  if(isNaN(input)){
  alert('Было введено не число, попробуйте еще раз');
  continue;
};
totalSumm = totalSumm + +input;
} while(input != null) {
  alert(`Общая сумма чисел равна ${totalSumm}`);
};