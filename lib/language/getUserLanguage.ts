import LANGUAGE from "@Library/language/constant";

import { LanguageUnionType } from "@Library/language/interface";

export default function getUserLanguage(): LanguageUnionType {
  const language = navigator.language.substring(0, 2).toLowerCase();

  if (language in LANGUAGE) {
    const userLanguage = language as LanguageUnionType;
    return LANGUAGE[userLanguage];
  }
  return LANGUAGE.en;
}
