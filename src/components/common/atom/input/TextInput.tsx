import { InputHTMLAttributes } from "react";

import {
  FieldError,
  Path,
  RegisterOptions,
  UseFormRegister,
} from "react-hook-form";

interface TextInputProps<TFormValues>
  extends InputHTMLAttributes<HTMLInputElement> {
  fontSize: string;
  inputName: Path<TFormValues>;
  register: UseFormRegister<TFormValues>;
  errorMessage: FieldError["message"];
  rules?: RegisterOptions<TFormValues>;
}
const TextInput = <TFormValues extends unknown>({
  register,
  inputName,
  rules,
  fontSize = "text-xl",
  errorMessage,
  ...props
}: TextInputProps<TFormValues>) => {
  return (
    <>
      <input
        className={`p-5 w-full bg-white dark:bg-neutral-800 text-neutral-800 dark:text-white ${fontSize}`}
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
