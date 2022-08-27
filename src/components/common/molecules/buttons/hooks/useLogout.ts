import useGetMeQuery from "@Hooks/react-query/user/useGetMeQuery";
import api from "@Library/api";
import { tilogApi } from "@Library/api/http-client";

const useLogout = () => {
  const { refetch } = useGetMeQuery();
  return () => {
    api.authService.deleteRefreshToken();
    refetch();
    tilogApi.http.defaults.headers.common.Authorization = "";
  };
};

export default useLogout;
