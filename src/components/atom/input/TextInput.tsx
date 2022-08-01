import { InputHTMLAttributes } from "react";

import {
  FieldError,
  Path,
  RegisterOptions,
  UseFormRegister,
} from "react-hook-form";

interface TextInputProps<TFormValues>
  extends InputHTMLAttributes<HTMLInputElement> {
  inputName: Path<TFormValues>;
  register: UseFormRegister<TFormValues>;
  errorMessage: FieldError["message"];
  rules?: RegisterOptions<TFormValues>;
}
const TextInput = <TFormValues extends unknown>({
  register,
  inputName,
  rules,
  className,
  errorMessage,
  ...props
}: TextInputProps<TFormValues>) => {
  return (
    <>
      <input
        className={`p-5 w-full ${className}`}
        {...register(inputName, rules)}
        {...props}
      />
      {errorMessage && (
        <p className="mt-3 text-sm font-medium text-rose-600 dark:text-rose-500">
          {errorMessage}
        </p>
      )}
    </>
  );
};
export default TextInput;
