import { useFormContext } from "react-hook-form";

import UnderLineTextInput from "@Components/common/atom/input/UnderLineTextInput";
import { emailRules } from "@Components/modules/settings/input/rules";
import { EMAIL, EMAIL_DESC, EMAIL_TITLE } from "@Library/constants/settings";

import UserSettingTypes from "@Library/api/users/interface/userSettingTypes";

const EmailInput = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<UserSettingTypes>();
  return (
    <div>
      <h1>{EMAIL_TITLE.ko}</h1>
      <p>{EMAIL_DESC.ko}</p>
      <UnderLineTextInput
        register={register}
        type={EMAIL}
        rules={emailRules("ko")}
        error={errors.EMAIL?.message}
      />
    </div>
  );
};
export default EmailInput;
