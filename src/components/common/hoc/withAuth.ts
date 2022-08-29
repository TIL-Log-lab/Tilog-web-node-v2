import { AppInitialProps } from "next/app";
import { NextApiRequestCookies } from "next/dist/server/api-utils";

import { IncomingMessage } from "http";

import api from "@Library/api";
import { tilogApi } from "@Library/api/http-client";

interface WithContext {
  ctx: {
    req: IncomingMessage & {
      cookies: NextApiRequestCookies;
    };
  };
}

export default function withAuth() {
  return async ({ ctx }: WithContext): Promise<AppInitialProps> => {
    if (typeof window === "undefined") {
      const { cookies } = ctx.req;
      if (!cookies.refreshToken) {
        return { pageProps: {} };
      }
      const { headers } = ctx.req;
      const userAgent = !headers["user-agent"] ? "" : headers["user-agent"];
      const cookie = !headers.cookie ? "" : headers.cookie;
      try {
        await api.authService.getAccessTokenUsingRefreshToken(undefined, {
          headers: {
            "User-Agent": userAgent,
            Cookie: cookie,
          },
        });
        const initUserInfo = await api.usersService.getMe({
          headers: {
            "User-Agent": userAgent,
            Cookie: cookie,
          },
        });
        return {
          pageProps: {
            initUserInfo,
          },
        };
      } catch {
        tilogApi.http.defaults.headers.common.Authorization = "";
        return { pageProps: {} };
      }
    }

    return { pageProps: {} };
  };
}
