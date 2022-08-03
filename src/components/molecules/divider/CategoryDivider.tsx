import RenderTechIcons from "@Components/molecules/tech-icons/RenderTechIcons";

const CategoryDivider = ({ categoryName }: { categoryName: string }) => {
  return (
    <div className="relative flex items-center py-5">
      <div className="flex-grow border-t border-gray-400" />
      <div className="mx-4">
        <RenderTechIcons categoryName={categoryName} />
      </div>
      <div className="flex-grow border-t border-gray-400" />
    </div>
  );
};

export default CategoryDivider;
