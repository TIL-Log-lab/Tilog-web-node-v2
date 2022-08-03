import { useFormContext } from "react-hook-form";

import RenderTechIcons from "@Components/molecules/tech-icons/RenderTechIcons";
import useSearchCategoryId from "@Hooks/react-query/category/useSearchCategoryId";

import CreatePostRequestBodyDto from "@Components/organisms/writer/interface/CreatePostRequestBodyDto";

const SelectedCategory = () => {
  const { setValue } = useFormContext<CreatePostRequestBodyDto>();
  const category = useSearchCategoryId();
  if (!category) return null;
  return (
    <div className="w-full p-3 bg-white dark:bg-neutral-800 ">
      <button
        type="button"
        className="px-4 py-2 text-lg font-bold rounded text-neutral-600 bg-neutral-300 hover:bg-neutral-200 dark:bg-neutral-700 hover:dark:bg-neutral-600"
        onClick={() => setValue("categoryId", null)}
      >
        <div className="flex items-center">
          <div className="flex items-center content-center text-2xl font-eng-sub-font-2 gap-x-3">
            <RenderTechIcons categoryName={category[0].categoryName} />
            <p className="block font-medium">{category[0].categoryName}</p>
          </div>
        </div>
      </button>
    </div>
  );
};
export default SelectedCategory;
