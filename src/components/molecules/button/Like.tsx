import { AiFillHeart } from "react-icons/ai";

interface LikeProps {
  onClick?: () => void;
}

const LikeButton = ({ onClick }: LikeProps) => (
  <button onClick={onClick}>
    <AiFillHeart className="text-4xl text-rose-500" />
  </button>
);

export default LikeButton;
