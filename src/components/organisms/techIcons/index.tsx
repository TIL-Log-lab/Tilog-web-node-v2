import TechIcons from "src/components/organisms/techIcons/icon";

interface Props {
  categoryName: string;
}
const OTechIcons = ({ categoryName }: Props) => {
  const upper_categoryName = categoryName.toUpperCase();

  if (!TechIcons[upper_categoryName]) {
    return TechIcons["UNKNOWN"];
  }
  return TechIcons[upper_categoryName];
};
export default OTechIcons;
