import useGetMeQuery from "@Hooks/react-query/user/useGetMeQuery";
import api from "@Library/api";
import httpClient from "@Library/api/httpClient";

const useLogout = () => {
  const { refetch } = useGetMeQuery();
  return () => {
    api.authService.deleteRefreshToken();
    refetch();
    httpClient.http.defaults.headers.common.Authorization = "";
  };
};

export default useLogout;
