import { useRouter } from "next/router";

import { useMutation } from "react-query";

import api from "@Library/api";

import { CreatePostRequestBodyDto } from "@til-log.lab/tilog-api";

const useSetPostMutation = () => {
  const router = useRouter();
  return useMutation(
    (postData: CreatePostRequestBodyDto) =>
      api.postService.createPost(postData),
    {
      onSuccess(data) {
        router.push(`post/${data.data.id}`);
      },
    }
  );
};

export default useSetPostMutation;
