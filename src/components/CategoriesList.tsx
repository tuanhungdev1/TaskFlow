import { CatigoriesListItem } from "../constants";
import "./CategoriesList.css";

const CategoriesList = () => {
  return (
    <div className="category">
      <span className="category-title">Categories</span>
      <div className="category-container">
        {CatigoriesListItem.map((item) => {
          return (
            <div key={item.id} className="category-list">
              <div className="category-name">
                {item.icon} <span>{item.title}</span>
              </div>

              <span className="category-amount">{item.amount}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CategoriesList;
