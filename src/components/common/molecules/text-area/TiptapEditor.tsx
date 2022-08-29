import { EditorContent, EditorOptions } from "@tiptap/react";

import { useFormContext } from "react-hook-form";

import { MARKDOWN_CONTENT } from "@Library/constants/writer";

import { CreatePostRequestBodyDto } from "@til-log.lab/tilog-api";

import useTiptapEditor from "./hooks/useTiptapEditor";

interface TiptapEditorProps {
  content?: EditorOptions["content"];
}

const TiptapEditor = ({ content = null }: TiptapEditorProps) => {
  const { register } = useFormContext<CreatePostRequestBodyDto>();
  const tiptapEditor = useTiptapEditor(content);
  if (!tiptapEditor) return null;

  return (
    <EditorContent
      {...register(MARKDOWN_CONTENT, {
        required: true,
      })}
      className="z-0 h-[1000px] p-5 bg-white dark:bg-neutral-800"
      editor={tiptapEditor}
    />
  );
};

export default TiptapEditor;
