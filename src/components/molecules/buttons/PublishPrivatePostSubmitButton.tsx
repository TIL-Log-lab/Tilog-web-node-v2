import SecondaryButton from "@Components/atom/buttons/SecondaryButton";
import { PUBLISH_PRIVATE_POST } from "@Constants/text/writer";

const PublishPrivatePostSubmitButton = () => {
  return (
    <SecondaryButton type="submit" className="w-32 mt-2">
      <span className="text-neutral-50">{PUBLISH_PRIVATE_POST.ko}</span>
    </SecondaryButton>
  );
};

export default PublishPrivatePostSubmitButton;
