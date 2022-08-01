import { useFormContext } from "react-hook-form";

import { CreatePostRequestBodyDto } from "@til-log.lab/tilog-api";

const useFormTitleWatching = () => {
  const { watch } = useFormContext<CreatePostRequestBodyDto>();
  return watch("title");
};
export default useFormTitleWatching;
