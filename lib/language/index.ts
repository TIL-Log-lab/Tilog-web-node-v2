import { COUNTRY } from "@Messages/constants/country";
import { CountryUnionType } from "@Messages/constants/country/interfaces";

export default function getUserLanguage(): CountryUnionType {
  const language = navigator.language.substring(0, 2).toLowerCase();

  if (language in COUNTRY) {
    const userLanguage = language as CountryUnionType;
    return COUNTRY[userLanguage];
  }
  return COUNTRY.ko;
}
