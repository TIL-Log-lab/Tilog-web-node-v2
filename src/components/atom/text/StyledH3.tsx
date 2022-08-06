import { HTMLAttributes } from "react";

interface StyledH3Props extends HTMLAttributes<HTMLHeadingElement> {}

const StyledH3 = ({ children, className, ...props }: StyledH3Props) => {
  return (
    <h3
      {...props}
      className={`${className} text-2xl font-bold md:text-4xl text-neutral-800 dark:text-neutral-50 font-eng-sub-font-2`}
    >
      {children}
    </h3>
  );
};

export default StyledH3;
