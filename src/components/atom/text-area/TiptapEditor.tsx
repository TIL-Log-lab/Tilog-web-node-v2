import { EditorContent, EditorOptions } from "@tiptap/react";

import useTiptapEditor from "./hooks/useTiptapEditor";

interface TiptapEditorProps {
  content?: EditorOptions["content"];
}

const TiptapEditor = ({ content = null }: TiptapEditorProps) => {
  const tiptapEditor = useTiptapEditor(content);
  if (!tiptapEditor) return null;

  return (
    <EditorContent
      className="z-0 h-[1000px] p-5 bg-white dark:bg-neutral-900"
      editor={tiptapEditor}
    />
  );
};

export default TiptapEditor;
