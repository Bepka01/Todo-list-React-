import styles from "./todo.module.scss";
import buttonStyles from "../button/button.module.scss";
import Button from "../button/Button";

const Todo = ({ todo, deleteTodo, index }) => {
  return (
    <li className={styles.todo}>
      <p>
        {index} - {todo.title}
      </p>

      <Button
        className={buttonStyles.btnDelete}
        onClick={() => deleteTodo(todo.id)}
      >
        Удалить
      </Button>
    </li>
  );
};

export default Todo;
