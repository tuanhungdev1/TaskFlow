import { useMemo, useRef, useState } from "react";
import "./App.css";
import TodoItem from "./components/TodoItem";

import Sidebar from "./components/Sidebar";
import FilterPanel from "./components/FilterPanel";
import { useAppContext } from "./context/AppContext";
const App = () => {
  const [selectedFilterId, setSelectedFilterId] = useState("all");

  const [showSidebar, setShowSidebar] = useState(false);

  const [activeTodoItemId, setActiveTodoItemId] = useState<string | null>(null);

  const [searchValue, setSearchValue] = useState("");

  const inputRef = useRef<HTMLInputElement>(null);

  const { todoList } = useAppContext();

  const activeTodoItem = todoList.find((todo) => todo.id === activeTodoItemId);

  const {
    selectedCategoryId,
    handleCheckedTask,
    hanldeAddTask,
    handleUpdateTask,
  } = useAppContext();

  const handleSearchValueChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setSearchValue(e.target.value);
  };

  const handleShowSidebarClick = (id: string) => {
    setShowSidebar(true);
    setActiveTodoItemId(id);
  };

  const todos = useMemo(() => {
    return todoList.filter((item) => {
      if (!item.categoryId.includes(selectedCategoryId)) {
        return false;
      }
      if (!item.name.includes(searchValue)) {
        return false;
      }
      switch (selectedFilterId) {
        case "all":
          return true;

        case "completed":
          return item.isCompleted === true;

        case "important":
          return item.isImportant === true;
      }
    });
  }, [todoList, selectedFilterId, searchValue, selectedCategoryId]);

  return (
    <div className="grid-layout">
      <div className="fillter-panel-box">
        <FilterPanel
          todoList={todoList}
          selectedFilterId={selectedFilterId}
          onSelectedFilter={setSelectedFilterId}
          searchValue={searchValue}
          onSearchChange={handleSearchValueChange}
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
              hanldeAddTask({
                id: crypto.randomUUID(),
                name: value,
                isImportant: true,
                isCompleted: false,
                isDeleted: false,
                categoryId: "personal",
              });

              if (inputRef.current) {
                inputRef.current.value = "";
              }
            }
          }}
        />
        <div>
          {todos.map((todo) => {
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
          })}
        </div>

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
