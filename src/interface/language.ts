import { ko, enUS } from "date-fns/locale";

export const LANGUAGE = {
  ko: "ko",
  en: "en",
} as const;

export const DATE_FNS_LANGUAGE = {
  ko: ko,
  en: enUS,
} as const;

export type LanguageUnionType =
  | keyof typeof DATE_FNS_LANGUAGE
  | keyof typeof LANGUAGE;
