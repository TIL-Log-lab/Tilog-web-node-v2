import { useFormContext } from "react-hook-form";

import RenderTechIcons from "@Components/molecules/icons/tech/RenderTechIcons";

import {
  CreatePostRequestBodyDto,
  GetCategoriesItem,
} from "@til-log.lab/tilog-api";

interface AutocompleteContentsProps {
  category: GetCategoriesItem;
}

const AutocompleteContents = ({ category }: AutocompleteContentsProps) => {
  const { setValue } = useFormContext<CreatePostRequestBodyDto>();
  return (
    <button type="button" onClick={() => setValue("categoryId", category.id)}>
      <div className="flex items-center content-center text-2xl font-eng-sub-font-2 gap-x-3">
        <RenderTechIcons categoryName={category.categoryName} />
        <p className="block font-medium">{category.categoryName}</p>
      </div>
      <hr className="w-[200px] border-neutral-500 dark:border-neutral-300 border-[2px] rounded-full my-3" />
      <span className="pt-10 text-neutral-600 font-eng-sub-font-2">
        {category.content}
      </span>
    </button>
  );
};

export default AutocompleteContents;
