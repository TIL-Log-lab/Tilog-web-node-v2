import type { NextApiRequest, NextApiResponse } from "next";
import { withIronSessionApiRoute } from "iron-session/next";
import { cookieConfig } from "@Iron/cookieConfig";
import axios from "axios";

export default withIronSessionApiRoute(async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const userAgent = !req.headers["user-agent"] ? "" : req.headers["user-agent"];
  const cookie = !req.headers.cookie ? "" : req.headers.cookie;
  try {
    axios.delete("http://localhost/auth/logout", {
      headers: {
        "User-Agent": userAgent,
        Cookie: cookie,
      },
    });
    req.session.destroy();
    return res.status(200).json({ ok: true });
  } catch (error) {
    if (!axios.isAxiosError(error)) {
      return res.status(500).json({ ok: false, error: error });
    }
  }
},
cookieConfig);
