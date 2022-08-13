import { useFormContext } from "react-hook-form";

import UnderLineTextInput from "@Components/common/atom/input/UnderLineTextInput";
import { displayNameRules } from "@Components/modules/settings/input/rules";
import {
  DISPLAY_NAME,
  DISPLAY_NAME_DESC,
  DISPLAY_NAME_TITLE,
} from "@Library/constants/settings";

import UserSettingTypes from "@Library/api/users/interface/userSettingTypes";

const DisplayNameInput = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<UserSettingTypes>();
  return (
    <div>
      <h1>{DISPLAY_NAME_TITLE.ko}</h1>
      <p>{DISPLAY_NAME_DESC.ko}</p>
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
