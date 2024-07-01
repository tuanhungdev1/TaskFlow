import "./App.css";
import TodoItem from "./components/TodoItem";
import { IToDoItem } from "./types";
const App = () => {
  const todoList: IToDoItem[] = [
    {
      id: "1",
      name: "Đi học thêm",
    },
    {
      id: "2",
      name: "Đi học võ",
    },
    {
      id: "3",
      name: "Đi chơi với bạn bè",
    },
  ];

  const todos = todoList.map((todo) => {
    return <TodoItem name={todo.name} key={todo.id} />;
  });

  return (
    <div className="container">
      <input
        type="text"
        name="add-new-task"
        placeholder="Add new task"
        className="task-input"
      />
      <div>{todos}</div>
    </div>
  );
};

export default App;
