import { useFormContext } from "react-hook-form";

import { TITLE } from "@Constants/text/writer";

import { CreatePostRequestBodyDto } from "@til-log.lab/tilog-api";

const useFormTitleWatching = () => {
  const { watch } = useFormContext<CreatePostRequestBodyDto>();
  return watch(TITLE);
};
export default useFormTitleWatching;
