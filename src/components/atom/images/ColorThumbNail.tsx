import { backgroundColor, getBrightness } from "@Library/utility/color";

import { ColorThumbNailProps } from "@Components/atom/images/interface/colorThumbNailProps";

const ColorThumbNail = ({ title, color }: ColorThumbNailProps) => {
  return (
    <div
      style={{ backgroundColor: backgroundColor(color) }}
      className="flex items-center justify-center w-full h-full overflow-hidden"
    >
      <span
        className="px-10 text-2xl font-bold text-center font-eng-sub-font-1"
        style={{
          color: `${getBrightness(color) ? "#121212" : "#fff"}`,
        }}
      >
        {title}
      </span>
    </div>
  );
};

export default ColorThumbNail;
