import { SubmitHandler } from "react-hook-form";

import useSetPostMutation from "@Hooks/react-query/post/";

import { CreatePostRequestBodyDto } from "@til-log.lab/tilog-api";

const useHandleSummit = (): SubmitHandler<CreatePostRequestBodyDto> => {
  const mutation = useSetPostMutation();
  return async (object) => {
    mutation.mutate(object);
  };
};

export default useHandleSummit;
