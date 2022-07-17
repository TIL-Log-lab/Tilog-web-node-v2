import CommentIcon from "@Components/atom/icons/CommentIcon";
import GithubIcon from "@Components/atom/icons/GithubIcon";
import HeaderIcon from "@Components/atom/icons/HeaderIcon";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div className="flex items-center justify-center">
      <CommentIcon />
      <GithubIcon />
      <HeaderIcon />
    </div>
  );
};
export default Home;
