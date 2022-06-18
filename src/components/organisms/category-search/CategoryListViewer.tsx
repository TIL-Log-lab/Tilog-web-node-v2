import { Dispatch, SetStateAction } from "react";

import TechIcons from "@TechIcons/TechIcons";
import { GetCategoriesItem } from "@til-log.lab/tilog-api";
import { UseFormSetValue } from "react-hook-form";
import EditorType from "@Organisms/editor/interface/EditorType";

interface CategoryListViewerProps {
  setValue: UseFormSetValue<EditorType>;
  categoryList: Array<GetCategoriesItem>;
  setSelectedCategory: Dispatch<SetStateAction<GetCategoriesItem | null>>;
}
export const CategoryListViewer = ({
  setValue,
  categoryList,
  setSelectedCategory,
}: CategoryListViewerProps) => {
  const handleCategorySelect = (category: GetCategoriesItem) => {
    setValue("category", category);
    setSelectedCategory(category);
  };

  return (
    <div className={`absolute z-50`}>
      <ul
        className={` w-72 p-3 my-5 bg-neutral-200 border border-neutral-300 rounded shadow-sm cursor-default dark:bg-neutral-800`}
      >
        {categoryList.map((category) => (
          <li
            onClick={() => handleCategorySelect(category)}
            key={category.id}
            className="flex items-center content-center p-2 rounded cursor-pointer hover:bg-gray-100 font-eng-sub-font-2"
          >
            <TechIcons categoryName={category.categoryName} />
            {category.categoryName}
          </li>
        ))}
      </ul>
    </div>
  );
};
