interface MTitleAndDescProps {
  isCenter: boolean;
  space?: string;
  title: string;
  desc: string;
}

const MTitleAndDesc = ({ title, desc, isCenter }: MTitleAndDescProps) => {
  return (
    <div
      className={`flex flex-col space-y-3 ${isCenter ? "items-center" : ""}`}
    >
      <h1 className="font-bold">{title}</h1>
      <p className="text-base font-normal">{desc}</p>
    </div>
  );
};
export default MTitleAndDesc;
