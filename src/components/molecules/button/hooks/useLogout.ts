import useGetMe from "@Hooks/react-query/useGetMe";
import api from "@Library/api";
import httpClient from "@Library/api/httpClient";

const useLogout = () => {
  const { refetch } = useGetMe();
  return () => {
    api.authService.deleteRefreshToken();
    refetch();
    httpClient.http.defaults.headers.common.Authorization = "";
  };
};

export default useLogout;
