import { useFormContext } from "react-hook-form";

import TextInput from "@Components/atom/input/TextInput";
import subTitleRules from "@Components/organisms/writer/input/rules/subTitleRules";
import { SUBTITLE_PLACEHOLDER, SUBTITLE } from "@Constants/text/writer";

import CreatePostRequestBodyDto from "@Components/organisms/writer/interface/CreatePostRequestBodyDto";

const SubTitleInput = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<CreatePostRequestBodyDto>();

  const errorMessage = !errors.subTitle ? "" : errors.subTitle.message;

  return (
    <TextInput
      register={register}
      rules={subTitleRules("ko")}
      inputName={SUBTITLE}
      errorMessage={errorMessage}
      fontSize="text-xl md:text-2xl"
      placeholder={SUBTITLE_PLACEHOLDER.ko}
    />
  );
};

export default SubTitleInput;
