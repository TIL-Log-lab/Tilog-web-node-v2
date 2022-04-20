import MCategoryRecommend from "@Molecules/Category/Recommend";
import { ChangeEvent, Dispatch, SetStateAction } from "react";

interface MCategoryInputProps {
  categoryLists: [{ id: number; categoryName: string; iconUrl: null }] | null;
  onChange: (event: ChangeEvent<HTMLInputElement>) => Promise<void>;
  setSelectedCategory: Dispatch<SetStateAction<string>>;
}

const MCategoryInput = ({
  categoryLists,
  onChange,
  setSelectedCategory,
}: MCategoryInputProps) => {
  return (
    <>
      <input
        className="w-full text-xl font-bold pt-7"
        placeholder="카테고리"
        onChange={onChange}
      />
      <div className="absolute z-10">
        {categoryLists && (
          <MCategoryRecommend
            categoryLists={categoryLists}
            onSelect={setSelectedCategory}
          />
        )}
      </div>
    </>
  );
};
export default MCategoryInput;
