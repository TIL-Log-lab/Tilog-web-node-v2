const OComment = () => {
  return (
    <div className="mt-10">
      <h3>100 Comments</h3>
      <hr className="w-full border-neutral-700 dark:border-neutral-300" />

      <Comment />
      <Comment />
    </div>
  );
};
export default OComment;

const Comment = () => (
  <div className="flex flex-col p-3 mx-20 mt-3">
    <div className="flex flex-row items-center">
      <div className="w-[50px] mr-3 rounded-full h-[50px] bg-neutral-800" />
      <div>MINJE-98</div>
      <p className="ml-3 text-sm">10일 전</p>
      <div className="ml-auto">삭제 | 수정</div>
    </div>
    <p className="p-5 text-lg text-neutral-800">댓글 내용~~~~</p>
    <p className="relative right-0 text-sm">100개 답글 보기</p>
  </div>
);
