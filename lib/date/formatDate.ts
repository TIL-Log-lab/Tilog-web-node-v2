import { ko } from "date-fns/locale";
import { format, formatDistanceToNow } from "date-fns";

import { JUST_NOW } from "@Date/constants/time";

export default function formatDate(date: string): string {
  const postingDate = new Date(date).getTime();
  const currentDate = Date.now();
  const diff = (currentDate - postingDate) / 1000;

  // NOTE: 1분 미만
  if (diff < 60 * 1) {
    return JUST_NOW;
  }
  // NOTE: 1년 미만
  if (diff < 60 * 60 * 24 * 365) {
    return formatDistanceToNow(postingDate, { addSuffix: true, locale: ko });
  }

  // NOTE: 1년 이상
  return format(postingDate, "PPP", { locale: ko });
}
