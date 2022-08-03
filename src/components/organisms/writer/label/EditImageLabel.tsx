import { LabelHTMLAttributes } from "react";

import { FcEditImage } from "react-icons/fc";

const EditImageLabel = ({
  ...props
}: LabelHTMLAttributes<HTMLLabelElement>) => {
  return (
    <label {...props}>
      <FcEditImage className="cursor-pointer w-14 h-14" />
    </label>
  );
};

export default EditImageLabel;
