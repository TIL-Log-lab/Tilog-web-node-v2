import LANGUAGE from "@Library/language/constant";

import { LanguageInterface } from "@Library/language/interface";

export const POSITION_DESC: LanguageInterface = {
  [LANGUAGE.ko]: `현재 회사에서 일하는 포지션 또는 희망하는 포지션을 입력해주세요.`,
  [LANGUAGE.en]: `Please enter the position you are currently working for or the position you want.`,
};
export const EMAIL_DESC: LanguageInterface = {
  [LANGUAGE.ko]: `연락할 이메일을 입력하세요.`,
  [LANGUAGE.en]: `Please enter an e-mail to be contacted.
    `,
};
export const INTRO_MSG_DESC: LanguageInterface = {
  [LANGUAGE.ko]: `자신을 한줄로 표현해주세요. 
    개인 블로그에 표시됩니다.`,
  [LANGUAGE.en]: `Please introduction yourself in one line.
    Appears on your personal blog.`,
};
export const DISPLAY_NAME_DESC: LanguageInterface = {
  [LANGUAGE.ko]: `틸로그에서 사용할 닉네임을 지정해주세요. 
    블로그이름, 개인블로그에서 사용되는 이름입니다.`,
  [LANGUAGE.en]: `Please specify a nickname to use in the TILog. 
    The name of the blog, the name used by the private blog.`,
};
