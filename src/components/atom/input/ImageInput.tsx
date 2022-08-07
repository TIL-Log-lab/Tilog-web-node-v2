import { InputHTMLAttributes } from "react";

import { Path, UseFormRegister } from "react-hook-form";

interface ImageInputProps<TFormValues>
  extends InputHTMLAttributes<HTMLInputElement> {
  inputName: Path<TFormValues>;
  register: UseFormRegister<TFormValues>;
}
const ImageInput = <TFormValues extends unknown>({
  register,
  inputName,
  id = "fileInput",
}: ImageInputProps<TFormValues>) => {
  return (
    <input
      id={id}
      type="file"
      className="hidden"
      accept="image/*"
      {...register(inputName)}
    />
  );
};

export default ImageInput;
