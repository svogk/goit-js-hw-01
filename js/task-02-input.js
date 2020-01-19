const total = 100;

const orderedInputRef = document.querySelector('input[name="ordered"]');
const buttonRef = document.querySelector('button');

buttonRef.addEventListener('click', function () {
    console.log('orderedInputRef.value: ', orderedInputRef.value);

    const ordered = Number(orderedInputRef.value);

    if (ordered <= total) {
        console.log('Заказ оформлен, с вами свяжется менеджер.')
    } else {
        console.log('На складе недостаточно товаров!')
    }
});
