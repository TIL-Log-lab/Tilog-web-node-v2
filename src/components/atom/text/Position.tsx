interface PositionProps {
  className: string;
  children: string;
}
const Position = ({ className, children }: PositionProps) => (
  <p className={`${className}`}>{children}</p>
);
export default Position;
