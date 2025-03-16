import React, { useState } from 'react';
import Board from './Board';
import Status from './Status';

const Game = () => {
  const [board, setBoard] = useState(['', '', '', '', '', '', '', '', '']);
  const [turn, setTurn] = useState('X');
  const [winner, setWinner] = useState(null);

  const handleMove = (index) => {
    if (winner || board[index] !== '') return;

    const newBoard = [...board];
    newBoard[index] = turn;
    setBoard(newBoard);

    if (checkWinner(newBoard)) {
      setWinner(turn);
    } else {
      setTurn(turn === 'X' ? 'O' : 'X');
    }
  };

  const checkWinner = (board) => {
    const winningCombinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < winningCombinations.length; i++) {
      const [a, b, c] = winningCombinations[i];
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return true;
      }
    }
    return false;
  };

  const resetGame = () => {
    setBoard(['', '', '', '', '', '', '', '', '']);
    setTurn('X');
    setWinner(null);
  };

  return (
    <div className="game">
      <h1>Tic Tac Toe</h1>
      {winner && (
        <div>
          <Status winner={winner} turn={turn} />
          <button onClick={resetGame}>Play Again</button>
        </div>
      )}
      {!winner && (
        <div>
          <Status winner={winner} turn={turn} />
          <Board board={board} handleMove={handleMove} />
        </div>
      )}
    </div>
  );
};

export default Game;
