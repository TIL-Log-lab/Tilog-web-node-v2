import OCategorySearch from "@Organisms/CategorySearch";
import MCoverImage from "src/components/Molecules/Button/CoverImage";
import MPostEditor from "src/components/Molecules/PostEditor";

const OEditor = () => {
  return (
    <div className="my-5 w-[60rem] h-full">
      <MCoverImage />
      <input
        className="w-full px-10 text-4xl font-bold pt-7"
        placeholder="제목"
      ></input>
      <input
        className="w-full px-10 text-2xl font-bold pt-7"
        placeholder="부제목"
      ></input>
      <div className="pl-10 bg-white dark:bg-neutral-900">
        <OCategorySearch />
      </div>
      <MPostEditor />
      <div className="flex w-1/2 space-x-5">
        <button className="h-12 mt-3 text-lg text-white rounded w-28 bg-signature-color ">
          등록
        </button>
        <button className="w-32 h-12 mt-3 text-lg rounded text-neutral-400 hover:text-white hover:bg-signature-color-blur">
          비밀글로 등록
        </button>
        <button className="h-12 mt-3 rounded w-28 text-neutral-400 hover:bg-neutral-300 hover:text-white">
          임시저장
        </button>
      </div>
    </div>
  );
};

export default OEditor;
