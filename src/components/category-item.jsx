import "./category-item.styles.scss";

const CategoryItem = ({ category: { imageURL, title, CTA } }) => {
  return (
    <div className="category-container">
      <div
        className="category-image"
        style={{
          backgroundImage: `url(${imageURL})`,
        }}
      />
      <div className="category-body-container">
        <h2> {title}</h2>
        <h3>{CTA}</h3>
      </div>
    </div>
  );
};

export default CategoryItem;
