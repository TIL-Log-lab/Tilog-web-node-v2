import { createPost } from "@Api/adapter";
import { useAuthMutation } from "@Query/auth-wrapper/useAuthMutation";
import { CreatePostRequestBodyDto } from "@til-log.lab/tilog-api";

const useEditorMutation = () => {
  return useAuthMutation<CreatePostRequestBodyDto>((data) => createPost(data));
};
export default useEditorMutation;
