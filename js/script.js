const board = document.getElementById('board');
const cells = document.getElementsByClassName('cell');
let currentPlayer = 'X';
let gameOver = false;

function checkWin() {
    const winPatterns = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ];

    for (const pattern of winPatterns) {
        const [a, b, c] = pattern;
        if (cells[a].innerText && cells[a].innerText === cells[b].innerText && cells[a].innerText === cells[c].innerText) {
            gameOver = true;
            return cells[a].innerText;
        }
    }

    if (!Array.from(cells).some(cell => cell.innerText === '')) {
        gameOver = true;
        return 'draw';
    }

    return null;
}

function placeMark(cell) {
    if (!cell.innerText && !gameOver) {
        cell.innerText = currentPlayer;
        const winner = checkWin();
        if (winner) {
            if (winner === 'draw') {
                alert('Empate!');
            } else {
                alert(`Jogador ${winner} venceu!`);
            }
        } else {
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        }
    }
}

function resetBoard() {
    Array.from(cells).forEach(cell => cell.innerText = '');
    currentPlayer = 'X';
    gameOver = false;
}
