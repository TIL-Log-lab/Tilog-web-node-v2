import { useFormContext } from "react-hook-form";

import UnderLineTextInput from "@Components/atom/input/UnderLineTextInput";
import { displayNameRules } from "@Components/organisms/settings/input/rules";
import {
  DISPLAY_NAME,
  DISPLAY_NAME_DESC,
  DISPLAY_NAME_TITLE,
} from "@Constants/text/settings";

import UserSettingTypes from "@Library/api/users/interface/userSettingTypes";

const DisplayNameInput = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<UserSettingTypes>();
  return (
    <div className="flex flex-col max-w-lg gap-7">
      <div className="max-w-96">
        <h1 className="text-4xl">{DISPLAY_NAME_TITLE.ko}</h1>
        <h3 className="mt-2 text-base font-normal text-neutral-500 dark:text-neutral-300">
          {DISPLAY_NAME_DESC.ko}
        </h3>
      </div>
      <UnderLineTextInput
        register={register}
        type={DISPLAY_NAME}
        rules={displayNameRules("ko")}
        error={errors.DISPLAY_NAME?.message}
      />
    </div>
  );
};
export default DisplayNameInput;
