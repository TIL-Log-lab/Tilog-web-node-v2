import { useRef } from "react";

import CategoryAutocomplete from "@Components/molecules/input/writer/category-search/autocomplete";
import useSearchCategoryName from "@Components/molecules/input/writer/category-search/hooks/useSearchCategoryName";
import useOutsideClickAndEscClickListener from "@Hooks/event-listener/useOutsideClickAndEscClickListener";

const CategoryInput = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { isOpen, handleOpen } =
    useOutsideClickAndEscClickListener<HTMLDivElement>(ref);
  const { categoryList, handleChangeCategoryName } = useSearchCategoryName();

  return (
    <div ref={ref}>
      <input
        onClick={handleOpen}
        onFocus={handleOpen}
        onChange={handleChangeCategoryName}
        className="w-full p-5"
        placeholder="카테고리 입력"
      />
      {isOpen && <CategoryAutocomplete categoryList={categoryList} />}
    </div>
  );
};
export default CategoryInput;
