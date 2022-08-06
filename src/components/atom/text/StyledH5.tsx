import { HTMLAttributes } from "react";

interface StyledH5Props extends HTMLAttributes<HTMLHeadingElement> {}

const StyledH5 = ({ children, className, ...props }: StyledH5Props) => {
  return (
    <h5
      {...props}
      className={`${className} text-lg font-normal md:text-2xl text-neutral-600 dark:text-neutral-200 font-eng-sub-font-2`}
    >
      {children}
    </h5>
  );
};

export default StyledH5;
