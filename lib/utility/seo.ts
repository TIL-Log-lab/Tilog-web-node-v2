import { DefaultSeoProps } from "next-seo";

import { GetPostDetailResponseDto } from "@til-log.lab/tilog-api";

import GetUserProfileResponseTransFormSettingsDto from "@Library/api/users/interface/getUserProfileResponseTransFormSettingsDto";

export const postDefaultSeo = (
  data: GetPostDetailResponseDto
): DefaultSeoProps => {
  return {
    title: data.title,
    description: !data.subTitle ? "" : data.subTitle,
    openGraph: {
      type: "website",
      locale: "ko_KR",
      url: "tilog.io",
      title: data.title,
      site_name: "TILog",
      article: {
        publishedTime: data.createdAt,
        modifiedTime: !data.updatedAt ? "" : data.updatedAt,
        authors: [data.user.username],
        tags: [data.category.name],
      },
      images: [
        {
          url: !data.thumbnailUrl ? "" : data.thumbnailUrl,
          width: 285,
          height: 167,
          alt: "TILog_thumbnailUrl",
        },
      ],
    },
  };
};

export const notFoundPostSeo = (): DefaultSeoProps => {
  return {
    title: "페이지를 찾을 수 없습니다.",
    description: "페이지를 찾을 수 없습니다.",
    openGraph: {
      type: "website",
      locale: "ko_KR",
      url: "tilog.io",
      title: "페이지를 찾을 수 없습니다.",
      site_name: "TILog",
    },
  };
};

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
