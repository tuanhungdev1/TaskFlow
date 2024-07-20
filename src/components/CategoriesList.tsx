import { useMemo } from "react";
import { CatigoriesListItem } from "../constants";
import { useAppContext } from "../context/AppContext";
import "./CategoriesList.css";

interface CategoryCount {
  personal: number;
  company: number;
  travel: number;
  ideal: number;
  [key: string]: number;
}

const CategoriesList = () => {
  const { selectedCategoryId, setCategoryId, todoList } = useAppContext();

  const countSomeCategories = useMemo(() => {
    return todoList.reduce<CategoryCount>(
      (prev, curr) => ({
        ...prev,
        [curr.categoryId]: prev[curr.categoryId] + 1,
      }),
      {
        personal: 0,
        company: 0,
        travel: 0,
        ideal: 0,
      }
    );
  }, [todoList]);

  console.log(selectedCategoryId);
  return (
    <div className="category">
      <span className="category-title">Categories</span>
      <div className="category-container">
        {CatigoriesListItem.map((item) => {
          return (
            <div
              key={item.id}
              className="category-list"
              onClick={() => setCategoryId(item.id)}
            >
              <div className="category-name">
                {item.icon} <span>{item.title}</span>
              </div>

              <span className="category-amount">
                {countSomeCategories[item.id]}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CategoriesList;
