import { useRef } from "react";

import AutocompleteContents from "@Components/molecules/input/writer/category-search/autocomplete/AutocompleteContents";
import useArrowKeySelector from "@Components/molecules/input/writer/category-search/autocomplete/hooks/useArrowKeySelector";

import { GetCategoriesResponseDto } from "@til-log.lab/tilog-api";

const Autocomplete = ({
  categoryList,
}: {
  categoryList: GetCategoriesResponseDto["list"] | null;
}) => {
  const ref = useRef<HTMLLIElement[]>([]);
  const { index, resetIndex } = useArrowKeySelector(categoryList, ref);

  if (!categoryList) return null;
  return (
    <ul
      onMouseEnter={resetIndex}
      className="z-50 absolute p-3 my-2 mx-3 rounded shadow-sm cursor-default ring-1 w-[400px] max-h-[400px] overflow-auto bg-neutral-200 ring-neutral-300 dark:ring-neutral-600 dark:bg-neutral-800"
    >
      {categoryList.length === 0 && <li>검색 결과가 없습니다.</li>}
      {categoryList.map((category, idx) => (
        <li
          ref={(el) => (ref.current[idx] = el)}
          key={category.id}
          className={`p-2 rounded cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-500 ${
            index === idx ? "bg-gray-100 dark:bg-gray-500" : ""
          }`}
        >
          <AutocompleteContents category={category} />
        </li>
      ))}
    </ul>
  );
};
export default Autocomplete;
