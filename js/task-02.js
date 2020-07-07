console.log('Задание 2');
const total = 100;
const ordered = 50; //20, 80, 130

console.log('Количество товаров на складе: ', total);
console.log('Количество единиц товара в заказе: ', ordered);

if (ordered <= total) {
  console.log('Заказ оформлен, с вами свяжется менеджер.');
} else {
  console.log('На складе недостаточно товаров!');
}
