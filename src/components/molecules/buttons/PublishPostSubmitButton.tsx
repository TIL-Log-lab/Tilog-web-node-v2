import PrimaryButton from "@Components/atom/buttons/PrimaryButton";
import { PUBLISH_POST } from "@Constants/text/writer";

const PublishPostSubmitButton = () => {
  return (
    <PrimaryButton type="submit" className="w-32 mt-2">
      <span className="text-neutral-50">{PUBLISH_POST.ko}</span>
    </PrimaryButton>
  );
};

export default PublishPostSubmitButton;
