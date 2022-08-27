import { useFormContext } from "react-hook-form";

import SecondaryButton from "@Components/common/atom/buttons/SecondaryButton";
import { IS_PRIVATE, PUBLISH_PRIVATE_POST } from "@Library/constants/writer";

import { CreatePostRequestBodyDto } from "@til-log.lab/tilog-api";

const PrivateSubmit = () => {
  const { setValue } = useFormContext<CreatePostRequestBodyDto>();
  const handleSubmit = () => {
    setValue(IS_PRIVATE, true);
  };
  return (
    <SecondaryButton isSubmit onClick={handleSubmit}>
      {PUBLISH_PRIVATE_POST.ko}
    </SecondaryButton>
  );
};

export default PrivateSubmit;
