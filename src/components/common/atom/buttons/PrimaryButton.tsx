import { ButtonHTMLAttributes } from "react";

interface PrimaryButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isSubmit?: boolean;
}

const PrimaryButton = ({
  children,
  className,
  isSubmit,
  ...props
}: PrimaryButtonProps) => {
  return (
    <button
      type={!isSubmit ? "button" : "submit"}
      className={`${className} py-2.5 px-6 rounded-md w-full h-fit text-neutral-50 bg-neutral-800 dark:bg-black hover:bg-neutral-700 font-eng-sub-font-2`}
      {...props}
    >
      {children}
    </button>
  );
};

export default PrimaryButton;
