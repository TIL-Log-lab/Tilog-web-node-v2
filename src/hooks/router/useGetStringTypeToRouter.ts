import { useRouter } from "next/router";

const useGetStringTypeToRouter = (target: string) => {
  const targetQuery = useRouter().query[target];
  if (!targetQuery) return "";
  if (Array.isArray(targetQuery)) return "";
  return targetQuery;
};

export default useGetStringTypeToRouter;
