import { RegisterOptions } from "react-hook-form";

import { MAX_LENGTH, MIN_LENGTH } from "@Library/constants/input/rules";

import UserSettingTypes from "@Library/api/users/interface/userSettingTypes";
import { LanguageUnionType } from "@Library/language/interface";

const displayNameRules = (
  language: LanguageUnionType
): RegisterOptions<UserSettingTypes> => {
  return {
    required: true,
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

export default displayNameRules;
