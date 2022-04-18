import { ChangeEvent, useRef, useState } from "react";

const MCoverImage = () => {
  const [imageUrl, setImageUrl] = useState("");
  const hiddenFileInput = useRef<HTMLInputElement>(null);
  const handleClick = () => {
    hiddenFileInput.current ? hiddenFileInput.current.click() : null;
  };
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const fileUploaded = event.target.files;
    if (!fileUploaded) return;
    const uri = URL.createObjectURL(fileUploaded[0]);
    setImageUrl(uri);
  };
  return (
    <div className="">
      <input
        type="file"
        onChange={handleChange}
        ref={hiddenFileInput}
        className="hidden"
      />
      {imageUrl === "" ? (
        <button
          className="w-56 h-12 rounded bg-signature-color"
          onClick={handleClick}
        >
          <p className="text-lg text-white">커버이미지</p>
        </button>
      ) : (
        <>
          <img className="w-[300px]" src={imageUrl} />
          <button
            className="w-56 h-12 rounded bg-signature-color"
            onClick={handleClick}
          >
            <p className="text-lg text-white">변경</p>
          </button>
          <button className="w-56 h-12 rounded" onClick={() => setImageUrl("")}>
            <p className="text-lg">삭제</p>
          </button>
        </>
      )}
    </div>
  );
};

export default MCoverImage;
