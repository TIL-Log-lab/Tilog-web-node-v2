import { AllHTMLAttributes } from "react";

interface DividerProps extends AllHTMLAttributes<HTMLHRElement> {}

const Divider = ({ className = "w-full my-5" }: DividerProps) => {
  return (
    <hr className={`${className} border-neutral-300 dark:border-neutral-700`} />
  );
};
export default Divider;
