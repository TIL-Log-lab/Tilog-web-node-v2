import { useMutation } from "react-query";

import clientSideAuthentication from "@Auth/clientSideAuthentication";

export const useAuthMutation = <T>(callback: (data: T) => void) => {
  return useMutation((data: T) =>
    clientSideAuthentication(() => callback(data))
  );
};
