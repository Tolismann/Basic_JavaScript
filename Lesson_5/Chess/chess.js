// 1.	Создать функцию, генерирующую шахматную доску. Можно использовать любые html-теги. Доска должна быть верно разлинована на черные и белые ячейки.
//      Строки должны нумероваться числами от 1 до 8, столбцы — латинскими буквами A, B, C, D, E, F, G, H.

'use strict'
function createChess() {
    let chessBlock = document.querySelector('.chess-block');
    let block;
    let flag = true;

    for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 8; j++) {
            if (j == 0) flag = !flag;
            block = document.createElement('div');
            if (flag) block.className = 'block black';
            else block.className = 'block white';

            chessBlock.appendChild(block);
            flag = !flag;
        }
    }

}

createChess();


