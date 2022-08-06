import { ChangeEvent, useState } from "react";

import useSearchCategory from "@Hooks/react-query/category/useSearchCategory";

const useSearchCategoryName = () => {
  const [categoryName, setCategoryName] = useState("");
  const searchCategory = useSearchCategory();

  const handleChangeCategoryName = ({
    target: { value },
  }: ChangeEvent<HTMLInputElement>) => {
    setCategoryName(value);
  };

  return {
    categoryList: searchCategory(categoryName),
    handleChangeCategoryName,
  };
};

export default useSearchCategoryName;
