import { ButtonHTMLAttributes } from "react";

interface SummitButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
}

const SummitButton = ({
  text,
  className = "w-40 h-12 text-neutral-50 bg-neutral-900",
  ...props
}: SummitButtonProps) => (
  <button {...props} type="submit" className={`${className} rounded-md`}>
    {text}
  </button>
);

export default SummitButton;
