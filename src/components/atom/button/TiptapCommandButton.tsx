import { ButtonHTMLAttributes } from "react";

interface TiptapCommandButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: string;
  isActive?: boolean;
}

const TiptapCommandButton = ({
  children,
  isActive,
  className = "w-10 h-10 ",
  ...props
}: TiptapCommandButtonProps) => {
  return (
    <button
      type="button"
      className={`${className} ${
        isActive
          ? "bg-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-700 dark:bg-neutral-800"
          : "bg-neutral-100 hover:bg-neutral-200 dark:hover:bg-neutral-800 dark:bg-neutral-700"
      } rounded-md ring-1 ring-neutral-300`}
      {...props}
    >
      <span className="font-medium text-md font-eng-sub-font-2 text-neutral-900 dark:text-neutral-50">
        {children}
      </span>
    </button>
  );
};

export default TiptapCommandButton;
