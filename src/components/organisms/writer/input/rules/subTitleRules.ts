import { RegisterOptions } from "react-hook-form";

import { MAX_LENGTH } from "@Constants/text/rules";

import CreatePostRequestBodyDto from "@Components/organisms/writer/interface/CreatePostRequestBodyDto";
import { LanguageUnionType } from "@Library/language/interface";

const subTitleRules = (
  language: LanguageUnionType
): RegisterOptions<CreatePostRequestBodyDto> => {
  return {
    required: true,
    maxLength: {
      value: 190,
      message: MAX_LENGTH(190, language),
    },
  };
};

export default subTitleRules;
