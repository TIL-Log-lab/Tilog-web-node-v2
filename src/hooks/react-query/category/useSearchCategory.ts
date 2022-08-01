import useAllGetCategoryListQuery from "@Hooks/react-query/category/useAllGetCategoryListQuery";

import { GetCategoriesItem } from "@til-log.lab/tilog-api";

const useSearchCategory = () => {
  const { data } = useAllGetCategoryListQuery();

  const searchCategory = (
    categoryName?: GetCategoriesItem["categoryName"],
    categoryId?: GetCategoriesItem["id"]
  ): GetCategoriesItem[] | null => {
    if (!data) return null;
    const categoryList = data.data.list;

    if (categoryName) {
      return categoryList.filter((v) => {
        const filtered = v.categoryName.includes(categoryName);
        return filtered;
      });
    }

    if (categoryId) {
      return categoryList.filter((v) => {
        const filtered = v.id === categoryId;
        return filtered;
      });
    }

    return categoryList;
  };
  return searchCategory;
};

export default useSearchCategory;
