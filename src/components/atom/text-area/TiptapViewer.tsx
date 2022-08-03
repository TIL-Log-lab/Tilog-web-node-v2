import { EditorContent, EditorOptions } from "@tiptap/react";

import useTiptapViewer from "@Components/atom/text-area/hooks/useTiptapViewer";

interface TiptapViewerProps {
  content?: EditorOptions["content"];
}

const TiptapViewer = ({ content = null }: TiptapViewerProps) => {
  const tiptapEditor = useTiptapViewer(content);
  if (!tiptapEditor) return null;

  return <EditorContent className="z-0 h-[1000px]" editor={tiptapEditor} />;
};

export default TiptapViewer;
