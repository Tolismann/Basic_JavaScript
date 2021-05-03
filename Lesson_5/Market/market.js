'use strict'
let $basket = document.querySelector('#basket');



let AddBasket = function (product, price, product_quantity) {
    this.product = product;
    this.price = price;
    this.product_quantity = product_quantity;
}

let mango = new AddBasket("Mango", 60, 10);
let lime = new AddBasket("Lime", 40, 9);
let orange = new AddBasket("Orange", 80, 6);
let apple = new AddBasket("Apple", 50, 7);
let kiwi = new AddBasket("Kiwi", 70, 8);

let basket = [];


function countBasketPrice(arr) {
    let basketPrice = 0;
    for (let i = 0; i < arr.length; i++) {
        basketPrice += arr[i].price * arr[i].product_quantity;
    }
    return basketPrice;
}

function sumQuantity(arr) {
    let quantityBasket = 0;
    for (let i = 0; i <arr.length; i++) {
        quantityBasket += arr[i].product_quantity
    }
    return quantityBasket;
}

function deskBasket(arr) {
    $basket.textContent = '';
    let p = document.createElement('p');
    
    if(basket.length !== 0) {
        p.textContent = `Общее количество товаров в корзине ${sumQuantity(basket)}, на сумму ${countBasketPrice(basket)}`;
    } else {
        p.textContent = 'Корзина пуста'
    }
    $basket.appendChild(p);

    // let basketProduct = '';
    // for (let i = 0; i < arr.length; i++) {
    //     basketProduct += (i + 1) + '. ' + arr[i].product + ' - ' + arr[i].price + ' * ' + arr[i].product_quantity + ' = ' + (arr[i].price * arr[i].product_quantity) + '\n';
    // }
    // return basketProduct;
}
// console.log('В корзину добавлен продукт: \n' + deskBasket(basket) + '\n' + '\nОбщая строимость корзины = ' + countBasketPrice(basket) + '\n' + 'Общее количество товара:' + sumQuantity(basket));
// console.log(basket);
basket.push(mango)
basket.push(lime)
basket.push(orange)
basket.push(apple)
basket.push(kiwi)


deskBasket();