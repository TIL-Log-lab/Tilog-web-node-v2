import Spinner from "@Components/common/atom/loading/Spinner";
import CategorySortButton from "@Components/common/molecules/buttons/CategorySortButton";
import useGetAllCategoryListQuery from "@Hooks/react-query/category/useGetAllCategoryListQuery";
import isArrayEmpty from "@Library/utility/isArrayEmpty";

import { GetMeResponseDto } from "@til-log.lab/tilog-api";

const CategorySortButtonList = ({
  userId,
}: {
  userId?: GetMeResponseDto["userId"];
}) => {
  const categoryList = useGetAllCategoryListQuery({ userId });
  if (categoryList.isLoading) return <Spinner size="10" />;
  if (categoryList.isError) return <div>{categoryList.error.message.ko}</div>;
  if (!categoryList.data) return null;
  if (isArrayEmpty(categoryList.data.data.list))
    return <h2 className="text-base">카테고리가 존재하지 않아요.</h2>;

  return (
    <div className="sticky top-0 z-10 border-b border-neutral-300 bg-neutral-50 dark:bg-neutral-900">
      <div className="m-auto max-w-[1280px] items-center px-5">
        <div className="py-3 overflow-y-auto scrollbar-hide">
          {categoryList.data.data.list.map((category) => (
            <CategorySortButton
              key={category.id}
              categoryName={category.categoryName}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
export default CategorySortButtonList;
