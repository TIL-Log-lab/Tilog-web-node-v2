import PrimarySubmit from "@Components/atom/buttons/PrimarySubmit";
import PUBLISH_POST from "@Constants/text/post/publishPost";

const PublishPostSubmitButton = () => {
  return (
    <PrimarySubmit className="w-32">
      <span className="text-neutral-50">{PUBLISH_POST.ko}</span>
    </PrimarySubmit>
  );
};

export default PublishPostSubmitButton;
