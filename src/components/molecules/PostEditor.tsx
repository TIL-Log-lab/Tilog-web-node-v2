import StarterKit from "@tiptap/starter-kit";
import { EditorContent, useEditor } from "@tiptap/react";

const MPostEditor = () => {
  const editor = useEditor({
    extensions: [StarterKit],
    content: "",
    editorProps: {
      attributes: {
        class: `w-full h-full px-10 py-5 prose prose-sm max-w-none dark:prose-invert focus:outline-none overflow-y-auto prose-img:ml-auto prose-img:mr-auto prose-img:border prose-img:border-gray-200 dark:text-white text-natural-700 dark:prose-img:border-gray-700`,
      },
    },
  });
  if (!editor) return <></>;

  return (
    <EditorContent
      className={`z-0 h-4/6 bg-white dark:bg-neutral-900`}
      editor={editor}
    />
  );
};
export default MPostEditor;
