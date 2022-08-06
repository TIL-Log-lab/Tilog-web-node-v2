import PrimaryButton from "@Components/atom/buttons/PrimaryButton";
import { SUMMIT } from "@Constants/text/settings";

const SaveSettingSubmitButton = () => {
  return (
    <PrimaryButton type="submit" className="w-32">
      <span className="text-neutral-50 ">{SUMMIT.ko}</span>
    </PrimaryButton>
  );
};

export default SaveSettingSubmitButton;
