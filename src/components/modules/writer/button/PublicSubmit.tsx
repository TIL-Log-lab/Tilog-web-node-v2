import { useFormContext } from "react-hook-form";

import PrimaryButton from "@Components/common/atom/buttons/PrimaryButton";
import { IS_PRIVATE, PUBLISH_POST } from "@Library/constants/writer";

import { CreatePostRequestBodyDto } from "@til-log.lab/tilog-api";

const PublicSubmit = () => {
  const { setValue } = useFormContext<CreatePostRequestBodyDto>();
  const handleSubmit = () => {
    setValue(IS_PRIVATE, false);
  };
  return (
    <PrimaryButton isSubmit onClick={handleSubmit}>
      {PUBLISH_POST.ko}
    </PrimaryButton>
  );
};

export default PublicSubmit;
