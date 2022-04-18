import type { NextPage } from "next";
import OEditor from "@Organisms/Editor";

const EditorPage: NextPage = () => {
  return (
    <div className="flex justify-center h-screen">
      <OEditor />
    </div>
  );
};
export default EditorPage;
