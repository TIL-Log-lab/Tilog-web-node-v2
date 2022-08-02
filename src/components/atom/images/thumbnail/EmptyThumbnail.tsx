import { backgroundColor, getBrightness } from "@Library/utility/color";

import { GetPostDetailResponseDto } from "@til-log.lab/tilog-api";

export interface EmptyThumbNailProps {
  title: GetPostDetailResponseDto["title"];
  color: string;
}

const EmptyThumbNail = ({ title, color }: EmptyThumbNailProps) => {
  return (
    <div
      style={{ backgroundColor: backgroundColor(color) }}
      className="flex items-center justify-center w-full h-full overflow-hidden"
    >
      <span
        className="px-10 text-sm font-semibold text-center sm:text-xl font-eng-sub-font-2"
        style={{
          color: `${getBrightness(color) ? "#121212" : "#fff"}`,
        }}
      >
        {title}
      </span>
    </div>
  );
};

export default EmptyThumbNail;
