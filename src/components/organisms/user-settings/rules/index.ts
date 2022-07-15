import { MAX_LENGTH, MIN_LENGTH, WRONG_EMAIL } from "@Constants/text/rules";
import { LanguageUnionType } from "@Library/language/interface";

export const positionRules = (language: LanguageUnionType) => {
  return {
    minLength: {
      value: 10,
      message: MIN_LENGTH(10, language),
    },
    maxLength: {
      value: 190,
      message: MAX_LENGTH(190, language),
    },
  };
};
export const emailRules = (language: LanguageUnionType) => {
  return {
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
export const introMsgRules = (language: LanguageUnionType) => {
  return {
    minLength: {
      value: 10,
      message: MIN_LENGTH(10, language),
    },
    maxLength: {
      value: 190,
      message: MAX_LENGTH(190, language),
    },
  };
};
export const displayNameRules = (language: LanguageUnionType) => {
  return {
    minLength: {
      value: 2,
      message: MIN_LENGTH(10, language),
    },
    maxLength: {
      value: 190,
      message: MAX_LENGTH(190, language),
    },
  };
};
