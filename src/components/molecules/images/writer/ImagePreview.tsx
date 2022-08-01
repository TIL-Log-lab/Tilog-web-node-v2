import ColorThumbNail from "@Components/atom/images/ColorThumbNail";
import ThumbNail from "@Components/atom/images/ThumbNail";
import AddImageLabel from "@Components/atom/label/AddImageLabel";
import EditImageLabel from "@Components/atom/label/EditImageLabel";
import RemoveImageLabel from "@Components/atom/label/RemoveImageLabel";
import OpacityBox from "@Components/atom/over-box/OpacityBox";
import useFormTitleWatching from "@Components/molecules/images/writer/hooks/useFormTitleWatching";
import useOnPointerEnter from "@Components/molecules/images/writer/hooks/useOnPointerEnter";
import usePreView from "@Components/molecules/images/writer/hooks/usePreview";

const ImagePreView = () => {
  const { preview, resetPreview } = usePreView();
  const title = useFormTitleWatching();
  const { isPointerEnter, pointerEnter, pointerLeave } = useOnPointerEnter();
  if (!preview) {
    return (
      <div
        className="relative"
        onPointerEnter={pointerEnter}
        onPointerLeave={pointerLeave}
      >
        {isPointerEnter && (
          <>
            <OpacityBox />
            <div className="absolute flex items-center justify-center w-full h-full z-1">
              <AddImageLabel htmlFor="image" />
            </div>
          </>
        )}
        <div className="w-full h-[350px] z-0">
          <ColorThumbNail title={title} color="121212" />
        </div>
      </div>
    );
  }
  return (
    <div
      className="relative"
      onPointerEnter={pointerEnter}
      onPointerLeave={pointerLeave}
    >
      {isPointerEnter && (
        <>
          <OpacityBox />
          <div className="absolute flex items-center justify-center w-full h-full gap-x-3">
            <EditImageLabel htmlFor="image" />
            <RemoveImageLabel onClick={resetPreview} />
          </div>
        </>
      )}
      <div className="w-full h-[350px]">
        <ThumbNail thumbnailUrl={preview} />
      </div>
    </div>
  );
};
export default ImagePreView;
