import { useFormContext } from "react-hook-form";

import RenderTechIcons from "@Components/common/molecules/tech-icons/RenderTechIcons";
import { CATEGORY_ID } from "@Library/constants/writer";

import { GetCategoriesItem } from "@til-log.lab/tilog-api";

import WriterFormTypes from "@Components/modules/writer/interface/writerFormTypes";

interface AutocompleteContentsProps {
  category: GetCategoriesItem;
}

const AutocompleteContents = ({ category }: AutocompleteContentsProps) => {
  const { setValue } = useFormContext<WriterFormTypes>();
  return (
    <button
      type="button"
      onClick={() => setValue(CATEGORY_ID, category.id.toString())}
    >
      <div className="flex items-center content-center text-2xl font-eng-sub-font-2 gap-x-3">
        <RenderTechIcons categoryName={category.categoryName} />
        <span className="block font-medium">{category.categoryName}</span>
      </div>
      <hr className="w-[200px] border-neutral-500 dark:border-neutral-300 rounded-full my-3" />
      <span className="pt-10 text-neutral-600 dark:text-neutral-300 font-eng-sub-font-2">
        {category.content}
      </span>
    </button>
  );
};

export default AutocompleteContents;
