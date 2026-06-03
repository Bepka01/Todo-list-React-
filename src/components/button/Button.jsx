import "./button.scss";

const Button = ({ addTodo }) => {
  return (
    <div>
      <button onClick={addTodo} className='btn-input'>
        Click
      </button>
    </div>
  );
};
export default Button;
