import { useMutation } from "react-query";

import clientSideAuthentication from "@Auth/clientSideAuthentication";
import ExceptionInterface from "@Api/errors/interfaces";

export const useAuthMutation = <T>(callback: (data: T) => void) => {
  return useMutation<void, ExceptionInterface, T>((data: T) =>
    clientSideAuthentication(() => callback(data))
  );
};
