import LANGUAGE from "@Library/language/constant";

import { LanguageInterface } from "@Library/language/interface";

export const INTRO_TITLE: LanguageInterface = {
  [LANGUAGE.ko]: "Today I Learned Log.",
  [LANGUAGE.en]: "Today I Learned Log.",
};

export const INTRO_SUBTITLE: LanguageInterface = {
  [LANGUAGE.ko]: "오늘 배운것을 기록하고, 남들과 공유해보세요.",
  [LANGUAGE.en]: "Record what you learned today and share it with others.",
};

export const LOGGED_IN: LanguageInterface = {
  [LANGUAGE.ko]: "지금 바로 새로운 글을 작성해보세요.",
  [LANGUAGE.en]: "Try writing a new article right now.",
};

export const LOGGED_OUT: LanguageInterface = {
  [LANGUAGE.ko]: "아직 회원이 아니시군요? 🤩버튼 한번에 가입 할 수 있어요!🤩",
  [LANGUAGE.en]:
    "You're not a member yet, are you? You can sign up for the 🤩 button at once!🤩",
};

export const LOGGED_IN_BUTTON: LanguageInterface = {
  [LANGUAGE.ko]: "글쓰기",
  [LANGUAGE.en]: "Write",
};
