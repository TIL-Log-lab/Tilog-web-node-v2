import { RegisterOptions } from "react-hook-form";

import { MAX_LENGTH } from "@Constants/text/rules";

import CreatePostRequestBodyDto from "@Components/organisms/writer/interface/CreatePostRequestBodyDto";
import { LanguageUnionType } from "@Library/language/interface";

const titleRules = (
  language: LanguageUnionType
): RegisterOptions<CreatePostRequestBodyDto> => {
  return {
    required: true,
    maxLength: {
      value: 50,
      message: MAX_LENGTH(50, language),
    },
  };
};

export default titleRules;
