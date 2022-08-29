import LANGUAGE from "@Library/language/constant";

import {
  LanguageInterface,
  LanguageUnionType,
} from "@Library/language/interface";

export const MAX_LENGTH = (maxLength: number, language?: LanguageUnionType) => {
  if (language === "ko") return `${maxLength}자 초과 입력이 제한되어 있습니다.`;
  return `${maxLength}characters or more than input is limited.`;
};

export const MIN_LENGTH = (minLength: number, language?: LanguageUnionType) => {
  if (language === "ko") return `${minLength}자 미만 입력이 제한되어 있습니다.`;
  return `${minLength}characters or less input is limited.`;
};

export const WRONG_EMAIL: LanguageInterface = {
  [LANGUAGE.ko]: `잘못된 이메일 형식입니다.`,
  [LANGUAGE.en]: `Invalid email format.`,
};
