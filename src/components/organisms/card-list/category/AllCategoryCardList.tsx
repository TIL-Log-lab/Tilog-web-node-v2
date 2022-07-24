import React from "react";

import CategoryList from "@Components/organisms/card-list/category/CategoryCardList";
import useGetCategoryListQuery from "@Query/category/useGetCategoryListQuery";

const AllCategoryCardList = () => {
  const categoryList = useGetCategoryListQuery();
  return <CategoryList categoryList={categoryList} />;
};

export default AllCategoryCardList;
