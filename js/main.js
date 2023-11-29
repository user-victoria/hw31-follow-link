/*
    На сторінці є дві кнопки.
    - При натисканні на першу кнопку просимо користувача ввести в prompt посилання.
    - При натисканні на другу - переадресовується на інший сайт (за раніше введеним посиланням).
    Реалізувати перевірку на http/https.
    Якщо протокол не вказаний - додаємо.
*/

const btnAsk = document.querySelector('.btn-ask');
const btnLink = document.querySelector('.btn-link');
let goLink = document.querySelector('a');

let askUser;

btnAsk.addEventListener('click', function () {
    askUser = prompt('Введіть посилання, починаючи з http/https');

    if (askUser === '' || askUser === null) {
        alert('Ви нічого не ввели');
    }
    else {
        if (askUser.startsWith('http://') || askUser.startsWith('https://')) {
            btnLink.addEventListener('click', function () {
                goLink.href = askUser;
                goLink.target = '_blank';
            });
        }
        else {
            btnLink.addEventListener('click', function () {
                goLink.href = 'https://' + askUser;
                goLink.target = '_blank';
            });
        }
    }
});