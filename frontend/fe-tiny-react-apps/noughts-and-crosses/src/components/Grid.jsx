import { useState } from 'react';
import { Scoreboard } from './Scoreboard';

export const Grid = () => {
  const [playerMove, setPlayerMove] = useState('');
  const [winner, setWinner] = useState(null);
  let player = playerMove;

  function handleClickTheBox(event) {
    const box = event.target;

    let currentMove;
    if (box.dataset.player) return;

    if (player === '' || player === 'X') {
      currentMove = 'X';
      setPlayerMove('0');
    } else {
      currentMove = '0';
      setPlayerMove('X');
    }

    box.textContent = currentMove;
    box.dataset.player = currentMove;

    determineWinner();
  }

  function determineWinner() {
    const boxes = document.querySelectorAll('.box');
    const moves = Array.from(boxes).map((box) => box.dataset.player || '');

    const winPatterns = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let pattern of winPatterns) {
      const [a, b, c] = pattern;
      if (moves[a] && moves[a] === moves[b] && moves[a] === moves[c]) {
        alert(`${moves[a]} wins!`);
        if (moves[a] === 'X') {
          setWinner('X');
        }
        if (moves[a] === '0') {
          setWinner('0');
        }
      }
    }
    if (moves.every((cell) => cell !== '')) {
      alert("It's a draw!");
      setWinner('draw');
    }
  }

  return (
    <>
      <h2>Grid</h2>
      <section className="grid-container">
        <div className="box" id="1" onClick={handleClickTheBox}></div>
        <div className="box" id="2" onClick={handleClickTheBox}></div>
        <div className="box" id="3" onClick={handleClickTheBox}></div>
        <div className="box" id="4" onClick={handleClickTheBox}></div>
        <div className="box" id="5" onClick={handleClickTheBox}></div>
        <div className="box" id="6" onClick={handleClickTheBox}></div>
        <div className="box" id="7" onClick={handleClickTheBox}></div>
        <div className="box" id="8" onClick={handleClickTheBox}></div>
        <div className="box" id="9" onClick={handleClickTheBox}></div>
      </section>
      <Scoreboard setPlayerMove={setPlayerMove} winner={winner} />
    </>
  );
};
