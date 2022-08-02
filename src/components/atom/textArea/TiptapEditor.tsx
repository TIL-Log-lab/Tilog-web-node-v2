import { EditorContent, EditorOptions } from "@tiptap/react";

import useTiptapEditor from "./hooks/useTiptapEditor";

interface TiptapEditorProps {
  editable: EditorOptions["editable"];
  content?: EditorOptions["content"];
}

const TiptapEditor = ({
  editable = false,
  content = null,
}: TiptapEditorProps) => {
  const tiptapEditor = useTiptapEditor(editable, content);
  if (!tiptapEditor) return null;

  return (
    <EditorContent
      className="z-0 h-[1000px] p-5 bg-white dark:bg-neutral-900"
      editor={tiptapEditor}
    />
  );
};

export default TiptapEditor;
