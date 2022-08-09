import { useState } from "react";

import { BsArrowClockwise } from "react-icons/bs";

const CommentRestore = () => {
  const [isLoading, setIsLoading] = useState(false);
  const handleLoading = () => {
    setIsLoading(!isLoading);
  };
  return (
    <button type="button" onClick={handleLoading}>
      <BsArrowClockwise className={`${isLoading ? "animate-spin" : ""}`} />
    </button>
  );
};

export default CommentRestore;
