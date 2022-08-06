import { HTMLAttributes } from "react";

interface StyledSpanProps extends HTMLAttributes<HTMLSpanElement> {}

const StyledSpan = ({
  children,
  className = "text-sm md:text-base text-neutral-800 dark:text-neutral-50",
  ...props
}: StyledSpanProps) => {
  return (
    <span {...props} className={`${className} font-eng-sub-font-2`}>
      {children}
    </span>
  );
};

export default StyledSpan;
