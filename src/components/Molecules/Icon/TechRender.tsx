import techIcons from "@Utility/TechIcons";

interface Props {
  categoryName: string;
}
const MTechRender = ({ categoryName }: Props) => {
  if (!techIcons[categoryName]) return null;
  const { Render } = techIcons[categoryName];
  return (
    <div className="mr-4">
      <Render />
    </div>
  );
};

export default MTechRender;
