"use strict";
function createChessBoard(size) {
    let board = '';
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            if ((i + j) % 2 === 0) {
                board += '██';
            }
            else {
                board += '  ';
            }
        }
        board += '\n';
    }
    return board;
}
const boardSize = 8;
console.log(createChessBoard(boardSize));
