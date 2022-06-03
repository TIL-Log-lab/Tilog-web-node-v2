import { LANGUAGE } from "@Language/index";

type MessageInterface = Record<typeof LANGUAGE[keyof typeof LANGUAGE], string>;
export default MessageInterface;
