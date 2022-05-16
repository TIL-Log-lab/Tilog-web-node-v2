import TechIcons from "src/components/organisms/techIcons/icon";

interface Props {
  categoryName: string;
}
const OTechIcons = ({ categoryName }: Props) => {
  const upper_categoryName = categoryName.toUpperCase();

  if (!TechIcons[upper_categoryName]) {
    const { Render } = TechIcons["UNKNOWN"];
    return <Render />;
  }
  const { Render } = TechIcons[upper_categoryName];
  return <Render />;
};

export default OTechIcons;
