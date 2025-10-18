import { useState } from 'react';

function Counter({ title }) {
  let [count, updateCount] = useState(0);

  function incrementCount() {
    updateCount(count + 1);
  }

  function decrementCount() {
    updateCount(count - 1);
    if (count <= 0) {
      updateCount(0);
    }
  }

  function reset() {
    updateCount(0);
  }

  return (
    <section>
      <h2>{title}</h2>
      <p>Count: {count}</p>
      <button onClick={incrementCount}>+</button>
      <button onClick={decrementCount}>-</button>
      <button onClick={reset}>Reset</button>
    </section>
  );
}

export default Counter;
