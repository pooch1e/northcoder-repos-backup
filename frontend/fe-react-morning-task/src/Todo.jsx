import { useState } from "react";
export const Todo = () => {
  const [todos, setTodos] = useState(['code on day 0', 'code on day 1']);

  const addTodo = () => {
    setTodos((currTodos) => {
      return [...currTodos, `code on day ${currTodos.length}`];
    });
  };

  return (
    <div>
      <button onClick={() => addTodo()}>Add Todo</button>
      <ul>
        {todos.map((todo) => {
          return <li key={todo}>{todo}</li>;
        })}
      </ul>
    </div>
  );
};

