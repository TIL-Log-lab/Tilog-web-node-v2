import { SVGProps } from "react";

interface LockIconProps extends SVGProps<SVGSVGElement> {}

const LockIcon = ({ ...props }: LockIconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="13"
      height="13"
      viewBox="0 0 13 13"
      {...props}
      className="inline mb-1 ml-2 dark:fill-neutral-50 fill-neutral-800"
    >
      <path d="M2.56061 13H10.4394C10.7657 13 11.0303 12.7354 11.0303 12.4091V5.71212C11.0303 5.38578 10.7657 5.12121 10.4394 5.12121H9.84848V3.34848C9.84848 1.50213 8.34635 0 6.5 0C4.65364 0 3.15155 1.50213 3.15155 3.34848V5.12121H2.56061C2.23427 5.12121 1.9697 5.38578 1.9697 5.71212V12.4091C1.9697 12.7354 2.23427 13 2.56061 13ZM4.33337 3.34848C4.33337 2.15378 5.30534 1.18182 6.5 1.18182C7.6947 1.18182 8.66667 2.15378 8.66667 3.34848V5.12121H4.33337V3.34848Z" />
    </svg>
  );
};

export default LockIcon;
