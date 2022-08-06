import type { NextPage } from "next";

import Writer from "@Components/organisms/writer";

const WriterPage: NextPage = () => {
  return (
    <div className="m-auto max-w-[1000px] h-full p-10 items-center px-5">
      <Writer />
    </div>
  );
};

export default WriterPage;
