interface Props {
  name: string;
}

const TodoItem = ({ name }: Props) => {
  return (
    <div className="todo-item">
      <p className="todo-item-text">{name}</p>
    </div>
  );
};

export default TodoItem;
