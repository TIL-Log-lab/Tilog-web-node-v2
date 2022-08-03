import SecondarySubmit from "@Components/atom/buttons/SecondarySubmit";
import { PUBLISH_PRIVATE_POST } from "@Constants/text/writer";

const PublishPrivatePostSubmitButton = () => {
  return (
    <SecondarySubmit className="w-32 mt-2">
      <span className="text-neutral-50">{PUBLISH_PRIVATE_POST.ko}</span>
    </SecondarySubmit>
  );
};

export default PublishPrivatePostSubmitButton;
