import Link from "@tiptap/extension-link";
import { EditorOptions, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

const useTiptapViewer = (content: EditorOptions["content"]) => {
  return useEditor({
    extensions: [StarterKit, Link],

    editable: false,
    content,
    editorProps: {
      attributes: {
        class:
          "w-full h-full scrollbar-hide prose prose-p:text-neutral-800 dark:prose-p:text-neutral-50 max-w-none dark:prose-invert focus:outline-none overflow-y-auto prose-img:ml-auto prose-img:mr-auto prose-img:border prose-img:border-gray-200 dark:text-white text-natural-700 dark:prose-img:border-gray-700",
      },
    },
  });
};
export default useTiptapViewer;
