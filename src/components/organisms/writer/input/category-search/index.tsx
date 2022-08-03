import { useFormContext } from "react-hook-form";

import SelectedCategory from "@Components/organisms/writer/button/SelectedCategory";
import CategoryInput from "@Components/organisms/writer/input/category-search/CategoryInput";
import { CATEGORY_ID } from "@Constants/text/writer";

import { CreatePostRequestBodyDto } from "@til-log.lab/tilog-api";

const SearchCategory = () => {
  const { watch } = useFormContext<CreatePostRequestBodyDto>();
  if (!watch(CATEGORY_ID)) return <CategoryInput />;
  return <SelectedCategory />;
};
export default SearchCategory;
