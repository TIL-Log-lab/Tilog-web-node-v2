import { EditorContent, EditorOptions } from "@tiptap/react";

import useTiptapViewer from "@Components/common/molecules/text-area/hooks/useTiptapViewer";

interface TiptapViewerProps {
  content?: EditorOptions["content"];
}

const TiptapViewer = ({ content = null }: TiptapViewerProps) => {
  const tiptapEditor = useTiptapViewer(content);
  if (!tiptapEditor) return null;

  return <EditorContent className="z-0" editor={tiptapEditor} />;
};

export default TiptapViewer;
