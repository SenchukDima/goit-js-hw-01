'use strict'
let cost;
const enterCountryName = prompt('Введите название страны:');
if (enterCountryName !== null) {
const fixCountryName = enterCountryName.charAt(0).toUpperCase() + enterCountryName.substr(1).toLowerCase(); 
switch (fixCountryName) {
    case 'Китай':
      cost = 100;
      alert(`Доставка в ${fixCountryName} будет стоить ${cost} кредитов`);
      break;
  
    case 'Чили':
      cost = 250;
      alert(`Доставка в ${fixCountryName} будет стоить ${cost} кредитов`);
      break;
  
    case 'Австралия':
      cost = 170;
      alert(`Доставка в ${fixCountryName} будет стоить ${cost} кредитов`);
      break;

    case 'Индия':
      cost = 80;
      alert(`Доставка в ${fixCountryName} будет стоить ${cost} кредитов`);
      break;
    
    case 'Ямайка':
      cost = 120;
      alert(`Доставка в ${fixCountryName} будет стоить ${cost} кредитов`);
      break;

    default:
     alert('В вашей стране доставка не доступна');
    }
}  else {
  alert('Отменено пользователем');
} 