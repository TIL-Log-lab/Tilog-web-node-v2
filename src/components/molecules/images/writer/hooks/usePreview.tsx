import { useEffect, useState } from "react";

import { useFormContext } from "react-hook-form";

import { CreatePostRequestBodyDto } from "@til-log.lab/tilog-api";

const usePreview = () => {
  const { watch, setValue } = useFormContext<CreatePostRequestBodyDto>();
  const [preview, setPreview] = useState("");
  const thumbnail = watch("thumbnailUrl");

  useEffect(() => {
    if (thumbnail && thumbnail.length > 0) {
      const file = thumbnail[0];
      setPreview(URL.createObjectURL(file));
    }
  }, [thumbnail]);
  const resetPreview = () => {
    setValue("thumbnailUrl", "");
    setPreview("");
  };
  return { preview, resetPreview };
};

export default usePreview;
