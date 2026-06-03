import Header from "./components/Header/header";
import Input from "./components/Input/Input";
import { useState } from "react";
import Todo from "./components/todosList/todo";
import Button from "./components/button/Button";
import InputContainer from "./components/inputContainer/inputContainer";

function App() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [todoId, setTodoId] = useState(1);

  const addTodo = () => {
    if (inputValue.trim() === "") {
      return;
    }
    const newTodo = {
      id: todoId,
      title: inputValue,
    };
    setTodoId(todoId + 1);
    setTodos([...todos, newTodo]);
    setInputValue("");
  };

  const deleteTodo = (todoId) => {
    const filteredTodo = todos.filter((todo) => {
      return todo.id !== todoId;
    });

    setTodos(filteredTodo);
  };
  return (
    <div>
      <Header />
      <InputContainer>
        <Input inputValue={inputValue} setInputValue={setInputValue} />
        <Button addTodo={addTodo} />
      </InputContainer>
      <div>
        <ul style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
          {todos.map((todo, index) => {
            return (
              <Todo
                id={todo.id}
                deleteTodo={deleteTodo}
                key={todo.id}
                index={index + 1}
                todoTitle={todo.title}
              ></Todo>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
