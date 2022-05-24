import { TilogApiForAuth } from "@Api/core";
import { NextApiRequest, NextApiResponse } from "next";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { headers } = req;
  const userAgent = !headers["user-agent"] ? "" : headers["user-agent"];
  const cookie = !headers.cookie ? "" : headers.cookie;
  try {
    const { data } =
      await TilogApiForAuth.usersAuthControllerGetAccessTokenUsingRefreshToken(
        undefined,
        {
          headers: {
            "User-Agent": userAgent,
            Cookie: cookie,
          },
        }
      );

    res.status(200).json(data);
  } catch (error) {
    res.send(error);
  }
};
export default handler;
