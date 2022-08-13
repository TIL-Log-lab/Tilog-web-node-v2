import { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";

import { FormProvider, useForm } from "react-hook-form";

import {
  SettingsSubmit,
  DisplayNameInput,
  EmailInput,
  IntroductionInput,
  PositionInput,
} from "@Components/modules/settings";
import useHandleSubmit from "@Hooks/pages/settings/hooks/useHandleSubmit";
import useGetMeQuery from "@Hooks/react-query/user/useGetMeQuery";

import UserSettingTypes from "@Library/api/users/interface/userSettingTypes";
import RootBox from "@Components/common/atom/box/RootBox";

const SettingPage: NextPage = () => {
  const router = useRouter();
  const userInfo = useGetMeQuery();
  const onSubmit = useHandleSubmit();

  const method = useForm<UserSettingTypes>({
    defaultValues: userInfo.data?.settings,
  });

  useEffect(() => {
    method.reset(userInfo.data?.settings);
  }, [method, userInfo.data?.settings]);

  if (userInfo.isError) router.push("/login");
  if (userInfo.isLoading) return <h1>유저 설정 로딩중..</h1>;

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
