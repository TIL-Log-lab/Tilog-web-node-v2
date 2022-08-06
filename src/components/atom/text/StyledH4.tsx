import { HTMLAttributes } from "react";

interface StyledH4Props extends HTMLAttributes<HTMLHeadingElement> {}

const StyledH4 = ({ children, className, ...props }: StyledH4Props) => {
  return (
    <h4
      {...props}
      className={`${className} text-xl font-medium md:text-3xl text-neutral-700 dark:text-neutral-100 font-eng-sub-font-2`}
    >
      {children}
    </h4>
  );
};

export default StyledH4;
