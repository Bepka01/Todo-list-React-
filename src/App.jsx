import Header from "./components/Header/header";
import Input from "./components/Input/Input";
import { useState } from "react";
import Todo from "./components/todosList/todo";
import Button from "./components/button/Button";
import InputContainer from "./components/inputContainer/inputContainer";

import { useTodos } from "./hooks/useTodos";

function App() {
  const [inputValue, setInputValue] = useState("");

  const { todos, addTodo, deleteTodo } = useTodos();

  return (
    <div>
      <Header />

      <InputContainer>
        <Input inputValue={inputValue} setInputValue={setInputValue} />

        <Button addTodo={() => addTodo(inputValue, setInputValue)} />
      </InputContainer>

      <ul style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
        {todos.map((todo, index) => {
          return (
            <Todo
              key={todo.id}
              id={todo.id}
              index={index + 1}
              todoTitle={todo.title}
              deleteTodo={deleteTodo}
            />
          );
        })}
      </ul>
    </div>
  );
}

export default App;
