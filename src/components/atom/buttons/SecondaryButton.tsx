import { ButtonHTMLAttributes } from "react";

interface SecondaryButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {}

const SecondaryButton = ({
  children,
  type,
  ...props
}: SecondaryButtonProps) => {
  return (
    <button
      type="button"
      className="p-3.5 rounded-md bg-secondary-color hover:bg-secondary-color-blur"
      {...props}
    >
      {children}
    </button>
  );
};

export default SecondaryButton;
