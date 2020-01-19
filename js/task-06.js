let total = 0;

while (true) {
    let userInput = prompt('Введите число');

    if (userInput === null) {
        alert(`Отменено пользователем`);
        break;
    }

    userInput = Number(userInput);

    const notANumber = Number.isNaN(userInput);

    if (notANumber) {
        alert(`Было введено не число, попробуйте еще раз`);
        continue;
    }

    total += userInput;
}

alert(`Общая сумма чисел равна ${total}`);
