import * as TILog from "@til-log.lab/tilog-api";

export const config = new TILog.Configuration({
  basePath: process.env.TILOG_API,
  baseOptions: {
    withCredentials: true,
  },
});
export const tilogApi = new TILog.DefaultApi(config);
