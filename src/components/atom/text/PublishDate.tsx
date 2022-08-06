import StyledP from "@Components/atom/text/StyledP";
import changeDateToDateFnsFormat from "@Library/date-fns/changeDateToDateFnsFormat";

interface PublishDateProps {
  className: string;
  date: string;
}

const PublishDate = ({ date, className }: PublishDateProps) => {
  const dateFnsFormat = changeDateToDateFnsFormat(date);
  return <StyledP className={className}>{dateFnsFormat}</StyledP>;
};

export default PublishDate;
