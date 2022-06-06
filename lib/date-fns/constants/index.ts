import { LANGUAGE } from "@Language/language";

type DateInterface = Record<typeof LANGUAGE[keyof typeof LANGUAGE], string>;

export const JUST_NOW: DateInterface = {
  ko: "방금 전",
  en: "Just Now",
};
