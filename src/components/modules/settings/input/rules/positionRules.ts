import { RegisterOptions } from "react-hook-form";

import { MAX_LENGTH, MIN_LENGTH } from "@Constants/input/rules";

import UserSettingTypes from "@Library/api/users/interface/userSettingTypes";
import { LanguageUnionType } from "@Library/language/interface";

const positionRules = (
  language: LanguageUnionType
): RegisterOptions<UserSettingTypes> => {
  return {
    minLength: {
      value: 2,
      message: MIN_LENGTH(2, language),
    },
    maxLength: {
      value: 190,
      message: MAX_LENGTH(190, language),
    },
  };
};

export default positionRules;
