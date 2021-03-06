import TechIcons from "@TechIcons/TechIcons";

interface MCategorySelectedProps {
  selectedCategory: string;
  onClick: () => void;
}
const MCategorySelected = ({
  selectedCategory,
  onClick,
}: MCategorySelectedProps) => (
  <div className="w-full pt-5 ">
    <button
      className={`py-2 px-4 text-neutral-600 rounded text-lg font-bold bg-neutral-300`}
      onClick={onClick}
    >
      <div className="flex items-center">
        <TechIcons categoryName={selectedCategory} />
        {selectedCategory}
      </div>
    </button>
  </div>
);
export default MCategorySelected;
