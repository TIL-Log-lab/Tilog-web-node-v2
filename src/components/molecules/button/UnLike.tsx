import { AiFillHeart } from "react-icons/ai";

interface LikeProps {
  onClick?: () => void;
}

const UnLikeButton = ({ onClick }: LikeProps) => (
  <button onClick={onClick}>
    <AiFillHeart className="text-4xl" />
  </button>
);

export default UnLikeButton;
