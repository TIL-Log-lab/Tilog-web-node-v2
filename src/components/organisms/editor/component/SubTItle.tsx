export const EditorSubTitle = ({ register, message }) => {
  return (
    <>
      <input
        className="w-full px-10 text-2xl font-bold pt-7"
        placeholder={"부제목을 입력해주세요."}
        {...register("subTitle", {
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
