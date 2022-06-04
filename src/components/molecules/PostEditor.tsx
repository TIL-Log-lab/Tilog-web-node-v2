import StarterKit from "@tiptap/starter-kit";
import { EditorContent, useEditor } from "@tiptap/react";

interface MPostEditorProps {
  editorMode: boolean;
  preViewContent: string;
}

const MPostEditor = ({ editorMode, preViewContent }: MPostEditorProps) => {
  const editor = useEditor({
    extensions: [StarterKit],
    autofocus: true,
    editable: editorMode,
    content: preViewContent,
    editorProps: {
      attributes: {
        class: `w-full h-full px-10 py-5 prose prose-sm max-w-none dark:prose-invert focus:outline-none overflow-y-auto prose-img:ml-auto prose-img:mr-auto prose-img:border prose-img:border-gray-200 dark:text-white text-natural-700 dark:prose-img:border-gray-700`,
      },
    },
  });
  if (!editor) return <></>;

  return <EditorContent className={`z-0 h-full`} editor={editor} />;
};

export default MPostEditor;
