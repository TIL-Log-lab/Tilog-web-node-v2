import LinkTo from "@Components/common/atom/LinkTo";

interface LogoLinkProps {
  className: string;
}

const LogoLink = ({ className }: LogoLinkProps) => {
  return (
    <LinkTo href="/">
      <div
        className={`${className} w-20 h-10 rounded-tl-full rounded-tr-full `}
      />
    </LinkTo>
  );
};
export default LogoLink;
