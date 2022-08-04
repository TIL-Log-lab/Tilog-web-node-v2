import Spinner from "@Components/atom/loading/Spinner";
import CategorySortButton from "@Components/molecules/buttons/CategorySortButton";
import useAllGetUserCategoryListQuery from "@Hooks/react-query/category/useAllGetUserCategoryListQuery";

import { GetMeResponseDto } from "@til-log.lab/tilog-api";

const UserCategoryButtonList = ({
  userId,
}: {
  userId: GetMeResponseDto["userId"];
}) => {
  const categoryList = useAllGetUserCategoryListQuery(userId);
  if (categoryList.isLoading) return <Spinner size="10" />;
  if (categoryList.isError) return <div>{categoryList.error.message.ko}</div>;
  if (!categoryList.data) return null;
  return (
    <div className="flex flex-wrap gap-3">
      {categoryList.data.data.list.length === 0 && (
        <h2 className="text-base">검색가능한 카테고리가 없어요!</h2>
      )}
      {categoryList.data.data.list.map((category) => (
        <CategorySortButton categoryName={category.categoryName} />
      ))}
    </div>
  );
};
export default UserCategoryButtonList;
