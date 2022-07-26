import { useFormContext } from "react-hook-form";

import TextInput from "@Components/atom/input/TextInput";
import Desc from "@Components/atom/text/Desc";
import Title from "@Components/atom/text/Title";
import { positionRules } from "@Components/molecules/input/rules/index";
import { POSITION_DESC } from "@Constants/text/desc";
import { POSITION_TITLE } from "@Constants/text/title";

import UserSettingTypes from "@Library/api/users/interface/userSettingTypes";

const PositionInput = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<UserSettingTypes>();

  const errorMessage = !errors.POSITION ? "" : errors.POSITION.message;

  return (
    <div>
      <div className="max-w-96">
        <Title className="text-4xl">{POSITION_TITLE.ko}</Title>
        <Desc className="mt-2 text-base font-normal text-neutral-500 dark:text-neutral-300">
          {POSITION_DESC.ko}
        </Desc>
      </div>

      <TextInput
        className={`${
          !errorMessage
            ? "dark:focus:border-signature-color focus:border-signature-color"
            : "focus:border-red-600 dark:focus:border-rose-600"
        } bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 focus:outline-none focus:ring-0`}
        register={register}
        rules={positionRules("ko")}
        inputName="POSITION"
        errorMessage={errorMessage}
      />
    </div>
  );
};
export default PositionInput;
