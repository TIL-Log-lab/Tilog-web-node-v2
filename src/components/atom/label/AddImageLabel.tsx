/* eslint-disable jsx-a11y/label-has-associated-control */
import { LabelHTMLAttributes } from "react";

import { FcAddImage } from "react-icons/fc";

const AddImageLabel = ({ ...props }: LabelHTMLAttributes<HTMLLabelElement>) => {
  return (
    <label {...props}>
      <FcAddImage className="cursor-pointer w-14 h-14" />
    </label>
  );
};

export default AddImageLabel;
