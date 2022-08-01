import { useFormContext } from "react-hook-form";

import TextInput from "@Components/atom/input/TextInput";

import { CreatePostRequestBodyDto } from "@til-log.lab/tilog-api";

const TitleInput = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<CreatePostRequestBodyDto>();
  const errorMessage = !errors.title ? "" : errors.title.message;

  return (
    <TextInput
      register={register}
      inputName="title"
      errorMessage={errorMessage}
      className="text-4xl font-bold"
      placeholder="제목을 입력해주세요."
    />
  );
};

export default TitleInput;
