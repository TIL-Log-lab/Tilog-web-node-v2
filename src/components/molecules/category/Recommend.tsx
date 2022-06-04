import TechIcons from "@TechIcons/TechIcons";

interface Props {
  onSelect: (categoryName: string) => void;
  categoryLists: [{ id: number; categoryName: string; iconUrl: null }];
}
const MCategoryRecommend = ({ categoryLists, onSelect }: Props) => {
  return (
    <ul
      className={`w-72 p-3 my-5 bg-neutral-200 border border-neutral-300 rounded shadow-sm cursor-default dark:bg-neutral-800`}
    >
      {categoryLists.map((category) => (
        <li
          onClick={() => {
            onSelect(category.categoryName);
          }}
          key={category.id}
          className="flex items-center content-center p-2 rounded cursor-pointer hover:bg-gray-100 font-eng-sub-font-2"
        >
          <TechIcons categoryName={category.categoryName} />
          {category.categoryName}
        </li>
      ))}
    </ul>
  );
};
export default MCategoryRecommend;
