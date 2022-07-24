import { useQuery } from "react-query";

import api from "@Library/api";

const useGetUserCategoryListQuery = (userId: number) => {
  return useQuery(
    "userCategoryList",
    () => api.categoryService.getUsersCategories(userId),
    {
      retry: 0,
      refetchInterval: false,
      refetchOnWindowFocus: false,
    }
  );
};

export default useGetUserCategoryListQuery;
