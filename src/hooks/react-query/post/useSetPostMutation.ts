import { useMutation } from "react-query";

import api from "@Library/api";

import { CreatePostRequestBodyDto } from "@til-log.lab/tilog-api";

import WriterFormTypes from "@Components/modules/writer/interface/writerFormTypes";

const useSetPostMutation = () => {
  return useMutation((formData: WriterFormTypes) => {
    const postData: CreatePostRequestBodyDto = {
      ...formData,
      categoryId: parseInt(formData.categoryId, 10),
    };
    return api.postService.createPost(postData);
  });
};

export default useSetPostMutation;
