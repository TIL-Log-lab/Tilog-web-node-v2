import { useState } from "react";

const useOnPointerEnter = () => {
  const [isPointerEnter, setIsPointerEnter] = useState(false);
  const pointerEnter = () => {
    setIsPointerEnter(true);
  };
  const pointerLeave = () => {
    setIsPointerEnter(false);
  };
  return {
    isPointerEnter,
    pointerEnter,
    pointerLeave,
  };
};

export default useOnPointerEnter;
