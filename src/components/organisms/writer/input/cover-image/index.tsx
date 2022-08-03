import { useFormContext } from "react-hook-form";

import ImageInput from "@Components/atom/input/ImageInput";
import ImagePreView from "@Components/organisms/writer/input/cover-image/ImagePreview";
import { THUMBNAIL_URL } from "@Constants/text/writer";

import { CreatePostRequestBodyDto } from "@til-log.lab/tilog-api";

const CoverImage = () => {
  const { register } = useFormContext<CreatePostRequestBodyDto>();

  return (
    <div>
      <ImageInput register={register} inputName={THUMBNAIL_URL} id="image" />
      <ImagePreView />
    </div>
  );
};

export default CoverImage;
