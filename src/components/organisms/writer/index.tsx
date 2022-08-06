import { FormProvider, useForm } from "react-hook-form";

import PrimarySubmit from "@Components/atom/buttons/PrimarySubmit";
import SecondarySubmit from "@Components/atom/buttons/SecondarySubmit";
import TiptapEditor from "@Components/atom/text-area/TiptapEditor";
import useHandleSummit from "@Components/organisms/writer/hooks/useHandleSummit";
import SearchCategory from "@Components/organisms/writer/input/category-search";
import CoverImage from "@Components/organisms/writer/input/cover-image";
import SubTitleInput from "@Components/organisms/writer/input/SubTitleInput";
import TitleInput from "@Components/organisms/writer/input/TitleInput";
import {
  IS_PRIVATE,
  PUBLISH_POST,
  PUBLISH_PRIVATE_POST,
} from "@Constants/text/writer";

import { CreatePostRequestBodyDto } from "@til-log.lab/tilog-api";

const Writer = () => {
  const method = useForm<CreatePostRequestBodyDto>();
  const summit = useHandleSummit();
  return (
    <FormProvider {...method}>
      <form onSubmit={method.handleSubmit(summit)}>
        <CoverImage />
        <TitleInput />
        <SubTitleInput />
        <SearchCategory />
        <TiptapEditor />
        <div className="flex justify-end gap-x-2">
          <SecondarySubmit
            onClick={() => method.setValue(IS_PRIVATE, true)}
            className="w-32 mt-2 hover:text-neutral-50 dark:text-neutral-50 text-neutral-400"
          >
            <span className="">{PUBLISH_PRIVATE_POST.ko}</span>
          </SecondarySubmit>
          <PrimarySubmit
            onClick={() => method.setValue(IS_PRIVATE, false)}
            className="w-32 mt-2"
          >
            <span className="text-neutral-50">{PUBLISH_POST.ko}</span>
          </PrimarySubmit>
        </div>
      </form>
    </FormProvider>
  );
};

export default Writer;
