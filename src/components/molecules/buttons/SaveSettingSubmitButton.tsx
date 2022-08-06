import PrimarySubmit from "@Components/atom/buttons/PrimarySubmit";
import { SUMMIT } from "@Constants/text/settings";

const SaveSettingSubmitButton = () => {
  return (
    <PrimarySubmit className="w-32">
      <span className="text-neutral-50 ">{SUMMIT.ko}</span>
    </PrimarySubmit>
  );
};

export default SaveSettingSubmitButton;
