import MPostEditor from "src/components/molecules/PostEditor";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import {
  CreatePostRequestBodyDto,
  GetPostDetailResponseDto,
} from "@til-log.lab/tilog-api";
import { useEffect, useState } from "react";

import useEditorMutation from "@Query/editor/useEditorMutation";
import toast from "react-hot-toast";
import { useRouter } from "next/router";
import OCategorySearch from "@Organisms/category-search/CategorySearch";
import EditorType from "@Organisms/editor/interface/EditorType";
import { EditorTitle } from "@Organisms/editor/component/Title";
import { EditorSubTitle } from "@Organisms/editor/component/SubTItle";

interface PostDetailPageProps {
  post: GetPostDetailResponseDto;
}

const ModifyEditor = ({ post }: PostDetailPageProps) => {
  const [loading, isLoading] = useState(false);
  const router = useRouter();
  const {
    register,
    control,
    reset,
    getValues,
    watch,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<EditorType>({
    defaultValues: !post
      ? {}
      : {
          title: post.title,
          subTitle: post.subTitle,
          markdownContent: post.content,
          category: {
            id: post.category.categoryId,
            categoryName: post.category.name,
          },
        },
  });
  const mutation = useEditorMutation();

  // NOTE: 작성중이 글을 로컬 스토리지에 저장합니다.
  useEffect(() => {
    const subscription = watch((value) => {
      return localStorage.setItem(
        !post?.id ? "postDetail" : "postDetail" + post?.id,
        JSON.stringify(value)
      );
    });
    return () => subscription.unsubscribe();
  }, [post, watch]);

  // NOTE: 로컬스토리지에서 작성중인 글을 불러옵니다.
  useEffect(() => {
    const postDetail = localStorage.getItem(
      !post?.id ? "postDetail" : "postDetail" + post?.id
    );

    if (!postDetail) {
      return isLoading(true);
    }
    reset(JSON.parse(postDetail));
    isLoading(true);
  }, [reset, loading, post]);

  // NOTE: 제출 이벤트
  const onSubmit: SubmitHandler<EditorType> = (object) => {
    const toastLoading = toast.loading("업로드 중..");
    const requestData: CreatePostRequestBodyDto = {
      title: object.title,
      subTitle: object.subTitle,
      thumbnailUrl: object.thumbnailUrl,
      markdownContent: object.markdownContent,
      categoryId: object.category.id,
      isPrivate: object.isPrivate,
    };
    mutation.mutate(requestData, {
      onSuccess: () => {
        toast.success("업로드 성공!", {
          id: toastLoading,
        });
        reset();
        localStorage.removeItem("postDetail");
        router.replace("/");
      },
      onError: (e) => {
        toast.error(e.message.en, {
          id: toastLoading,
        });
      },
    });
  };
  return (
    <>
      {loading && (
        <div className="my-5 w-[60rem] h-full">
          {/* <MCoverImage /> */}
          <form onSubmit={handleSubmit(onSubmit)}>
            <EditorTitle message={errors.title?.message} register={register} />
            <EditorSubTitle
              message={errors.subTitle?.message}
              register={register}
            />
            {/** 카테고리 검색 */}
            <div className="pl-10 bg-white dark:bg-neutral-900">
              <OCategorySearch
                localStorageKey={
                  !post?.id ? "postDetail" : "postDetail" + post?.id
                }
                getValues={getValues}
                register={register}
                setValue={setValue}
              />
            </div>
            {/** 컨텐츠 */}
            <Controller
              control={control}
              name="markdownContent"
              render={({ field }) => {
                return (
                  <div className="bg-white">
                    <MPostEditor
                      editorMode={true}
                      preViewContent={
                        !field.value ? "" : JSON.parse(field.value)
                      }
                      onChange={field.onChange}
                    />
                  </div>
                );
              }}
            />
            <div className="flex w-1/2 space-x-5">
              <input
                type="submit"
                className="h-12 mt-3 text-lg text-white rounded w-28 bg-signature-color "
                onClick={() => setValue("isPrivate", false)}
                value="글 등록"
              />
              <input
                type="submit"
                className="w-32 h-12 mt-3 text-lg rounded text-neutral-400 hover:text-white hover:bg-signature-color-blur"
                onClick={() => setValue("isPrivate", true)}
                value="비밀글 등록"
              />
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default ModifyEditor;
