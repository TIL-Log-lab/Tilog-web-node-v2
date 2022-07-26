import { DefaultValues, useForm } from "react-hook-form";

import UserSettingTypes from "@Library/api/users/interface/userSettingTypes";

const useSettingForm = <TFormValues extends Record<string, unknown>>(
  setting: DefaultValues<TFormValues>
) => {
  return useForm<UserSettingTypes>({
    defaultValues: setting,
  });
};
export default useSettingForm;
