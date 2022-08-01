import changeDateToDateFnsFormat from "@Library/date-fns/changeDateToDateFnsFormat";

interface CreatedDateProps {
  fontSize: string;
  date: string;
}

const CreatedDate = ({ date, fontSize = "font-xs" }: CreatedDateProps) => {
  const dateFnsFormat = changeDateToDateFnsFormat(date);
  return (
    <span
      className={` text-neutral-500 ${fontSize} font-eng-sub-font-2 font-medium`}
    >
      {dateFnsFormat}
    </span>
  );
};

export default CreatedDate;
