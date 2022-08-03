import techIconsProvider from "./TechIcons";

interface Props {
  categoryName: string;
}
const RenderTechIcons = ({ categoryName }: Props) => {
  const upperCaseCategoryName = categoryName.toUpperCase();

  if (upperCaseCategoryName in techIconsProvider) {
    return techIconsProvider[upperCaseCategoryName];
  }
  return techIconsProvider.UNKNOWN;
};
export default RenderTechIcons;
