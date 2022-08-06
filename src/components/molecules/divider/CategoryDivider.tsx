import Divider from "@Components/atom/Divider";
import RenderTechIcons from "@Components/molecules/tech-icons/RenderTechIcons";

const CategoryDivider = ({ categoryName }: { categoryName: string }) => {
  return (
    <div className="relative flex items-center py-5">
      <Divider className="flex-grow" />
      <div className="mx-4">
        <RenderTechIcons categoryName={categoryName} />
      </div>
      <Divider className="flex-grow" />
    </div>
  );
};

export default CategoryDivider;
