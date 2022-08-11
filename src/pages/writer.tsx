import type { NextPage } from "next";
import Head from "next/head";

import { FormProvider, useForm } from "react-hook-form";

import TiptapEditor from "@Components/common/molecules/text-area/TiptapEditor";
import PrivateSubmit from "@Components/modules/writer/button/PrivateSubmit";
import PublicSubmit from "@Components/modules/writer/button/PublicSubmit";
import SearchCategory from "@Components/modules/writer/input/category-search";
import CoverImage from "@Components/modules/writer/input/cover-image";
import SubTitleInput from "@Components/modules/writer/input/SubTitleInput";
import TitleInput from "@Components/modules/writer/input/TitleInput";
import { TITLE_WRITER } from "@Constants/writer";
import useHandleSummit from "@Hooks/pages/writer/hooks/useHandleSummit";

import WriterFormTypes from "@Components/modules/writer/interface/writerFormTypes";

const WriterPage: NextPage = () => {
  const method = useForm<WriterFormTypes>();
  const onSummit = useHandleSummit();
  return (
    <div className="m-auto max-w-[1000px] h-full p-10 items-center px-5">
      <Head>
        <title>{TITLE_WRITER.ko}</title>
      </Head>
      <FormProvider {...method}>
        <form onSubmit={method.handleSubmit(onSummit)}>
          <CoverImage />
          <TitleInput />
          <SubTitleInput />
          <SearchCategory />
          <TiptapEditor />

          <div className="flex w-[300px] mt-3 space-x-5 ml-auto">
            <PrivateSubmit />
            <PublicSubmit />
          </div>
        </form>
      </FormProvider>
    </div>
  );
};

export default WriterPage;
