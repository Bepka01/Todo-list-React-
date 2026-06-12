import { useState } from "react";
import { v4 as uuid } from "uuid";

export const useTodos = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (inputValue) => {
    if (inputValue.trim() === "") {
      return;
    }

    const newTodo = {
      id: uuid(),
      title: inputValue,
    };

    setTodos((prev) => [...prev, newTodo]);
  };

  const deleteTodo = (todoId) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== todoId));
  };

  return {
    todos,
    addTodo,
    deleteTodo,
  };
};
