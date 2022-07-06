import { LanguageUnionType, LANGUAGE } from "utility/language/language";

export default function getUserLanguage(): LanguageUnionType {
  const language = navigator.language.substring(0, 2).toLowerCase();

  if (language in LANGUAGE) {
    const userLanguage = language as LanguageUnionType;
    return LANGUAGE[userLanguage];
  }
  return LANGUAGE.ko;
}
