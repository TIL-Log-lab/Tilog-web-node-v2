import React from "react";

import CategoryCard from "@Molecules/cards/Category";
import { useGetUserCategoryListQuery } from "@Query/category/useGetUserCategoryListQuery";
import { GetMeResponseDto } from "@til-log.lab/tilog-api";
interface userInfo extends GetMeResponseDto {
  id: number;
}
const CategoryCardList = ({
  selectedCategory,
  userInfo,
}: {
  userInfo: userInfo;
  selectedCategory?: number;
}) => {
  const categoryList = useGetUserCategoryListQuery(userInfo.id);
  if (categoryList.isError) {
    return <div>에러발생!</div>;
  }
  if (categoryList.isLoading) {
    return <div>로딩중...</div>;
  }
  return (
    <div>
      <h2>카테고리 리스트</h2>
      <div className="flex space-x-2">
        {categoryList.isSuccess &&
          categoryList.data.data.list.map((category) => (
            <div key={category.id}>
              <CategoryCard
                selectedCategory={selectedCategory}
                category={category}
                username={userInfo.name}
              />
            </div>
          ))}
      </div>
    </div>
  );
};

export default CategoryCardList;
