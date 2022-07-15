import LANGUAGE from "@Library/language/constant";

export type LanguageInterface = Record<
  typeof LANGUAGE[keyof typeof LANGUAGE],
  string
>;
export type LanguageUnionType = keyof typeof LANGUAGE;
