import { useForm } from "react-hook-form";

import { UserSettingTypes } from "@Components/organisms/user-settings/interface";

const useSettingForm = (setting: UserSettingTypes) => {
  return useForm({
    defaultValues: setting,
  });
};
export default useSettingForm;
