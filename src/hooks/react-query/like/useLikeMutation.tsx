import toast from "react-hot-toast";
import { AxiosResponse } from "axios";
import { useSelector } from "react-redux";
import { useMutation } from "react-query";

import { languageSelector } from "@Redux/userInfo";
import { setLike, unSetLike } from "@Api/adapter/postLike";
import clientSideAuthentication from "@Auth/clientSideAuthentication";

import ExceptionInterface from "@Api/errors/interfaces";

export default function useLikeMutation() {
  const language = useSelector(languageSelector);
  const likeMutation = useMutation<
    Promise<AxiosResponse<void>>,
    ExceptionInterface,
    string
  >((postId: string) => clientSideAuthentication(() => setLike(postId)), {
    onError: (error) => {
      toast.error(error.message[language]);
    },
  });

  const unLikeMutation = useMutation<
    Promise<AxiosResponse<void>>,
    ExceptionInterface,
    string
  >((postId: string) => clientSideAuthentication(() => unSetLike(postId)), {
    onError: (error) => {
      toast.error(error.message[language]);
    },
  });

  return [likeMutation, unLikeMutation];
}
