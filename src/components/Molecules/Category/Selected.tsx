interface MCategorySelectedProps {
  selectedCategory: string;
  onClick: () => void;
}
const MCategorySelected = ({
  selectedCategory,
  onClick,
}: MCategorySelectedProps) => {
  return (
    <div className="w-full pt-5 ">
      <p>
        <button className={`text-xl font-bold`} onClick={onClick}>
          {selectedCategory}
        </button>
      </p>
    </div>
  );
};
export default MCategorySelected;
