import { getUserCategory } from "@Api/adapter";
import { useQuery } from "react-query";

export const useGetUserCategoryListQuery = (userId: number) => {
  return useQuery("userCategoryList", () => getUserCategory(userId), {
    retry: 0,
    refetchInterval: false,
    refetchOnWindowFocus: false,
  });
};
