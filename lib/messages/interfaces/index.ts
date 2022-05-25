import { COUNTRY } from "@Messages/constants/country";

type MessageInterface = Partial<
  Record<typeof COUNTRY[keyof typeof COUNTRY], string>
>;
export default MessageInterface;
