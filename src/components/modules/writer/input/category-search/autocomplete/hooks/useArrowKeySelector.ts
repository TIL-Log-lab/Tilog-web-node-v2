import { MutableRefObject, useState } from "react";

import { useFormContext } from "react-hook-form";
import { useEventListener } from "usehooks-ts";

import { CATEGORY_ID } from "@Library/constants/writer";

import { GetCategoriesResponseDto } from "@til-log.lab/tilog-api";

import WriterFormTypes from "@Components/modules/writer/interface/writerFormTypes";

const useArrowKeySelector = (
  categoryList: GetCategoriesResponseDto["list"] | null,
  ref: MutableRefObject<HTMLLIElement[]>
) => {
  const [index, setIndex] = useState(-1);
  const { setValue } = useFormContext<WriterFormTypes>();
  const resetIndex = () => {
    setIndex(-1);
  };
  const handleArrowClick = ({ key }: KeyboardEvent) => {
    if (!categoryList) return;
    if (key === "ArrowDown") {
      if (categoryList.length - 1 <= index) return;

      setIndex((prev) => prev + 1);
      ref.current[index + 1].scrollIntoView({
        block: "nearest",
        inline: "start",
      });
    }
    if (key === "ArrowUp") {
      if (index === 0) return;

      setIndex((prev) => prev - 1);
      ref.current[index - 1].scrollIntoView({
        block: "nearest",
        inline: "start",
      });
    }
  };
  const handleSelect = ({ key }: KeyboardEvent) => {
    if (!categoryList) return;

    if (key === "Enter") {
      if (!categoryList[index]) return;
      setValue(CATEGORY_ID, categoryList[index].id.toString());
    }
  };
  useEventListener("keydown", handleArrowClick);
  useEventListener("keydown", handleSelect);
  return { index, resetIndex };
};
export default useArrowKeySelector;
