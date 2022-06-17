import Link from "next/link";

interface WrappedLinkProps {
  href: string;
  text: string;
  style: string;
}

const WrappedLink = ({ href, text, style }: WrappedLinkProps) => {
  return (
    <Link href={href}>
      <a className={style}>{text}</a>
    </Link>
  );
};

export default WrappedLink;
