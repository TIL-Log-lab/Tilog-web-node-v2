import { LabelHTMLAttributes } from "react";

import { FcRemoveImage } from "react-icons/fc";

const RemoveImageLabel = ({
  ...props
}: LabelHTMLAttributes<HTMLLabelElement>) => {
  return (
    <label {...props}>
      <FcRemoveImage className="cursor-pointer w-14 h-14" />
    </label>
  );
};

export default RemoveImageLabel;
