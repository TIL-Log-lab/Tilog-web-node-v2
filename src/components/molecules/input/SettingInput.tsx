import { RegisterOptions, useFormContext } from "react-hook-form";

import { UserSettingTypes } from "@Components/organisms/user-settings/interface";

type UserSettingTypesEnum = keyof UserSettingTypes;
// settingType의 값으로만 기본값 설정해야함.
interface Props {
  title: string;
  desc: string;
  settingType: UserSettingTypesEnum;
  rules: RegisterOptions;
}
const SettingInput = ({ title, desc, settingType, rules }: Props) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  return (
    <div className="flex justify-between">
      <div>
        <h2 className="text-neutral-800">{title}</h2>
        <h3 className="text-xl text-neutral-400 font-eng-sub-font-2">{desc}</h3>
      </div>
      <div className="w-1/2 text-right ">
        <input
          className="items-end w-full p-3 rounded-sm font-eng-sub-font-2 focus:outline-none focus:ring focus:ring-signature-color"
          {...register(settingType, rules)}
        />
        <p className="text-sm text-signature-color ">
          {errors[settingType]?.message}
        </p>
      </div>
    </div>
  );
};
export default SettingInput;
