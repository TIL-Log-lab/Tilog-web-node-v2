import { useFormContext } from "react-hook-form";

import useSearchCategory from "@Hooks/react-query/category/useSearchCategory";

import WriterFormTypes from "@Components/modules/writer/interface/writerFormTypes";

const useSearchCategoryId = () => {
  const { getValues } = useFormContext<WriterFormTypes>();
  const searchCategory = useSearchCategory();

  return searchCategory(undefined, getValues("categoryId"));
};

export default useSearchCategoryId;
