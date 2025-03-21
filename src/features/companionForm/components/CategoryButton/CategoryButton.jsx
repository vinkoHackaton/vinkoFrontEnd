import "./CategoryButton.css"
const CategoryButton = (props) => {
  const { category, selectedCategories, handleCategoryChange } = props;

  return (
    <>
      <button
        type="button"
        key={category}
        className={`category-button ${
          selectedCategories.includes(category) ? "selected" : ""
        }`}
        onClick={() => handleCategoryChange(category)}
      >
        {category}
      </button>
    </>
  );
};

export default CategoryButton;
