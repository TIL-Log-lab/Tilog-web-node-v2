import { HTMLAttributes } from "react";

import changeDateToDateFnsFormat from "@Library/date-fns/changeDateToDateFnsFormat";

interface PublishDateProps extends HTMLAttributes<HTMLParagraphElement> {
  className: string;
  date: string;
}

const DateFnsFormatter = ({ date, className, ...props }: PublishDateProps) => {
  const dateFnsFormat = changeDateToDateFnsFormat(date);
  return (
    <p {...props} className={className}>
      {dateFnsFormat}
    </p>
  );
};

export default DateFnsFormatter;
