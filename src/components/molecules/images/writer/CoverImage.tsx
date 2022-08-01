import { useFormContext } from "react-hook-form";

import ImageInput from "@Components/atom/input/ImageInput";
import ImagePreView from "@Components/molecules/images/writer/ImagePreview";

import { CreatePostRequestBodyDto } from "@til-log.lab/tilog-api";

const CoverImage = () => {
  const { register } = useFormContext<CreatePostRequestBodyDto>();

  return (
    <div>
      <ImageInput register={register} inputName="thumbnailUrl" id="image" />
      <ImagePreView />
    </div>
  );
};

export default CoverImage;
