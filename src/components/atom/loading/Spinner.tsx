import { ImSpinner8 } from "react-icons/im";

interface SpinnerProps {
  size: string;
}
const Spinner = ({ size = "w-5 h-5" }: SpinnerProps) => {
  return (
    <ImSpinner8
      // TODO: animation: 브라우저 렌더링을 고려하여 최적화 해야합니다.
      className={`animate-spin text-neutral-800 dark:text-neutral-50 ${size}`}
    />
  );
};
export default Spinner;
