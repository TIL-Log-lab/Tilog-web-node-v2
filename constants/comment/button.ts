import LANGUAGE from "@Library/language/constant";

import { LanguageInterface } from "@Library/language/interface";

export const COMMENT_INPUT: LanguageInterface = {
  [LANGUAGE.ko]: "댓글 작성",
  [LANGUAGE.en]: "Writing a comment",
};

export const REPLY_INPUT: LanguageInterface = {
  [LANGUAGE.ko]: "답글 작성",
  [LANGUAGE.en]: "Writing a reply",
};

export const UPDATE_COMMENT: LanguageInterface = {
  [LANGUAGE.ko]: "댓글 수정",
  [LANGUAGE.en]: "Updating a comment",
};

export const UPDATE_COMMENT_CANCEL: LanguageInterface = {
  [LANGUAGE.ko]: "취소",
  [LANGUAGE.en]: "Cancel",
};

export const UPDATE_REPLY: LanguageInterface = {
  [LANGUAGE.ko]: "답글 수정",
  [LANGUAGE.en]: "Updating a reply",
};
