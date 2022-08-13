import { useRef } from "react";

import { NO_RESULT_SEARCH } from "@Library/constants/search/index";

import { GetCategoriesResponseDto } from "@til-log.lab/tilog-api";

import AutocompleteContents from "./AutocompleteContents";
import useArrowKeySelector from "./hooks/useArrowKeySelector";

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
      className="z-50 absolute p-3 my-2 mr-8 rounded shadow-sm cursor-default ring-1 max-w-[500px] max-h-[400px] overflow-auto bg-neutral-200 ring-neutral-300 dark:ring-neutral-600 dark:bg-neutral-800"
    >
      {categoryList.length === 0 && <p>{NO_RESULT_SEARCH.ko}</p>}
      {categoryList.map((category, idx) => (
        <li
          ref={(el) => {
            if (el) ref.current[idx] = el;
          }}
          key={category.id}
          className={`p-2 rounded cursor-pointer hover:bg-neutral-100 dark:hover:bg-neutral-700 ${
            index === idx ? "bg-neutral-100 dark:bg-neutral-700" : ""
          }`}
        >
          <AutocompleteContents category={category} />
        </li>
      ))}
    </ul>
  );
};
export default Autocomplete;
