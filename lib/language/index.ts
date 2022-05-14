import { COUNTRY } from "@Api/errors/constant/country";

import { CountryUnionType } from "@Api/errors/interface/exception.interface";

export default function getUserLanguage(): CountryUnionType {
  const language = navigator.language.substring(0, 2).toLowerCase();

  if (language in COUNTRY) {
    const targetLanguage = language as CountryUnionType;
    return COUNTRY[targetLanguage];
  }
  return COUNTRY.ko;
}
