import { useFormContext } from "react-hook-form";

import UnderLineTextInput from "@Components/common/atom/input/UnderLineTextInput";
import { positionRules } from "@Components/modules/settings/input/rules";
import {
  POSITION,
  POSITION_DESC,
  POSITION_TITLE,
} from "@Library/constants/settings";

import UserSettingTypes from "@Library/api/users/interface/userSettingTypes";

const PositionInput = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<UserSettingTypes>();
  return (
    <div>
      <h1>{POSITION_TITLE.ko}</h1>
      <p>{POSITION_DESC.ko}</p>
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
