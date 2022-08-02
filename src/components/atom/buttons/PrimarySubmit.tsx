import { ButtonHTMLAttributes } from "react";

interface PrimarySubmitProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

const PrimarySubmit = ({
  children,
  className,
  ...props
}: PrimarySubmitProps) => {
  return (
    <button
      type="submit"
      className={`${className} p-3.5 rounded-md bg-primary-color hover:bg-primary-color-blur`}
      {...props}
    >
      {children}
    </button>
  );
};

export default PrimarySubmit;
