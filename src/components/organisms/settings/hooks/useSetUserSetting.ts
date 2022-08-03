import { DefaultValues, useForm } from "react-hook-form";

const useSettingForm = <TFormValues extends Record<string, unknown>>(
  setting: DefaultValues<TFormValues>
) => {
  return useForm({
    defaultValues: setting,
  });
};
export default useSettingForm;
