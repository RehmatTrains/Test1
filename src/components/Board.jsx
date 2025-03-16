import React from 'react';
import Cell from './Cell';

const Board = ({ board, handleMove }) => {
  return (
    <div className="board">
      {board.map((cell, index) => (
        <Cell key={index} value={cell} onClick={() => handleMove(index)} />
      ))}
    </div>
  );
};

export default Board;
