import { RegisterOptions, UseFormRegister } from "react-hook-form";

import UserSettingTypes from "@Library/api/users/interface/userSettingTypes";

interface SettingInputProps {
  register: UseFormRegister<UserSettingTypes>;
  type: keyof UserSettingTypes;
  rules: RegisterOptions<UserSettingTypes>;
  error?: string;
  className?: string;
}
const SettingInput = ({
  register,
  type,
  rules,
  error,
  className,
}: SettingInputProps) => {
  return (
    <div className="mb-5 min-w-96">
      <input
        className={`${className} ${
          !error
            ? "dark:focus:border-signature-color focus:border-signature-color"
            : "focus:border-red-600 dark:focus:border-rose-600"
        } py-2.5 w-full bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600  focus:outline-none focus:ring-0`}
        {...register(type, rules)}
      />
      <p className="mt-3 text-sm font-medium text-rose-600 dark:text-rose-500">
        {error}
      </p>
    </div>
  );
};
export default SettingInput;
