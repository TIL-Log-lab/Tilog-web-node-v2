import PrimaryButton from "@Components/common/atom/buttons/PrimaryButton";
import { SUMMIT_SETTINGS } from "@Library/constants/settings";

const SettingsSubmit = () => {
  return (
    <PrimaryButton
      isSubmit
      className="dark:bg-neutral-900 w-full max-w-[150px]"
    >
      {SUMMIT_SETTINGS.ko}
    </PrimaryButton>
  );
};

export default SettingsSubmit;
