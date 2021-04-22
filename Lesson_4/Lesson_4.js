'use strict'
// 1.	Написать функцию, преобразующую число в объект. Передавая на вход число от 0 до 999, надо получить на выходе объект, 
// в котором в соответствующих свойствах описаны единицы, десятки и сотни. 
// Например, для числа 245 надо получить следующий объект: {‘единицы’: 5, ‘десятки’: 4, ‘сотни’: 2}. 
// Если число превышает 999, необходимо выдать соответствующее сообщение с помощью console.log и вернуть пустой объект.

console.log(numToObj(725));
function numToObj(n) {
    if (n < 0 || n > 999 || typeof n !== "number") {
        console.log("Неверное число. Введите число от 0 до 999.");
    } else {
        let str = n.toString();
        let obj = {};
        let l = str.length;
        switch (l) {
            case 3:
                obj["Сотни"] = str[l - 3];
            case 2:
                obj["Десятки"] = str[l - 2];
            case 1:
                obj["Единицы"] = str[l - 1];
        }
        return obj;
    }
}

// 2.	Продолжить работу с интернет-магазином:
// a.В прошлом домашнем задании вы реализовали корзину на базе массивов.Какими объектами можно заменить их элементы ?
// b.Реализуйте такие объекты.
// c.Перенести функционал подсчета корзины на объектно - ориентированную базу.

let AddBasket = function (product, price, product_quantity) {
    this.product = product;
    this.price = price;
    this.product_quantity = product_quantity;
}

let mango = new AddBasket("Mango", 60, 10);
let lime = new AddBasket("Lime", 40, 9);
let orange = new AddBasket("Orange", 80, 5);
let apple = new AddBasket("Apple", 50, 7);
let kiwi = new AddBasket("Kiwi", 70, 8);

let basket = [];
basket.push(mango)
basket.push(lime)
basket.push(orange)
basket.push(apple)
basket.push(kiwi)


function countBasketPrice(arr) {
    let basketPrice = 0;
    for (let i = 0; i < arr.length; i++) {
        basketPrice += arr[i].price*arr[i].product_quantity;
    }
    return basketPrice;
}

function deskBasket(arr) {
    let basketProduct = '';
    for (let i = 0; i < arr.length; i++) {
        basketProduct += (i + 1) + '. ' + arr[i].product + ' - ' + arr[i].price + ' * ' + arr[i].product_quantity + ' = ' + (arr[i].price * arr[i].product_quantity) + '\n';
    }
    return basketProduct;
}
console.log('В корзину добавлен продукт: \n' + deskBasket(basket) + '\n' + '\nОбщая строимость корзины = ' + countBasketPrice(basket));
