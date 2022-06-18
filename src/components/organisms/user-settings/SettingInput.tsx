import {
  UserSettingTypes,
  UserSettingUnionTypes,
} from "@Organisms/user-settings/interface";
import { FieldErrors, RegisterOptions, UseFormRegister } from "react-hook-form";

interface MInputProps {
  register: UseFormRegister<UserSettingTypes>;
  subTitle: string;
  title: string;
  type: UserSettingUnionTypes;
  rules: RegisterOptions;
  errors: FieldErrors<UserSettingTypes>;
}
const SettingInput = ({
  register,
  subTitle,
  type,
  rules,
  title,
  errors,
}: MInputProps) => {
  return (
    <div className="flex justify-between">
      <div>
        <h3 className="text-xl text-neutral-800">{title}</h3>
        <p className="text-sm">{subTitle}</p>
      </div>
      <div className="w-1/2 text-right ">
        <input
          className="items-end w-full p-3 rounded-sm font-eng-sub-font-2 focus:outline-none focus:ring focus:ring-signature-color"
          {...register(type, rules)}
        ></input>
        <p className="text-sm text-signature-color ">{errors[type]?.message}</p>
      </div>
    </div>
  );
};
export default SettingInput;
