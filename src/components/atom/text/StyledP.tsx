import { HTMLAttributes } from "react";

interface StyledPProps extends HTMLAttributes<HTMLParagraphElement> {}

const StyledP = ({ children, className, ...props }: StyledPProps) => {
  return (
    <p
      {...props}
      className={`${className} text-sm md:text-base text-neutral-400 font-eng-sub-font-2`}
    >
      {children}
    </p>
  );
};

export default StyledP;
