import { ButtonHTMLAttributes } from "react";

import { Path, UseFormRegister } from "react-hook-form";

interface ImageInputProps<TFormValues>
  extends ButtonHTMLAttributes<HTMLButtonElement> {
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
      // TODO: 이미지 업로드 기능 구현시 활성화 {...register(inputName)}
    />
  );
};

export default ImageInput;
