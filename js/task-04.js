console.log('Задание 4');
let credits = 23580;
const pricePerDroid = 3000;

let userInput = prompt('Сколько дроидов вы хотите купить?');

let totalPrice;

if (userInput === null) {
  console.log('Отменено пользователем!');
} else {
  userInput = Number(userInput);
  totalPrice = pricePerDroid * userInput;
  console.log('totalPrice: ', totalPrice);

  if (totalPrice > credits) {
    console.log('Недостаточно средств на счету!');
  } else {
    credits -= totalPrice;
    console.log(
      `Вы купили ${userInput} дроидов, на счету осталось ${credits} кредитов.`,
    );
  }
}
