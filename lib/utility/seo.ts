import { DefaultSeoProps } from "next-seo";

import { GetPostDetailResponseDto } from "@til-log.lab/tilog-api";

import GetUserProfileResponseTransFormSettingsDto from "@Library/api/users/interface/getUserProfileResponseTransFormSettingsDto";

export const postDetailSeo = (
  postDetail: GetPostDetailResponseDto
): DefaultSeoProps => {
  return {
    title: postDetail.title,
    description: !postDetail.subTitle ? "" : postDetail.subTitle,
    openGraph: {
      type: "website",
      locale: "ko_KR",
      url: "tilog.io",
      title: postDetail.title,
      site_name: "TILog",
      article: {
        publishedTime: postDetail.createdAt,
        modifiedTime: !postDetail.updatedAt ? "" : postDetail.updatedAt,
        authors: [postDetail.user.username],
        tags: [postDetail.category.name],
      },
      images: [
        {
          url: !postDetail.thumbnailUrl ? "" : postDetail.thumbnailUrl,
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
  userInfo: GetUserProfileResponseTransFormSettingsDto
): DefaultSeoProps => {
  return {
    title: !userInfo.settings.DISPLAY_NAME
      ? userInfo.name
      : userInfo.settings.DISPLAY_NAME,
    description: !userInfo.settings.INTRO_MSG
      ? ""
      : userInfo.settings.INTRO_MSG,
    openGraph: {
      type: "website",
      locale: "ko_KR",
      url: "tilog.io",
      title: !userInfo.settings.DISPLAY_NAME
        ? userInfo.name
        : userInfo.settings.DISPLAY_NAME,
      site_name: "TILog",

      images: [
        {
          url: !userInfo.avatar ? "" : userInfo.avatar,
          width: 285,
          height: 167,
          alt: "TILog_User_Avatar",
        },
      ],
    },
  };
};
