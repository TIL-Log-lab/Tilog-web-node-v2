import * as BS from "react-icons/bs";

import techIconsProvider from "src/components/organisms/techIcons/icon";

interface Props {
  categoryName: string;
}
const TechIcons = ({ categoryName }: Props) => {
  const upper_categoryName = categoryName.toUpperCase();

  if (upper_categoryName in techIconsProvider) {
    return techIconsProvider[upper_categoryName];
  }
  return <BS.BsFillPatchQuestionFill />;
};
export default TechIcons;
