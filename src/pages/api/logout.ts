import type { NextApiRequest, NextApiResponse } from "next";
import { withIronSessionApiRoute } from "iron-session/next";

import { cookieConfig } from "@Constants/cookieConfig";

export default withIronSessionApiRoute(async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  req.session.destroy();
  res.status(200).json({ ok: true });
},
cookieConfig);
