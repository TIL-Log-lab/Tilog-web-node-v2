import { RefObject, useState } from "react";

import { useEventListener, useOnClickOutside } from "usehooks-ts";

const useOutsideClickAndEscClickListener = <
  T extends HTMLElement = HTMLDivElement
>(
  ref: RefObject<T>
) => {
  const [isOpen, setIsOpen] = useState(false);
  const escListener = ({ key }: KeyboardEvent) => {
    if (key === "Escape") setIsOpen(false);
  };

  const handleClickOutside = () => {
    setIsOpen(false);
  };
  const handleOpen = () => {
    setIsOpen(!isOpen);
  };
  useEventListener("keydown", escListener, ref);
  useOnClickOutside(ref, handleClickOutside);
  return { isOpen, handleOpen };
};

export default useOutsideClickAndEscClickListener;
