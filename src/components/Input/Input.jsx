import styles from "./input.module.scss";

const Input = ({ inputValue, setInputValue }) => {
  return (
    <div>
      <input
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
        className={styles.input}
        type='text'
        placeholder='Добавить задачу'
      />
    </div>
  );
};

export default Input;
