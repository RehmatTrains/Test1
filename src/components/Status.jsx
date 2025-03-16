import React from 'react';

const Status = ({ winner, turn }) => {
  if (winner) {
    return <h2>Player {winner} wins!</h2>;
  } else {
    return <p>Player {turn}'s turn</p>;
  }
};

export default Status;
