const routerHelper = (href: string, targetName: string, target: string) => {
  return (
    href
      // 1. target이 & 일경우 그냥 다 날려주면 됩니다.
      .replace(`&${targetName}=${target}`, "")
      // 2. target이 ? 일경우 &를 찾아서 ?로 변경해줘야합니다.
      .replace(`?${targetName}=${target}`, "")
      .replace("&", "?")
  );
};

export default routerHelper;
