import { useFormContext } from "react-hook-form";

import SettingInput from "@Components/atom/input/SettingInput";
import Desc from "@Components/atom/text/Desc";
import Title from "@Components/atom/text/Title";
import InputSettingsBox from "@Components/molecules/input/settings/InputSettingsBox";
import { positionRules } from "@Components/organisms/form/settings/rules";
import { POSITION_DESC } from "@Constants/text/desc";
import { POSITION_TITLE } from "@Constants/text/title";

import UserSettingTypes from "@Library/api/users/interface/userSettingTypes";

const PositionInput = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<UserSettingTypes>();
  return (
    <InputSettingsBox>
      <div className="max-w-96">
        <Title className="text-4xl">{POSITION_TITLE.ko}</Title>
        <Desc className="mt-2 text-base font-normal text-neutral-500 dark:text-neutral-300">
          {POSITION_DESC.ko}
        </Desc>
      </div>
      <SettingInput
        register={register}
        type="POSITION"
        rules={positionRules("ko")}
        error={errors.POSITION?.message}
      />
    </InputSettingsBox>
  );
};
export default PositionInput;
