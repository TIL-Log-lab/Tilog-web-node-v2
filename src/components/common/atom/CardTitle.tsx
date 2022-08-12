import { HTMLAttributes } from "react";

interface CardTitleProps extends HTMLAttributes<HTMLHeadingElement> {
  title: string;
}

const CardTitle = ({ title, children, ...props }: CardTitleProps) => {
  return (
    <div>
      <div className="flex justify-between">
        <h4 {...props} className="text-neutral-600 dark:text-neutral-300">
          {title}
        </h4>
        {children}
      </div>
      <hr />
    </div>
  );
};
export default CardTitle;
