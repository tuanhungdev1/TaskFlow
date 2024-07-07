import { useRef, useState } from "react";
import "./App.css";
import TodoItem from "./components/TodoItem";
import { IToDoItem } from "./types";
import Sidebar from "./components/Sidebar";
import FilterPanel from "./components/FilterPanel";
const App = () => {
  const [todoList, setTodoList] = useState<IToDoItem[]>([
    {
      id: "1",
      name: "Đi học thêm",
      isImportant: true,
      isCompleted: false,
      isDeleted: false,
    },
    {
      id: "2",
      name: "Đi học võ",
      isImportant: false,
      isCompleted: true,
      isDeleted: false,
    },
    {
      id: "3",
      name: "Đi chơi với bạn bè",
      isImportant: true,
      isCompleted: false,
      isDeleted: false,
    },
  ]);

  const [selectedFilterId, setSelectedFilterId] = useState("all");

  const [showSidebar, setShowSidebar] = useState(false);

  const [activeTodoItemId, setActiveTodoItemId] = useState<string | null>(null);

  const inputRef = useRef<HTMLInputElement>(null);

  const activeTodoItem = todoList.find((todo) => todo.id === activeTodoItemId);

  const handleCheckedTask = (id: string) => {
    const newTodoList = todoList.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          isCompleted: !item.isCompleted,
        };
      } else {
        return item;
      }
    });

    setTodoList([...newTodoList]);
  };

  const handleShowSidebarClick = (id: string) => {
    setShowSidebar(true);
    setActiveTodoItemId(id);
  };

  const handleUpdateTask = (task: IToDoItem) => {
    const newTodoListUpdated = todoList.map((todo) => {
      if (todo.id === task.id) {
        return {
          ...todo,
          ...task,
        };
      } else {
        return todo;
      }
    });

    setTodoList([...newTodoListUpdated]);
  };

  const todos = todoList
    .filter((item) => {
      switch (selectedFilterId) {
        case "all":
          return true;

        case "completed":
          return item.isCompleted === true;

        case "important":
          return item.isImportant === true;
      }
    })
    .map((todo) => {
      return (
        <TodoItem
          onShowSidebarClick={handleShowSidebarClick}
          name={todo.name}
          key={todo.id}
          isInportant={todo.isImportant}
          id={todo.id}
          isCompleted={todo.isCompleted}
          onCompletedTask={handleCheckedTask}
        />
      );
    });

  return (
    <div className="grid-layout">
      <div className="fillter-panel-box">
        <FilterPanel
          todoList={todoList}
          selectedFilterId={selectedFilterId}
          onSelectedFilter={setSelectedFilterId}
        />
      </div>
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
                  isImportant: true,
                  isCompleted: false,
                  isDeleted: false,
                },
              ]);

              if (inputRef.current) {
                inputRef.current.value = "";
              }
            }
          }}
        />
        <div>{todos}</div>

        {showSidebar && (
          <Sidebar
            key={activeTodoItemId}
            onShowSidebarClick={() => setShowSidebar(false)}
            todoItem={activeTodoItem}
            onUpdateTask={handleUpdateTask}
          />
        )}
      </div>
    </div>
  );
};

export default App;
