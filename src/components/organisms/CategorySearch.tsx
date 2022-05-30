import axios from "axios";
import { ChangeEvent, useState } from "react";

import MCategorySelected from "@Molecules/category/Selected";
import MCategoryInput from "@Molecules/category/Input";

const OCategorySearch = () => {
  const [categoryLists, setCategoryLists] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleSearchCategory = async (event: ChangeEvent<HTMLInputElement>) => {
    if (event.currentTarget.value !== "") {
      const { data } = await axios.get(
        `https://api.tilog.io/categories/search?categoryName=${event.currentTarget.value}`
      );
      setCategoryLists(data);
    }
  };

  const handleResetCategorySearch = () => {
    setSelectedCategory("");
    setCategoryLists(null);
  };

  if (!!selectedCategory) {
    return (
      <MCategorySelected
        onClick={handleResetCategorySearch}
        selectedCategory={selectedCategory}
      />
    );
  }
  return (
    <MCategoryInput
      onChange={handleSearchCategory}
      setSelectedCategory={setSelectedCategory}
      categoryLists={categoryLists}
    />
  );
};
export default OCategorySearch;
