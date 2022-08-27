import { RegisterOptions, UseFormRegister } from "react-hook-form";

import UserSettingTypes from "@Library/api/users/interface/userSettingTypes";

interface UnderLineTextInputProps {
  register: UseFormRegister<UserSettingTypes>;
  type: keyof UserSettingTypes;
  rules: RegisterOptions<UserSettingTypes>;
  error?: string;
  className?: string;
}
const UnderLineTextInput = ({
  register,
  type,
  rules,
  error,
  className,
}: UnderLineTextInputProps) => {
  return (
    <div className="mb-5 min-w-96">
      <input
        className={`${className} ${
          !error
            ? "dark:focus:border-neutral-50 focus:border-neutral-800"
            : "focus:border-red-500 dark:focus:border-rose-500"
        } py-2.5 w-full mt-10 bg-transparent border-0 border-b-2 border-neutral-300 appearance-none dark:border-neutral-700 text-neutral-800 dark:text-neutral-50 focus:outline-none focus:ring-0`}
        {...register(type, rules)}
      />
      <p className="mt-3 text-sm font-medium text-rose-500">{error}</p>
    </div>
  );
};
export default UnderLineTextInput;
