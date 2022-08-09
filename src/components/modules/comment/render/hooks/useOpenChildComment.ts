import { useState } from "react";

const useOpenChildComment = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };
  return { isOpen, handleOpen };
};

export default useOpenChildComment;
