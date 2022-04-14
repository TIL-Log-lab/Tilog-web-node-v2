interface MTitleAndDescProps {
  title: string;
  desc: string;
}

const MTitleAndDesc = ({ title, desc }: MTitleAndDescProps) => {
  return (
    <div className="flex flex-col">
      <h2>{title}</h2>
      <p>{desc}</p>
    </div>
  );
};
export default MTitleAndDesc;
