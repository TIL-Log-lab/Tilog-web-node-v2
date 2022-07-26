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
  errorMessage,
  ...props
}: TextInputProps<TFormValues>) => {
  return (
    <>
      <input
        className={`${
          !errorMessage
            ? "dark:focus:border-signature-color focus:border-signature-color"
            : "focus:border-red-600 dark:focus:border-rose-600"
        } py-2.5 w-full bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 focus:outline-none focus:ring-0`}
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
