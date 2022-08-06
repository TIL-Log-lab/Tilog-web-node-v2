import { HTMLAttributes } from "react";

interface StyledH6Props extends HTMLAttributes<HTMLHeadingElement> {}

const StyledH6 = ({ children, className, ...props }: StyledH6Props) => {
  return (
    <h6
      {...props}
      className={`${className} text-base font-medium md:text-xl text-neutral-500 dark:text-neutral-300 font-eng-sub-font-2`}
    >
      {children}
    </h6>
  );
};

export default StyledH6;
