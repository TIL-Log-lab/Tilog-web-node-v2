import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

interface ATextEditorProps {
  placeholder: string;
  styles: string;
}
const ATextEditor = () => {
  const editor = useEditor({
    extensions: [StarterKit],
    content: "",
    editorProps: {
      attributes: {
        class: `w-full h-[500px] p-10 prose prose-sm max-w-none dark:prose-invert focus:outline-none overflow-y-auto prose-img:ml-auto prose-img:mr-auto prose-img:border prose-img:border-gray-200 dark:text-white  dark:prose-img:border-gray-700`,
      },
    },
  });
  if (!editor) return <></>;
  return (
    <EditorContent className="bg-white dark:bg-neutral-900" editor={editor} />
  );
};

export default ATextEditor;
