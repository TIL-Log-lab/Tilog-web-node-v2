import { useQuery } from "react-query";

import { TilogApiForUser } from "@Api/core";

const useHomeQuery = () => {
  return useQuery(["userInfo"], () => TilogApiForUser.usersControllerGetMe(), {
    retry: 0,
    refetchInterval: false,
    refetchOnWindowFocus: false,
  });
};
export default useHomeQuery;
