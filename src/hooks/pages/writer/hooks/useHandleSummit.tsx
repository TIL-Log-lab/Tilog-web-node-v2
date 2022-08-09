import { SubmitHandler } from "react-hook-form";

import useSetPostMutation from "@Hooks/react-query/post/useSetPostMutation";

import WriterFormTypes from "@Components/modules/writer/interface/writerFormTypes";

// TODO: Toast
const useHandleSummit = (): SubmitHandler<WriterFormTypes> => {
  const mutation = useSetPostMutation();
  return async (object) => {
    mutation.mutate(object);
  };
};

export default useHandleSummit;
