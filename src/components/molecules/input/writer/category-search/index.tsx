import { useFormContext } from "react-hook-form";

import CategoryInput from "@Components/molecules/input/writer/category-search/CategoryInput";
import SelectedCategory from "@Components/molecules/input/writer/category-search/SelectedCategory";

import { CreatePostRequestBodyDto } from "@til-log.lab/tilog-api";

const SearchCategory = () => {
  const { watch } = useFormContext<CreatePostRequestBodyDto>();
  if (!watch("categoryId")) return <CategoryInput />;
  return <SelectedCategory />;
};
export default SearchCategory;
