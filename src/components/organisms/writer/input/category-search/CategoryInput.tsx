import { useRef } from "react";

import { useFormContext } from "react-hook-form";

import Autocomplete from "@Components/organisms/writer/input/category-search/autocomplete";
import { CATEGORY_ID, CATEGORY_PLACEHOLDER } from "@Constants/text/writer";
import useOutsideClickAndEscClickListener from "@Hooks/event-listener/useOutsideClickAndEscClickListener";
import useSearchCategoryName from "@Hooks/react-query/category/useSearchCategoryName";

import CreatePostRequestBodyDto from "@Components/organisms/writer/interface/CreatePostRequestBodyDto";

const CategoryInput = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { isOpen, handleOpen } =
    useOutsideClickAndEscClickListener<HTMLDivElement>(ref);
  const { categoryList, handleChangeCategoryName } = useSearchCategoryName();
  const { register } = useFormContext<CreatePostRequestBodyDto>();

  return (
    <div ref={ref}>
      <input
        {...register(CATEGORY_ID, {
          required: true,
        })}
        autoComplete="off"
        onFocus={handleOpen}
        onChange={handleChangeCategoryName}
        className="w-full p-5"
        placeholder={CATEGORY_PLACEHOLDER.ko}
      />
      {isOpen && <Autocomplete categoryList={categoryList} />}
    </div>
  );
};
export default CategoryInput;
