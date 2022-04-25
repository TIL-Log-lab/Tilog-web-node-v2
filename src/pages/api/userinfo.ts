import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";
import { withIronSessionApiRoute } from "iron-session/next";

import { tilogApi } from "@Api/core";
import { cookieConfig } from "@Constants/cookieConfig";
import { NotResponse } from "@Api/Errors/notResponse";
import { NoMessage } from "@Api/Errors/noMessage";
import { isExceptionMessageInterface } from "@Api/Errors/interface/messageError";

export default withIronSessionApiRoute(async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const userAgent = !req.headers["user-agent"] ? "" : req.headers["user-agent"];
  const cookie = !req.headers.cookie ? "" : req.headers.cookie;
  try {
    const {
      data: { accessToken },
    } = await tilogApi.usersAuthControllerGetAccessTokenUsingRefreshToken(
      "tilog",
      {
        headers: {
          "User-Agent": userAgent,
          Cookie: cookie,
        },
      }
    );
    const { data } = await tilogApi.usersControllerGetMe({
      headers: { Authorization: `Bearer ${accessToken}` },
    });
    req.session.user = data;
    await req.session.save();
    res.status(200).json({ ok: true });
  } catch (error) {
    if (!axios.isAxiosError(error)) {
      return res.status(401).json({ ok: false, error: error });
    }
    if (error.response) {
      const errorData = error.response.data;
      const errorResult = isExceptionMessageInterface(errorData)
        ? errorData
        : NoMessage;
      return res.status(401).json({ ok: false, error: errorResult });
    } else {
      return res.status(401).json({ ok: false, error: NotResponse });
    }
  }
},
cookieConfig);
