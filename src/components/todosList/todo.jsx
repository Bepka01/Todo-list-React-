import Button from "../button/Button";

const Todo = ({ todo, deleteTodo, index }) => {
  return (
    <li className='todo'>
      <p>
        {index} - {todo.title}
      </p>

      <Button className='btn-delete' onClick={() => deleteTodo(todo.id)}>
        Удалить
      </Button>
    </li>
  );
};

export default Todo;
