import { format, formatDistanceToNow } from "date-fns";

import { store } from "@Redux/store";

import { JUST_NOW } from "@DateFns/constants";
import { DATE_FNS_LANGUAGE } from "@Language/language";

export default function changeDateToDateFnsFormat(date: string): string {
  const { language } = store.getState().TILog_Info;

  const postingDate = new Date(date).getTime();
  const currentDate = Date.now();
  const diff = (currentDate - postingDate) / 1000;

  // NOTE: 1분 미만
  if (diff < 60 * 1) {
    return JUST_NOW[language];
  }

  // NOTE: 1년 미만
  if (diff < 60 * 60 * 24 * 365) {
    return formatDistanceToNow(postingDate, {
      addSuffix: true,
      locale: DATE_FNS_LANGUAGE[language],
    });
  }

  // NOTE: 1년 이상
  return format(postingDate, "PPP", { locale: DATE_FNS_LANGUAGE[language] });
}
