import { HTMLAttributes } from "react";

const OpacityOverlay = ({ ...props }: HTMLAttributes<HTMLDivElement>) => {
  return (
    <div {...props} className="absolute w-full h-full bg-black opacity-50" />
  );
};

export default OpacityOverlay;
