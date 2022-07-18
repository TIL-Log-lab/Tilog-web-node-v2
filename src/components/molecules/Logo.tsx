import LinkTo from "@Components/molecules/LinkTo";

interface LogoProps {
  className: string;
}

const Logo = ({ className }: LogoProps) => {
  return (
    <LinkTo href="/">
      <div
        className={`${className} w-20 h-10 rounded-tl-full rounded-tr-full `}
      />
    </LinkTo>
  );
};
export default Logo;
