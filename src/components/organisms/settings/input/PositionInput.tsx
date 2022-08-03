import { useFormContext } from "react-hook-form";

import UnderLineTextInput from "@Components/atom/input/UnderLineTextInput";
import { positionRules } from "@Components/organisms/settings/input/rules";
import {
  POSITION,
  POSITION_DESC,
  POSITION_TITLE,
} from "@Constants/text/settings";

import UserSettingTypes from "@Library/api/users/interface/userSettingTypes";

const PositionInput = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<UserSettingTypes>();
  return (
    <div className="flex flex-col max-w-lg gap-7">
      <div className="max-w-96">
        <h1 className="text-4xl">{POSITION_TITLE.ko}</h1>
        <h3 className="mt-2 text-base font-normal text-neutral-500 dark:text-neutral-300">
          {POSITION_DESC.ko}
        </h3>
      </div>
      <UnderLineTextInput
        register={register}
        type={POSITION}
        rules={positionRules("ko")}
        error={errors.POSITION?.message}
      />
    </div>
  );
};
export default PositionInput;
