import { AnchorHTMLAttributes } from "react";

interface StyledAProps extends AnchorHTMLAttributes<HTMLAnchorElement> {}

const StyledA = ({ children, className, ...props }: StyledAProps) => {
  return (
    <a
      {...props}
      className={`${className} text-base md:text-xl text-neutral-800 dark:text-neutral-50 hover:underline font-eng-sub-font-2`}
    >
      {children}
    </a>
  );
};

export default StyledA;
