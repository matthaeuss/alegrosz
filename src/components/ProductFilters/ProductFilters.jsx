import { useState, useEffect } from "react";
import { handleDataFromAPI } from "../../helpers/api";

function ProductFilters({ dispatch }) {
  const [categories, setCategories] = useState([]);
  const [userCategory, setUserCategory] = useState(0);

  useEffect(() => {
    handleDataFromAPI({ endpoint: "v1/categories" }).then((response) =>
      setCategories(response)
    );
  }, []);

  function handleCategory(event) {
    setUserCategory(event.target.value);
    dispatch({ type: "category", payload: parseInt(event.target.value) });
  }

  return (
    <aside>
      <label htmlFor="category">Category</label>
      <select
        data-cy="categoryFilter"
        name="category"
        id="category"
        value={userCategory}
        onChange={handleCategory}
      >
        <option value={0}>---</option>
        {categories.map((category) => (
          <option key={category.id} value={category.id}>
            {category.name}
          </option>
        ))}
      </select>
    </aside>
  );
}

export default ProductFilters;
