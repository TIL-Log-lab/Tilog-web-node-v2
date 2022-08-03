import SecondaryButton from "@Components/atom/buttons/SecondaryButton";
import PUBLISH_PRIVATE_POST from "@Constants/text/post/publishPrivatePost";

const PublishPrivatePostSubmitButton = () => {
  return (
    <SecondaryButton className="w-32">
      <span className="text-neutral-50">{PUBLISH_PRIVATE_POST.ko}</span>
    </SecondaryButton>
  );
};

export default PublishPrivatePostSubmitButton;
