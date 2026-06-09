import Header from "./components/Header/header";
import Input from "./components/Input/Input";
import { useState } from "react";
import Todo from "./components/todosList/todo";
import Button from "./components/button/Button";
import InputContainer from "./components/inputContainer/inputContainer";
import UlList from "./components/ullist/ulList";
import buttonStyles from "./components/button/button.module.scss";

import { useTodos } from "./hooks/useTodos";

function App() {
  const [inputValue, setInputValue] = useState("");

  const { todos, addTodo, deleteTodo } = useTodos();

  return (
    <>
      {" "}
      <Header />
      <InputContainer>
        <Input inputValue={inputValue} setInputValue={setInputValue} />

        <Button
          className={buttonStyles.btnAdd}
          onClick={() => {
            addTodo(inputValue);
            setInputValue("");
          }}
        >
          Добавить
        </Button>
      </InputContainer>
      <UlList>
        {todos.map((todo, index) => {
          return (
            <Todo
              key={todo.id}
              todo={todo}
              index={index + 1}
              deleteTodo={deleteTodo}
            />
          );
        })}
      </UlList>
    </>
  );
}

export default App;
