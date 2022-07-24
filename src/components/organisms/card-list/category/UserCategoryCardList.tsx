import React from "react";

import CategoryList from "@Components/organisms/card-list/category/CategoryCardList";
import useGetUserCategoryListQuery from "@Query/category/useGetUserCategoryListQuery";

const UserCategoryCardList = ({ userId }: { userId: number }) => {
  const categoryList = useGetUserCategoryListQuery(userId);
  return <CategoryList categoryList={categoryList} />;
};

export default UserCategoryCardList;
