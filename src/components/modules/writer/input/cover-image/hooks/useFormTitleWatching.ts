import { useFormContext } from "react-hook-form";

import { TITLE } from "@Constants/writer";

import WriterFormTypes from "@Components/modules/writer/interface/writerFormTypes";

const useFormTitleWatching = () => {
  const { watch } = useFormContext<WriterFormTypes>();
  return watch(TITLE);
};
export default useFormTitleWatching;
