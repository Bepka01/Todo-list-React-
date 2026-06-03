import "./btnDelete.scss";

export const BtnDelete = ({ deleteTodo, id }) => {
  return (
    <div>
      <button onClick={() => deleteTodo(id)} className='btn-delete'>
        Удалить
      </button>
    </div>
  );
};
