import techIconsProvider from "./TechIconsProvider";

interface Props {
  categoryName: string;
}
const TechIcons = ({ categoryName }: Props) => {
  const upper_categoryName = categoryName.toUpperCase();

  if (upper_categoryName in techIconsProvider) {
    return techIconsProvider[upper_categoryName];
  }
  return techIconsProvider["UNKNOWN"];
};
export default TechIcons;
