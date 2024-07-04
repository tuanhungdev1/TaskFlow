import { useRef, useState } from "react";
import "./App.css";
import TodoItem from "./components/TodoItem";
import { IToDoItem } from "./types";
const App = () => {
  const [todoList, setTodoList] = useState<IToDoItem[]>([
    {
      id: "1",
      name: "Đi học thêm",
      isInportant: true,
    },
    {
      id: "2",
      name: "Đi học võ",
      isInportant: false,
    },
    {
      id: "3",
      name: "Đi chơi với bạn bè",
      isInportant: true,
    },
  ]);

  const inputRef = useRef<HTMLInputElement>(null);

  const todos = todoList.map((todo) => {
    return (
      <TodoItem name={todo.name} key={todo.id} isInportant={todo.isInportant} />
    );
  });

  return (
    <div className="container">
      <input
        ref={inputRef}
        type="text"
        name="add-new-task"
        placeholder="Add new task"
        className="task-input"
        onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => {
          if (e.key === "Enter") {
            const value = e.currentTarget.value;

            setTodoList([
              ...todoList,
              {
                id: crypto.randomUUID(),
                name: value,
                isInportant: true,
              },
            ]);

            if (inputRef.current) {
              inputRef.current.value = "";
            }
          }
        }}
      />
      <div>{todos}</div>
    </div>
  );
};

export default App;
