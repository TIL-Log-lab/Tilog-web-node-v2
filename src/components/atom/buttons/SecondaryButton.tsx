import { ButtonHTMLAttributes } from "react";

interface SecondaryButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isSubmit?: boolean;
}

const SecondaryButton = ({
  children,
  className,
  isSubmit,
  ...props
}: SecondaryButtonProps) => {
  return (
    <button
      type={!isSubmit ? "button" : "submit"}
      className={`${className} p-3.5 rounded-md hover:bg-neutral-300 dark:hover:bg-neutral-700 text-neutral-800 dark:text-neutral-50 hover:text-neutral-50  font-eng-sub-font-2`}
      {...props}
    >
      {children}
    </button>
  );
};

export default SecondaryButton;
