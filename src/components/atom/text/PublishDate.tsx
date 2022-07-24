import changeDateToDateFnsFormat from "@Library/date-fns/changeDateToDateFnsFormat";

interface PublishDateProps {
  className: string;
  date: string;
}

const PublishDate = ({ date, className }: PublishDateProps) => {
  const dateFnsFormat = changeDateToDateFnsFormat(date);
  return <span className={className}>{dateFnsFormat}</span>;
};

export default PublishDate;
