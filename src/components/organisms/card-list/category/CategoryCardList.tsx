import { AxiosResponse } from "axios";
import { UseQueryResult } from "react-query";

import CategorySortCard from "@Components/molecules/card/category/CategorySortCard";

import {
  GetCategoriesResponseDto,
  GetUserCategoriesResponseDto,
} from "@til-log.lab/tilog-api";

const CategoryList = ({
  categoryList,
}: {
  categoryList: UseQueryResult<
    AxiosResponse<GetCategoriesResponseDto | GetUserCategoriesResponseDto, any>,
    unknown
  >;
}) => {
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
              <CategorySortCard categoryName={category.categoryName} />
            </div>
          ))}
      </div>
    </div>
  );
};

export default CategoryList;
