import { useFormContext } from "react-hook-form";

import SelectedCategory from "@Components/modules/writer/button/SelectedCategory";
import CategoryInput from "@Components/modules/writer/input/category-search/CategoryInput";
import { CATEGORY_ID } from "@Library/constants/writer";

import WriterFormTypes from "@Components/modules/writer/interface/writerFormTypes";

const SearchCategory = () => {
  const { watch } = useFormContext<WriterFormTypes>();

  if (!watch(CATEGORY_ID)) return <CategoryInput />;
  return <SelectedCategory />;
};
export default SearchCategory;
