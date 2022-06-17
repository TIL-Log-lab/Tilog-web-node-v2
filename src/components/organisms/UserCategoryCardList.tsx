import React from "react";

import CategoryCard from "@Molecules/cards/Category";
import { useGetUserCategoryListQuery } from "@Query/category/useGetUserCategoryListQuery";

const CategoryCardList = ({
  selectedCategory,
  userId,
}: {
  userId: number;
  selectedCategory?: number;
}) => {
  const userCategoryList = useGetUserCategoryListQuery(userId);
  if (userCategoryList.isError) {
    return <div>에러발생!</div>;
  }
  if (userCategoryList.isLoading) {
    return <div>로딩중...</div>;
  }
  return (
    <div>
      <h2>카테고리 리스트</h2>
      <div className="flex space-x-2">
        {userCategoryList.isSuccess &&
          userCategoryList.data.data.list.map((category) => (
            <div key={category.id}>
              <CategoryCard
                selectedCategory={selectedCategory}
                category={category}
              />
            </div>
          ))}
      </div>
    </div>
  );
};

export default CategoryCardList;
