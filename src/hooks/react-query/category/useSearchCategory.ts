import useGetCategoryQuery from "@Hooks/react-query/category/useGetCategoryQuery";

import {
  GetCategoriesItem,
  GetUserCategoriesItem,
} from "@til-log.lab/tilog-api";

const useSearchCategory = () => {
  const { data } = useGetCategoryQuery();

  return (
    categoryName?: GetUserCategoriesItem["categoryName"],
    categoryId?: string
  ): GetCategoriesItem[] | null => {
    if (!data) return null;
    const categoryList = data.data.list;

    if (categoryName) {
      return categoryList.filter((v) => v.categoryName.includes(categoryName));
    }

    if (categoryId) {
      return categoryList.filter((v) => {
        return v.id === parseInt(categoryId, 10);
      });
    }

    return categoryList;
  };
};

export default useSearchCategory;
