import Spinner from "@Components/common/atom/loading/Spinner";
import CategorySortButton from "@Components/common/molecules/buttons/CategorySortButton";
import useAllGetCategoryListQuery from "@Hooks/react-query/category/useAllGetCategoryListQuery";

const CategoryButtonList = () => {
  const categoryList = useAllGetCategoryListQuery();
  if (categoryList.isLoading) return <Spinner size="10" />;
  if (categoryList.isError) return <div>{categoryList.error.message.ko}</div>;
  if (!categoryList.data) return null;
  return (
    <div className="flex flex-wrap gap-3">
      {categoryList.data.data.list.length === 0 && (
        <h2 className="text-base">카테고리가 존재하지 않아요.</h2>
      )}
      {categoryList.data.data.list.map((category) => (
        <CategorySortButton categoryName={category.categoryName} />
      ))}
    </div>
  );
};
export default CategoryButtonList;
