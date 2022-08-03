import { ButtonHTMLAttributes } from "react";

interface SecondaryButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {}

const SecondaryButton = ({
  children,
  className,
  ...props
}: SecondaryButtonProps) => {
  return (
    <button
      type="submit"
      className={`${className} p-3.5 rounded-md bg-neutral-50 hover:bg-secondary-color-blur dark:bg-neutral-900 dark:hover:bg-neutral-700`}
      {...props}
    >
      {children}
    </button>
  );
};

export default SecondaryButton;
