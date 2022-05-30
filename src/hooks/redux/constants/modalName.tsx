import OCategorySearch from "@Organisms/CategorySearch";
import OLogin from "@Organisms/Login";

const MODAL_NAME = {
  LOGIN: <OLogin />,
  CATEGORY: <OCategorySearch />,
} as const;
export default MODAL_NAME;
