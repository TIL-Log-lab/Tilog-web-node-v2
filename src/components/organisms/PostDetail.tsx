import { AiFillHeart } from "react-icons/ai";
import { BsDot, BsFillShareFill } from "react-icons/bs";

import OTechIcons from "@Organisms/techIcons";
import { GetPostDetailResponseDto } from "@til-log.lab/tilog-api";

interface PostDetailProps {
  postDetail: GetPostDetailResponseDto;
}
const PostDetail = ({ postDetail }: PostDetailProps) => {
  return (
    <div className="w-full">
      <h1>Post Title</h1>
      <h3>Sub Title</h3>
      <p>10일 전</p>
      <div className="relative flex items-center py-5">
        <div className="flex-grow border-t border-gray-400"></div>
        <div className="mx-4">
          <OTechIcons categoryName="Nestjs" />
        </div>
        <div className="flex-grow border-t border-gray-400"></div>
      </div>
      <div className="w-full h-96 bg-signature-color"></div>

      <div className="2xl:flex 2xl:flex-row 2xl:mx-14">
        <div className="p-5 mt-2 w-full h-[1000px] bg-slate-500"></div>
        <div className="grid mt-2 space-y-2 h-fit w-96 2xl:ml-2 grid-row-3">
          <div className="flex flex-row items-center p-5 space-y-10 rounded md:flex-col md:flex h-fit bg-slate-200">
            사진 - 유저 소개
            <button className="w-full h-10 text-white rounded bg-signature-color">
              게시글 보기
            </button>
          </div>
          <div className="flex flex-row items-center justify-center p-2 rounded bg-slate-300 ">
            <div className="mr-3 text-3xl">
              <OTechIcons categoryName="Nestjs" />
            </div>
            <h3>NestJS</h3>
          </div>
          <div className="flex flex-row justify-center p-2 space-x-2 text-4xl rounded bg-slate-400">
            <AiFillHeart className="text-rose-500" />
            <BsDot />
            <BsFillShareFill />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostDetail;
