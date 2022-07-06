import { LANGUAGE } from "utility/language/language";

type MessageInterface = Record<typeof LANGUAGE[keyof typeof LANGUAGE], string>;
export default MessageInterface;
