const Input = ({ inputValue, setInputValue }) => {
  return (
    <div>
      <input
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
        className='input'
        type='text'
        placeholder='Добавить задачу'
      />
    </div>
  );
};

export default Input;
