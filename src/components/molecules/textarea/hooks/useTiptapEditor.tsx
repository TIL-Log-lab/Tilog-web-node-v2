import { EditorOptions, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

import { useFormContext } from "react-hook-form";

import { CreatePostRequestBodyDto } from "@til-log.lab/tilog-api";

const useTiptapEditor = (
  editable: EditorOptions["editable"],
  content: EditorOptions["content"]
) => {
  const { setValue } = useFormContext<CreatePostRequestBodyDto>();
  return useEditor({
    extensions: [StarterKit],

    editable,
    content,
    onUpdate(props) {
      const updatedContent = JSON.stringify(props.editor.getJSON());
      setValue("markdownContent", updatedContent);
    },
    editorProps: {
      attributes: {
        class:
          "w-full h-full prose xl:prose-xl max-w-none dark:prose-invert focus:outline-none overflow-y-auto prose-img:ml-auto prose-img:mr-auto prose-img:border prose-img:border-gray-200 dark:text-white text-natural-700 dark:prose-img:border-gray-700",
      },
    },
  });
};
export default useTiptapEditor;
