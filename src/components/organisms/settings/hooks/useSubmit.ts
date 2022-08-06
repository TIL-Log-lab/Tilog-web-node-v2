import { SubmitHandler } from "react-hook-form";
import toast from "react-hot-toast";

import useSetUserSetting from "@Hooks/react-query/userSetting/useSetUserSetting";
import SAVE_MESSAGE from "@Library/messages/constants/success/save";

import { SetSettingRequestBodyDtoSettingTypeEnum } from "@til-log.lab/tilog-api";

import UserSettingTypes from "@Library/api/users/interface/userSettingTypes";

const useSubmit = (): SubmitHandler<UserSettingTypes> => {
  const { mutate } = useSetUserSetting();

  return async (object: UserSettingTypes) => {
    const loading = toast.loading("로딩중...");
    Object.keys(object).forEach((key) => {
      const userSettingKey = key as SetSettingRequestBodyDtoSettingTypeEnum;
      mutate(
        {
          content: object[userSettingKey],
          settingType: userSettingKey,
        },
        {
          onError: (e) => {
            toast.error(e.message.ko, {
              id: loading,
            });
          },
          onSuccess: () => {
            toast.success(SAVE_MESSAGE.ko, {
              id: loading,
            });
          },
        }
      );
    });
  };
};

export default useSubmit;
