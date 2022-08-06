import { FormProvider, useForm } from "react-hook-form";

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
import PrimaryButton from "@Components/atom/buttons/PrimaryButton";
import SecondaryButton from "@Components/atom/buttons/SecondaryButton";

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
          <SecondaryButton
            type="submit"
            onClick={() => method.setValue(IS_PRIVATE, true)}
            className="w-32 mt-2 hover:text-neutral-50 dark:text-neutral-50 text-neutral-400"
          >
            <span className="">{PUBLISH_PRIVATE_POST.ko}</span>
          </SecondaryButton>
          <PrimaryButton
            type="submit"
            onClick={() => method.setValue(IS_PRIVATE, false)}
            className="w-32 mt-2"
          >
            <span className="text-neutral-50">{PUBLISH_POST.ko}</span>
          </PrimaryButton>
        </div>
      </form>
    </FormProvider>
  );
};

export default Writer;
