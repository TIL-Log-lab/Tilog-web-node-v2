import { QueryKey, useQuery, UseQueryOptions } from "react-query";

import clientSideAuthentication from "@Auth/clientSideAuthentication";

import ExceptionInterface from "@Api/errors/interfaces";

const useAuthQuery = <Response>(
  key: QueryKey,
  callback: () => Promise<Response>,
  options?: UseQueryOptions<Response, ExceptionInterface, Response>
) => {
  return useQuery(
    key,
    async () => await clientSideAuthentication(callback),
    options
  );
};
export default useAuthQuery;
