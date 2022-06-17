export const EditorTitle = ({ register, message }) => {
  return (
    <>
      <input
        className="w-full px-10 text-4xl font-bold pt-7"
        placeholder={"제목을 입력해주세요."}
        {...register("title", {
          required: {
            value: true,
            message: "제목을 입력해주세요.",
          },
          minLength: {
            value: 1,
            message: "1자 이상 입력가능합니다.",
          },
          maxLength: {
            value: 50,
            message: "50자 이하 입력가능합니다.",
          },
        })}
      ></input>
      <p>{message}</p>
    </>
  );
};
