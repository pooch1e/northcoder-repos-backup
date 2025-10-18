import { useState } from "react";

export function Balance() {
  const [balance, setBalance] = useState(0);

  function handleClick () {
    setBalance(balance + 1);
  }
  return (
    <>
    <p>£{balance}</p>
    <button onClick={handleClick}>Add Cash</button>
    </>
  )
}