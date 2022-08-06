import { HTMLAttributes } from "react";

interface StyledReversalSpanProps extends HTMLAttributes<HTMLSpanElement> {}

const StyledReversalSpan = ({
  children,
  className = "text-sm md:text-base text-neutral-50 dark:text-neutral-800",
  ...props
}: StyledReversalSpanProps) => {
  return (
    <span {...props} className={`${className} font-eng-sub-font-2`}>
      {children}
    </span>
  );
};

export default StyledReversalSpan;
