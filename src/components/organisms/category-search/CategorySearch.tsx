import {
  useEffect,
  BaseSyntheticEvent,
  useCallback,
  useRef,
  useState,
} from "react";
import {
  UseFormGetValues,
  UseFormRegister,
  UseFormSetValue,
} from "react-hook-form";

import { getCategory } from "@Api/adapter";
import TechIcons from "@TechIcons/TechIcons";
import { GetCategoriesItem } from "@til-log.lab/tilog-api";
import EditorType from "@Organisms/editor/interface/EditorType";
import { CategoryListViewer } from "@Organisms/category-search/CategoryListViewer";

const OCategorySearch = ({
  localStorageKey,
  register,
  getValues,
  setValue,
}: {
  localStorageKey: string;
  getValues: UseFormGetValues<EditorType>;
  register: UseFormRegister<EditorType>;
  setValue: UseFormSetValue<EditorType>;
}) => {
  const [categoryList, setCategoryList] = useState<Array<GetCategoriesItem>>(
    []
  );
  const [selectedCategory, setSelectedCategory] =
    useState<GetCategoriesItem | null>(null);
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);

  const dropDownRef = useRef<HTMLDivElement>(null);
  // NOTE: 외부 요소 클릭 이벤트
  const handleClickOutside = useCallback(
    ({ target }: BaseSyntheticEvent | MouseEvent) => {
      if (dropDownRef.current && !dropDownRef.current.contains(target)) {
        setIsDropDownOpen(false);
      }
    },
    []
  );

  // NOTE: 외부 요소 클릭 이벤트
  useEffect(() => {
    window.addEventListener("click", handleClickOutside);
    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  });

  // NOTE: localStorage에서 category 가져옴.
  useEffect(() => {
    const valueFormCategory = getValues("category");
    if (valueFormCategory) {
      setSelectedCategory(valueFormCategory);
    }
    const postDetail = localStorage.getItem(localStorageKey);
    if (postDetail) {
      const { category } = JSON.parse(postDetail);
      setSelectedCategory(category);
    }
  }, []);

  // NOTE: 카테고리 검색
  const handleSearchCategory = async () => {
    // TODO: 카테고리 인자값 받아서 검색하는 기능 추가
    const { data } = await getCategory();
    setCategoryList(data.list);
    setIsDropDownOpen(true);
  };

  // NOTE: 카테고리 선택 취소
  const handleUnSelectCategory = () => {
    setSelectedCategory(null);
    setCategoryList([]);
    setIsDropDownOpen(false);
    setValue("categoryId", "");
    setValue("category", null);
  };

  // NOTE: 선택된 카테고리 컴포넌트
  if (selectedCategory) {
    return (
      <div className="w-full pt-5 ">
        <button
          className={`py-2 px-4 text-neutral-600 rounded text-lg font-bold bg-neutral-300`}
          onClick={handleUnSelectCategory}
        >
          <div className="flex items-center">
            <TechIcons categoryName={selectedCategory.categoryName} />
            {selectedCategory.categoryName}
          </div>
        </button>
      </div>
    );
  }

  return (
    <div ref={dropDownRef}>
      <input
        autoComplete="false"
        className="w-full text-xl font-bold pt-7"
        placeholder={"카테고리를 선택해주세요."}
        onFocus={(e) => handleSearchCategory(e)}
        {...register("category", {
          onChange: (e) => {
            handleSearchCategory(e);
          },
          validate: {
            isSelected: (v) => typeof v === "number",
          },
        })}
      />
      {/** 카테고리 dropdown */}
      {isDropDownOpen && (
        <CategoryListViewer
          setValue={setValue}
          setSelectedCategory={setSelectedCategory}
          categoryList={categoryList}
        />
      )}
    </div>
  );
};
export default OCategorySearch;
