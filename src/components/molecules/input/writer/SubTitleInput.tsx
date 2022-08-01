import { useFormContext } from "react-hook-form";

import TextInput from "@Components/atom/input/TextInput";

import { CreatePostRequestBodyDto } from "@til-log.lab/tilog-api";

const SubTitleInput = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<CreatePostRequestBodyDto>();

  const errorMessage = !errors.subTitle ? "" : errors.subTitle.message;

  return (
    <TextInput
      register={register}
      inputName="subTitle"
      errorMessage={errorMessage}
      className="text-2xl font-semibold"
      placeholder="부제목을 입력해주세요."
    />
  );
};

export default SubTitleInput;
