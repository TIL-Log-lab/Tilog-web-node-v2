import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";
import { withIronSessionApiRoute } from "iron-session/next";
import { tilogApi } from "@Api/core";
import { isExceptionMessageInterface } from "@Api/errors/interface/messageError";
import { cookieConfig } from "@Iron/cookieConfig";
import { disconnectedServer } from "@Api/errors/disconnectedServer";
import { notFoundMessage } from "@Api/errors/notFoundMessage";

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
      undefined,
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
    req.session.userInfo = data;
    await req.session.save();
    res.status(200).json({ ok: true });
  } catch (error) {
    if (!axios.isAxiosError(error)) {
      return res.status(500).json({ ok: false, error: error });
    }
    if (!error.response)
      return res.status(500).json({ ok: false, error: disconnectedServer });
    const resData = error.response.data;
    isExceptionMessageInterface(resData.message)
      ? res
          .status(error.response.status)
          .json({ ok: false, error: resData.message.ko })
      : res
          .status(error.response.status)
          .json({ ok: false, error: notFoundMessage });
  }
},
cookieConfig);
