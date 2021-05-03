'use strict'
const $basket = document.querySelector('#basket');
const $showcasesList = document.querySelector('#showcases-list');
const $popup = document.querySelector('#popup');

const basket = [];
const showcases = [];

function AddBasket(title, price, product_quantity) {
    this.name = title;
    this.price = price;
    this.product_quantity = product_quantity;
}

function Good(title, price) {
    this.name = title;
    this.price = price;
    this.images = [
        './img/mango.jpg',
        './img/lime.jpg',
        './img/orange.jpg',
        './img/apple.jpg',
    ]
}

function countBasketPrice(arr) {
    let basketPrice = 0;
    for (let i = 0; i < arr.length; i++) {
        basketPrice += arr[i].price * arr[i].product_quantity;
    }
    return basketPrice;
}

function sumQuantity(arr) {
    let quantityBasket = 0;
    for (let i = 0; i < arr.length; i++) {
        quantityBasket += arr[i].product_quantity
    }
    return quantityBasket;
}

function drawBasket() {
    $basket.textContent = '';

    const p = document.createElement('p');

    if (basket.length !== 0) {
        p.textContent = `Общее количество товаров в корзине ${sumQuantity(basket)}, на сумму  ${countBasketPrice(basket)} рублей`;
    } else {
        p.textContent = 'Корзина пуста'
    }

    $basket.appendChild(p);
}

function drawShowcases() {
    showcases.forEach(function (good, i) {
        const imagesHtml = good.images.map(function (src) {
            return `<img width="100" src="${src}"></img>`
        }).join('');

        const html = `<div class="good"><h5>${good.name}</h5><p>Стоимость:${good.price}</p>${imagesHtml}<button data-id="${i}">&#43;</button></div>`;
        $showcasesList.insertAdjacentHTML('beforeend', html);
    })
}

document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
        $popup.style.display = 'none';
    }
})

$showcasesList.addEventListener('click', function (e) {
    if (e.target.tagName === 'IMG') {
        $popup.textContent = '';
        $popup.style.display = 'block';
        $popup.insertAdjacentHTML('beforeend', `<img src="${e.target.getAttribute('src')}">`);
    }
});

$showcasesList.addEventListener('click', function (e) {
    if (e.target.tagName === 'BUTTON') {
        const id = Number(e.target.getAttribute('data-id'));
        const good = showcases[id];

        const uniqeId = basket.findIndex(function (item) {
            return good.name == item.name;
        });

        if (uniqeId < 0) {
            basket.push(new AddBasket(good.name, good.price));
        } else {
            basket[uniqeId].product_quantity++;
        }

        drawBasket();
    }
});

showcases.push(new Good('Mango', 30));
showcases.push(new Good('Lime', 40));
showcases.push(new Good('Orange', 50));
showcases.push(new Good('Apple', 20));

basket.push(new AddBasket("Mango", 30, 10));
basket.push(new AddBasket("Lime", 40, 9));
basket.push(new AddBasket("Orange", 50, 6));
basket.push(new AddBasket("Apple", 20, 7));

drawBasket();
drawShowcases();