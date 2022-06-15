import TechIcons from "@TechIcons/TechIcons";

const CategoryDivider = ({ categoryName }: { categoryName: string }) => {
  return (
    <div className="relative flex items-center py-5">
      <div className="flex-grow border-t border-gray-400"></div>
      <div className="mx-4">
        <TechIcons categoryName={categoryName} />
      </div>
      <div className="flex-grow border-t border-gray-400"></div>
    </div>
  );
};

export default CategoryDivider;
