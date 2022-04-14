interface ATextInputProps {
  placeholder: string;
  styles: string;
}
const ATextInput = ({ placeholder, styles }: ATextInputProps) => {
  return (
    <input
      placeholder={placeholder}
      className={`${styles} font-eng-sub-font-2 text-gray-700 dark:text-white 
  focus:outline-none  dark:bg-neutral-900`}
    ></input>
  );
};

export default ATextInput;
