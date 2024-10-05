document.addEventListener('DOMContentLoaded', function() {
    const gameBoard = document.querySelector('.game-board');
    const gameStatus = document.querySelector('#game-status');
    let currentPlayer = 'X';
    let gameWon = false;
    let boardState = Array(9).fill(null);

    gameBoard.addEventListener('click', function(event) {
        if (event.target.tagName === 'DIV' && !gameWon) {
            const index = event.target.id;
            if (!boardState[index]) {
                boardState[index] = currentPlayer;
                event.target.textContent = currentPlayer;
                checkWin();
                currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
                gameStatus.textContent = `${currentPlayer}'s turn`;
            }
        }
    });

    function checkWin() {
        const winConditions = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8], // horizontal
            [0, 3, 6], [1, 4, 7], [2, 5, 8], // vertical
            [0, 4, 8], [2, 4, 6] // diagonal
        ];
        winConditions.forEach(condition => {
            if (boardState[condition[0]] && boardState[condition[0]] === boardState[condition[1]] && boardState[condition[1]] === boardState[condition[2]]) {
                gameWon = true;
                gameStatus.textContent = `${boardState[condition[0]]} wins!`;
            }
        });
    }
});
