import { SubmitHandler } from "react-hook-form";

import useSetUserSetting from "@Hooks/react-query/userSetting/useSetUserSetting";

import { SetSettingRequestBodyDtoSettingTypeEnum } from "@til-log.lab/tilog-api";

import UserSettingTypes from "@Library/api/users/interface/userSettingTypes";

// TODO Toast
const useHandleSubmit = (): SubmitHandler<UserSettingTypes> => {
  const { mutate } = useSetUserSetting();

  return (object: UserSettingTypes) => {
    // const loading = toast.loading("로딩중...");
    Object.keys(object).forEach((key) => {
      const userSettingKey = key as SetSettingRequestBodyDtoSettingTypeEnum;
      mutate(
        {
          content: object[userSettingKey],
          settingType: userSettingKey,
        },
        {
          // onError: (error) => {
          //   if (httpClient.isHttpClientError(error)) {
          //     toast.error(error.message.ko, {
          //       id: loading,
          //     });
          //   }
          // },
          // onSuccess: () => {
          //   toast.success(SAVE_MESSAGE.ko, {
          //     id: loading,
          //   });
          // },
        }
      );
    });
  };
};

export default useHandleSubmit;
