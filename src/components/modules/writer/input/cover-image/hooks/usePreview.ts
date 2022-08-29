import { useEffect, useState } from "react";

import { useFormContext } from "react-hook-form";

import { THUMBNAIL_URL } from "@Library/constants/writer";

import { CreatePostRequestBodyDto } from "@til-log.lab/tilog-api";

const usePreview = () => {
  const { watch, setValue } = useFormContext<CreatePostRequestBodyDto>();
  const [preview, setPreview] = useState("");
  const thumbnail = watch(THUMBNAIL_URL);

  useEffect(() => {
    if (thumbnail && thumbnail.length > 0) {
      const file = thumbnail[0] as any;
      setPreview(URL.createObjectURL(file));
    }
    setValue(THUMBNAIL_URL, "");
  }, [setValue, thumbnail]);
  const resetPreview = () => {
    setValue(THUMBNAIL_URL, "");
    setPreview("");
  };
  return { preview, resetPreview };
};

export default usePreview;
