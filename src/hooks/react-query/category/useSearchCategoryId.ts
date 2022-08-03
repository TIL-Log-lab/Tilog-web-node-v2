import { useFormContext } from "react-hook-form";

import useSearchCategory from "@Hooks/react-query/category/useSearchCategory";

import { CreatePostRequestBodyDto } from "@til-log.lab/tilog-api";

const useSearchCategoryId = () => {
  const { getValues } = useFormContext<CreatePostRequestBodyDto>();
  const searchCategory = useSearchCategory();

  return searchCategory(undefined, getValues("categoryId"));
};

export default useSearchCategoryId;
