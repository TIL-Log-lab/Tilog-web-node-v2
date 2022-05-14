import { COUNTRY } from "@Api/errors/constant/country";

import { CountryLiteralType } from "@Api/errors/interface/exception.interface";

export default function getUserLanguage(): CountryLiteralType {
  const language = navigator.language.substring(0, 2).toLowerCase();

  if (language in COUNTRY) {
    const targetLanguage = language as CountryLiteralType;
    return COUNTRY[targetLanguage];
  }
  return COUNTRY.ko;
}
