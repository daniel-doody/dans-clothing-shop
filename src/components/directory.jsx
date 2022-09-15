import CategoryItem from "./category-item";

import "./directory-styles.scss";

const Directory = ({ categories2 }) => {
  return (
    <div className="directory-container">
      {categories2.map((category) => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </div>
  );
};

export default Directory;
