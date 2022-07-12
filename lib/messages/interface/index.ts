import { LANGUAGE } from "@Language/language";

type MessageInterface = Record<typeof LANGUAGE[keyof typeof LANGUAGE], string>;
export default MessageInterface;
