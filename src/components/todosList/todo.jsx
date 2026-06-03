import "./todo.scss";
import { BtnDelete } from "../btnDelete/BtnDelete";

const Todo = ({ todoTitle, id, deleteTodo, index }) => {
  return (
    <li className='todo'>
      <h1>
        {index} - {todoTitle}
      </h1>
      <BtnDelete id={id} deleteTodo={deleteTodo} />
    </li>
  );
};
export default Todo;
