import { ButtonHTMLAttributes } from "react";

interface SummitButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
}

const SummitButton = ({ text, className, ...props }: SummitButtonProps) => (
  <button
    {...props}
    type="submit"
    className="w-40 h-12 rounded-md text-neutral-50 bg-neutral-900"
  >
    {text}
  </button>
);

export default SummitButton;
