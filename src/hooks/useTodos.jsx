import { useState } from "react";

export const useTodos = () => {
  const [todos, setTodos] = useState([]);
  const [todoId, setTodoId] = useState(1);

  const addTodo = (inputValue, setInputValue) => {
    if (inputValue.trim() === "") {
      return;
    }

    const newTodo = {
      id: todoId,
      title: inputValue,
    };

    setTodos((prev) => [...prev, newTodo]);
    setTodoId((prev) => prev + 1);

    setInputValue("");
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
