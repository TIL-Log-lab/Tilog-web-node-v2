import TechIcons from "@Organisms/techIcons/icon";

interface Props {
  categoryName: string;
}
const OTechIcons = ({ categoryName }: Props) => {
  const { Render } = TechIcons[categoryName];

  if (!TechIcons[categoryName]) {
    const { Render } = TechIcons["Unknown"];
    return <Render />;
  }
  return <Render />;
};

export default OTechIcons;
