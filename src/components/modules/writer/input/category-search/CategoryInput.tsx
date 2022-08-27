import { useRef } from "react";

import { useFormContext } from "react-hook-form";

import Autocomplete from "@Components/modules/writer/input/category-search/autocomplete";
import { CATEGORY_ID, CATEGORY_PLACEHOLDER } from "@Library/constants/writer";
import useOutsideClickAndEscClickListener from "@Hooks/event-listener/useOutsideClickAndEscClickListener";
import useSearchCategoryName from "@Hooks/react-query/category/useSearchCategoryName";

import WriterFormTypes from "@Components/modules/writer/interface/writerFormTypes";

const CategoryInput = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { isOpen, handleOpen } =
    useOutsideClickAndEscClickListener<HTMLDivElement>(ref);
  const { categoryList, handleChangeCategoryName } = useSearchCategoryName();
  const { register } = useFormContext<WriterFormTypes>();

  return (
    <div ref={ref}>
      <input
        {...register(CATEGORY_ID, {
          required: true,
        })}
        autoComplete="off"
        onFocus={handleOpen}
        onChange={handleChangeCategoryName}
        className="w-full p-5 bg-white dark:bg-neutral-800 text-neutral-800 dark:text-white"
        placeholder={CATEGORY_PLACEHOLDER.ko}
      />
      {isOpen && <Autocomplete categoryList={categoryList} />}
    </div>
  );
};
export default CategoryInput;
