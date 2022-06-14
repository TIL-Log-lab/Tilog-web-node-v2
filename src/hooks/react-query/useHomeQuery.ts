import { getMe } from "@Api/adapter";
import { useQuery } from "react-query";

const useHomeQuery = () => {
  return useQuery(["userInfo"], () => getMe(), {
    retry: 0,
    refetchInterval: false,
    refetchOnWindowFocus: false,
  });
};
export default useHomeQuery;
