import { FormProvider, useForm } from "react-hook-form";

import SummitButton from "@Components/atom/button/SummitButton";
import CoverImage from "@Components/molecules/images/writer/CoverImage";
import SearchCategory from "@Components/molecules/input/writer/category-search";
import SubTitleInput from "@Components/molecules/input/writer/SubTitleInput";
import TitleInput from "@Components/molecules/input/writer/TitleInput";
import TiptapEditor from "@Components/molecules/textarea/TiptapEditor";
import useHandleSummit from "@Components/organisms/form/writer/hooks/useHandleSummit";

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
        <TiptapEditor editable />
        <div className="flex gap-x-2">
          <SummitButton
            onClick={() => method.setValue("isPrivate", false)}
            text="게시하기"
          />
          <SummitButton
            onClick={() => method.setValue("isPrivate", true)}
            className="w-40 h-12 text-neutral-800 hover:bg-neutral-300"
            text="비밀로 게시하기"
          />
        </div>
      </form>
    </FormProvider>
  );
};

export default Writer;
