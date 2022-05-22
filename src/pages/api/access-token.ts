import { NextApiRequest, NextApiResponse } from "next";

import { TilogApiForAuth } from "@Api/core";

const accessTokenHandler = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
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
export default accessTokenHandler;
