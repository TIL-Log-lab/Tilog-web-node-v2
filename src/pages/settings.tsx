import { NextPage } from "next";
import Head from "next/head";
import { useContext } from "react";

import { FormProvider, useForm } from "react-hook-form";

import RootBox from "@Components/common/atom/box/RootBox";
import {
  SettingsSubmit,
  DisplayNameInput,
  EmailInput,
  IntroductionInput,
  PositionInput,
} from "@Components/modules/settings";
import { AuthContext } from "@Hooks/context/auth/AuthContext";
import useHandleSubmit from "@Hooks/pages/settings/hooks/useHandleSubmit";

import UserSettingTypes from "@Library/api/users/interface/userSettingTypes";

const SettingPage: NextPage = () => {
  const onSubmit = useHandleSubmit();
  const { userInfo } = useContext(AuthContext);
  const method = useForm<UserSettingTypes>({
    defaultValues: userInfo ? userInfo.settings : {},
  });
  return (
    <RootBox>
      <Head>
        <title>설정</title>
      </Head>
      <div className="w-full m-auto p-14 bg-neutral-100 dark:bg-neutral-800 border-neutral-200 dark:border-neutral-700">
        <FormProvider {...method}>
          <form onSubmit={method.handleSubmit(onSubmit)}>
            <DisplayNameInput />
            <EmailInput />
            <IntroductionInput />
            <PositionInput />
            <div className="text-right">
              <SettingsSubmit />
            </div>
          </form>
        </FormProvider>
      </div>
    </RootBox>
  );
};

export default SettingPage;
