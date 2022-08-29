import { RegisterOptions } from "react-hook-form";

import { MAX_LENGTH } from "@Library/constants/input/rules";

import WriterFormTypes from "@Components/modules/writer/interface/writerFormTypes";
import { LanguageUnionType } from "@Library/language/interface";

const subTitleRules = (
  language: LanguageUnionType
): RegisterOptions<WriterFormTypes> => {
  return {
    // required: true,
    maxLength: {
      value: 190,
      message: MAX_LENGTH(190, language),
    },
  };
};

export default subTitleRules;
