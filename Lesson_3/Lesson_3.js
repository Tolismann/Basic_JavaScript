'use strict'
// 1. С помощью цикла while вывести все простые числа в промежутке от 0 до 100.

let array = [];
let array_end = 1;
while (array_end < 100) {
    array_end++;
    array.push(array_end);
}

let a = 2;
let b = 2;
while (a <= 100) {
    a += b;
    array.splice(array.indexOf(a), 1);
}

a = 4;
b = 3;
while (a < 100) {
    if (a % b === 0 && array.indexOf(a) !== -1) {
        array.splice(array.indexOf(a), 1);
    } else {
        a++;
    }
}

a = 6;
b = 5;
while (a < 100) {
    if (a % b === 0 && array.indexOf(a) !== -1) {
        array.splice(array.indexOf(a), 1);
    } else {
        a++;
    }
}

a = 8;
b = 7;
while (a < 100) {
    if (a % b === 0 && array.indexOf(a) !== -1) {
        array.splice(array.indexOf(a), 1);
    } else {
        a++;
    }
}
console.log("Список простых чисел от 0 до 100: " + array)

// 2. С этого урока начинаем работать с функционалом интернет-магазина. Предположим, есть сущность корзины. 
// Нужно реализовать функционал подсчета стоимости корзины в зависимости от находящихся в ней товаров.
// Товары в корзине хранятся в массиве.Задачи:
// a) Организовать такой массив для хранения товаров в корзине;
// b) Организовать функцию countBasketPrice, которая будет считать стоимость корзины.

let price = [2, 7, 4, 9, 6, 8, 11];

let basketPrice = 0

function countBasketPrice(basketPrice) {
    for (let i = 0; i < price.length; i++) {
        basketPrice = basketPrice + price[i]
    }
    return basketPrice;
}

console.log("Cтоимости корзины товара = " + countBasketPrice(basketPrice))

// 3.*Вывести с помощью цикла for числа от 0 до 9, не используя тело цикла. Выглядеть это должно так:
// for (…) {// здесь пусто}

for (let i = 0; i < 10; console.log(i++)) { }
