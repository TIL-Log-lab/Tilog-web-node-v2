import MCoverImage from "src/components/Molecules/Button/CoverImage";
import MPostEditor from "src/components/Molecules/PostEditor";

const OEditor = () => {
  return (
    <div className="w-[60rem] h-full">
      <MCoverImage />
      <input
        className="w-full px-10 text-4xl font-bold pt-7"
        placeholder="제목"
      ></input>
      <input
        className="w-full px-10 text-2xl font-bold pt-7"
        placeholder="부제목"
      ></input>
      <input
        className="w-full px-10 text-xl font-bold pt-7"
        placeholder="테그"
      />
      <MPostEditor />

      <button className="w-56 h-12 rounded bg-signature-color ">
        <p className="text-lg text-white">등록</p>
      </button>
    </div>
  );
};

export default OEditor;
