import Link from "@tiptap/extension-link";
import { EditorOptions, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

import { useFormContext } from "react-hook-form";

import { MARKDOWN_CONTENT } from "@Library/constants/writer";

import { CreatePostRequestBodyDto } from "@til-log.lab/tilog-api";

const useTiptapEditor = (content: EditorOptions["content"]) => {
  const { setValue } = useFormContext<CreatePostRequestBodyDto>();
  return useEditor({
    extensions: [StarterKit, Link],

    editable: true,
    content,
    onUpdate(props) {
      const updatedContent = JSON.stringify(props.editor.getJSON());
      setValue(MARKDOWN_CONTENT, updatedContent);
    },
    editorProps: {
      attributes: {
        class:
          "w-full h-full prose scrollbar-hide prose-p:text-neutral-800 dark:prose-p:text-neutral-50 max-w-none dark:prose-invert focus:outline-none overflow-y-auto prose-img:ml-auto prose-img:mr-auto prose-img:border prose-img:border-gray-200 dark:text-white text-natural-700 dark:prose-img:border-gray-700",
      },
    },
  });
};
export default useTiptapEditor;
