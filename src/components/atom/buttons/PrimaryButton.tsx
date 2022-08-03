import { ButtonHTMLAttributes } from "react";

interface PrimaryButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

const PrimaryButton = ({
  children,
  className,
  ...props
}: PrimaryButtonProps) => {
  return (
    <button
      type="button"
      className={`${className} p-3.5 rounded-md bg-primary-color hover:bg-primary-color-blur dark:bg-black dark:hover:bg-neutral-700`}
      {...props}
    >
      {children}
    </button>
  );
};

export default PrimaryButton;
