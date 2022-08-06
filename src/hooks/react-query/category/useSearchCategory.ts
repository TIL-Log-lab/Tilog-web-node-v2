import useAllGetCategoryListQuery from "@Hooks/react-query/category/useAllGetCategoryListQuery";

import { GetCategoriesItem } from "@til-log.lab/tilog-api";

const useSearchCategory = () => {
  const { data } = useAllGetCategoryListQuery();

  return (
    categoryName?: GetCategoriesItem["categoryName"],
    categoryId?: GetCategoriesItem["id"]
  ): GetCategoriesItem[] | null => {
    if (!data) return null;
    const categoryList = data.data.list;

    if (categoryName) {
      return categoryList.filter((v) => v.categoryName.includes(categoryName));
    }

    if (categoryId) {
      return categoryList.filter((v) => v.id === categoryId);
    }

    return categoryList;
  };
};

export default useSearchCategory;
