import { useMutation } from "react-query";

import clientSideAuthentication from "@Auth/clientSideAuthentication";

//TODO: 메서드명 변경해야함.
export const useWrappingToastAuthMutation = <T>(
  callback: (data: T) => void
) => {
  return useMutation(
    async (data: T) => await clientSideAuthentication(() => callback(data))
  );
};
