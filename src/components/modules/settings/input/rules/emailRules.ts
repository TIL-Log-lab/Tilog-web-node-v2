import { RegisterOptions } from "react-hook-form";

import { MAX_LENGTH, WRONG_EMAIL } from "@Library/constants/input/rules";

import UserSettingTypes from "@Library/api/users/interface/userSettingTypes";
import { LanguageUnionType } from "@Library/language/interface";

const emailRules = (
  language: LanguageUnionType
): RegisterOptions<UserSettingTypes> => {
  return {
    required: true,
    pattern: {
      value:
        /[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]$/i,
      message: WRONG_EMAIL[language],
    },
    maxLength: {
      value: 190,
      message: MAX_LENGTH(190, language),
    },
  };
};

export default emailRules;
