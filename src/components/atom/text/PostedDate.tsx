import changeDateToDateFnsFormat from "@Library/date-fns/changeDateToDateFnsFormat";

import { PostedDateProps } from "@Components/atom/text/interface";

const PostedDate = ({ date, postedDateStyle }: PostedDateProps) => {
  return (
    <span
      className={`${postedDateStyle} text-sm font-semibold text-neutral-400 font-eng-sub-font-1`}
    >
      {changeDateToDateFnsFormat(date)}
    </span>
  );
};

export default PostedDate;
