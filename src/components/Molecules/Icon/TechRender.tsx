import TechIcons from "@Utility/TechIcons";

interface Props {
  categoryName: string;
}
const MTechRender = ({ categoryName }: Props) => {
  const { Render } = TechIcons[categoryName];

  if (!TechIcons[categoryName]) {
    const { Render } = TechIcons["Unknown"];
    return <Render />;
  }
  return <Render />;
};

export default MTechRender;
