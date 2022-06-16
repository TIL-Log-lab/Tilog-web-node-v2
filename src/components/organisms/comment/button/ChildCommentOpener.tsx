import { Dispatch, SetStateAction } from "react";

interface ChildCommentOpenerButtonProps {
  isChildrenOpen: boolean;
  setIsChildrenOpen: Dispatch<SetStateAction<boolean>>;
}

const ChildCommentOpenerButton = ({
  isChildrenOpen,
  setIsChildrenOpen,
}: ChildCommentOpenerButtonProps) => {
  return (
    <>
      {isChildrenOpen || (
        <button
          onClick={() => setIsChildrenOpen(true)}
          className="relative right-0 text-sm"
        >
          답글 보기
        </button>
      )}
      {isChildrenOpen && (
        <button
          onClick={() => setIsChildrenOpen(false)}
          className="relative right-0 text-sm"
        >
          답글 닫기
        </button>
      )}
    </>
  );
};
export default ChildCommentOpenerButton;
