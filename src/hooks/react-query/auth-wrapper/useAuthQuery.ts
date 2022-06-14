import { QueryKey, useQuery, UseQueryOptions } from "react-query";

import clientSideAuthentication from "@Auth/clientSideAuthentication";

import ExceptionInterface from "@Api/errors/interfaces";

const useAuthQuery = <Response>(
  key: QueryKey,
  callback: () => Response,
  options?: UseQueryOptions<Response, ExceptionInterface, Response>
) => {
  return useQuery(key, () => clientSideAuthentication(callback), options);
};
export default useAuthQuery;
