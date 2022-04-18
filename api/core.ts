import * as TILog from "@til-log.lab/tilog-api";
import { TILOG_API } from "api/config";

export const config = new TILog.Configuration({
  basePath: TILOG_API,
});
export const tilogApi = new TILog.DefaultApi(config);
