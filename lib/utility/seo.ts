import { DefaultSeoProps } from "next-seo";

import GetUserProfileResponseTransFormSettingsDto from "@Library/api/users/interface/getUserProfileResponseTransFormSettingsDto";

export const userBlogDetailSeo = (
  data: GetUserProfileResponseTransFormSettingsDto
): DefaultSeoProps => {
  return {
    title: !data.settings.DISPLAY_NAME ? data.name : data.settings.DISPLAY_NAME,
    description: !data.settings.INTRO_MSG ? "" : data.settings.INTRO_MSG,
    openGraph: {
      type: "website",
      locale: "ko_KR",
      url: "tilog.io",
      title: !data.settings.DISPLAY_NAME
        ? data.name
        : data.settings.DISPLAY_NAME,
      site_name: "TILog",

      images: [
        {
          url: !data.avatar ? "" : data.avatar,
          width: 285,
          height: 167,
          alt: "TILog_User_Avatar",
        },
      ],
    },
  };
};
