import { useFormContext } from "react-hook-form";

import ImageInput from "@Components/common/atom/input/ImageInput";
import ImagePreView from "@Components/modules/writer/input/cover-image/ImagePreview";
import { THUMBNAIL_URL } from "@Library/constants/writer";

import WriterFormTypes from "@Components/modules/writer/interface/writerFormTypes";

const CoverImage = () => {
  const { register } = useFormContext<WriterFormTypes>();

  return (
    <div>
      <ImageInput register={register} inputName={THUMBNAIL_URL} id="image" />
      <ImagePreView />
    </div>
  );
};

export default CoverImage;
