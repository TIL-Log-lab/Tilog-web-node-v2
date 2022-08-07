/* eslint-disable react/button-has-type */

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
      className={`${className} p-3.5 rounded-md text-neutral-50 bg-neutral-800 hover:bg-neutral-700 font-eng-sub-font-2`}
      {...props}
    >
      {children}
    </button>
  );
};

export default PrimaryButton;
