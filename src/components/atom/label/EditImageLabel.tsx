/* eslint-disable jsx-a11y/label-has-associated-control */
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
