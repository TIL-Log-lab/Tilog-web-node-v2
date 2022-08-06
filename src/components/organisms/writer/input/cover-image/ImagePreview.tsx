import OpacityOverlay from "@Components/atom/overlay/OpacityOverlay";
import PostThumbnail from "@Components/molecules/images/PostThumbnail";
import useFormTitleWatching from "@Components/organisms/writer/input/cover-image/hooks/useFormTitleWatching";
import useOnPointerEnter from "@Components/organisms/writer/input/cover-image/hooks/useOnPointerEnter";
import usePreview from "@Components/organisms/writer/input/cover-image/hooks/usePreview";
import AddImageLabel from "@Components/organisms/writer/label/AddImageLabel";
import EditImageLabel from "@Components/organisms/writer/label/EditImageLabel";
import RemoveImageLabel from "@Components/organisms/writer/label/RemoveImageLabel";

const ImagePreView = () => {
  const { preview, resetPreview } = usePreview();
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
            <OpacityOverlay />
            <div className="absolute flex items-center justify-center w-full h-full z-1">
              <AddImageLabel htmlFor="image" />
            </div>
          </>
        )}
        <PostThumbnail
          imageSize="w-full h-[350px]"
          title={title}
          id="1"
          thumbnailUrl={preview}
        />
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
          <OpacityOverlay />
          <div className="absolute flex items-center justify-center w-full h-full gap-x-3">
            <EditImageLabel htmlFor="image" />
            <RemoveImageLabel onClick={resetPreview} />
          </div>
        </>
      )}
      <PostThumbnail
        imageSize="w-full h-[350px]"
        title={title}
        id="1"
        thumbnailUrl={preview}
      />
    </div>
  );
};
export default ImagePreView;
