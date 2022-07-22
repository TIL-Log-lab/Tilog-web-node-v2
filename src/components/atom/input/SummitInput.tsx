interface SummitInputProps {
  value: string;
  className?: string;
}

const SummitInput = ({ value, className }: SummitInputProps) => (
  <div className="text-right">
    <input
      type="submit"
      value={value}
      className={`${className} w-40 h-12 text-white bg-black rounded-md cursor-pointer`}
    />
  </div>
);

export default SummitInput;
