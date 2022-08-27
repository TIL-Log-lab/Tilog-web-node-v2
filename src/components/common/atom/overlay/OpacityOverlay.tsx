import { HTMLAttributes } from "react";

const OpacityOverlay = ({ ...props }: HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      {...props}
      className="absolute z-10 w-full h-full opacity-50 bg-neutral-900 dark:bg-neutral-700"
    />
  );
};

export default OpacityOverlay;
