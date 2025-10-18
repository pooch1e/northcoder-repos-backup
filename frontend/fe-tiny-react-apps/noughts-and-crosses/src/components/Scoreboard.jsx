import { useState, useEffect } from "react";
export const Scoreboard = ({ setPlayerMove, winner }) => {
  console.log(winner)
  const [countX, setCountX] = useState(0);
  const [count0, setCount0] = useState(0);

  useEffect(() => {
    if (winner === 'X') {
      setCountX(prev => prev + 1)
    } else if (winner === '0') {
      setCount0(prev => prev + 1);
    }
  }, [winner])



  function resetButton() {
    setPlayerMove('');
    const boxes = document.querySelectorAll('.box');
    boxes.forEach((box) => {
      box.textContent = '';
      delete box.dataset.player;
    });
  }


  return (
    <>
      <h2>Scoreboard</h2>
      <p>Player X</p>
      <p id="PlayerX-score">{countX}</p>
      <p>Player 0</p>
      <p id="Player0-score">{count0}</p>

      <button onClick={resetButton}>Reset Game</button>
    </>
  );
};
