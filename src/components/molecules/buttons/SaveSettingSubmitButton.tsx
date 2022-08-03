import PrimarySubmit from "@Components/atom/buttons/PrimarySubmit";
import SAVE_SETTINGS from "@Constants/text/settings/saveSetting";

const SaveSettingSubmitButton = () => {
  return (
    <PrimarySubmit className="w-32">
      <span className="text-neutral-50 ">{SAVE_SETTINGS.ko}</span>
    </PrimarySubmit>
  );
};

export default SaveSettingSubmitButton;
