console.log('Задание 5');
let userDeliveryCountry = prompt('Введите страну доставки товара');
let deliveryCountry;

if (userDeliveryCountry === null) {
  console.log('Отменено пользователем!');
} else {
  let deliveryCountry = userDeliveryCountry.toLowerCase();

  let price = 0;

  switch (deliveryCountry) {
    case 'китай':
      price = 100;
      break;

    case 'чили':
      price = 250;
      break;

    case 'австралия':
      price = 170;
      break;

    case 'индия':
      price = 80;
      break;

    case 'ямайка':
      price = 120;
      break;

    default:
      alert('В вашей стране доставка не доступна');
  }

  deliveryCountry =
    deliveryCountry[0].toUpperCase() + deliveryCountry.substring(1);

  if (price > 0) {
    alert(`Доставка в ${deliveryCountry} будет стоить ${price} кредитов`);
  }
}
