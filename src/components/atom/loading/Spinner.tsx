import { ImSpinner8 } from "react-icons/im";

interface SpinnerProps {
  size: string;
}
const Spinner = ({ size = "w-5 h-5" }: SpinnerProps) => {
  return (
    <ImSpinner8
      className={`animate-spin text-neutral-800 dark:text-neutral-50 ${size}`}
    />
  );
};
export default Spinner;
