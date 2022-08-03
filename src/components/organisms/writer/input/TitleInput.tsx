import { useFormContext } from "react-hook-form";

import TextInput from "@Components/atom/input/TextInput";
import titleRules from "@Components/organisms/writer/input/rules/titleRules";
import { TITLE, TITLE_PLACEHOLDER } from "@Constants/text/writer";

import CreatePostRequestBodyDto from "@Components/organisms/writer/interface/CreatePostRequestBodyDto";

const TitleInput = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<CreatePostRequestBodyDto>();
  const errorMessage = !errors.title ? "" : errors.title.message;
  // console.log(errorMessage);
  return (
    <TextInput
      register={register}
      rules={titleRules("ko")}
      inputName={TITLE}
      errorMessage={errorMessage}
      fontSize="text-2xl md:text-4xl"
      placeholder={TITLE_PLACEHOLDER.ko}
    />
  );
};

export default TitleInput;
