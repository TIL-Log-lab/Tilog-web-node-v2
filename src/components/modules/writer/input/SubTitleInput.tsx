import { useFormContext } from "react-hook-form";

import TextInput from "@Components/common/atom/input/TextInput";
import subTitleRules from "@Components/modules/writer/input/rules/subTitleRules";
import { SUBTITLE_PLACEHOLDER, SUBTITLE } from "@Library/constants/writer";

import WriterFormTypes from "@Components/modules/writer/interface/writerFormTypes";

const SubTitleInput = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<WriterFormTypes>();

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
