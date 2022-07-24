interface IntroductionProps {
  className: string;
  children: string;
}
const Introduction = ({ className, children }: IntroductionProps) => (
  <p className={`${className}`}>{children}</p>
);
export default Introduction;
