import { useFormContext } from "react-hook-form";

import RenderTechIcons from "@Components/molecules/icons/tech/RenderTechIcons";
import useSearchCategoryId from "@Components/molecules/input/writer/category-search/hooks/useSearchCategoryId";

import { CreatePostRequestBodyDto } from "@til-log.lab/tilog-api";

const SelectedCategory = () => {
  const { setValue } = useFormContext<CreatePostRequestBodyDto>();
  const category = useSearchCategoryId();
  if (!category) return null;
  return (
    <div className="w-full p-3 bg-white ">
      <button
        type="button"
        className="px-4 py-2 text-lg font-bold rounded text-neutral-600 bg-neutral-300 hover:bg-neutral-200"
        onClick={() => setValue("categoryId", 0)}
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
