import { AxiosInstance } from "axios";

import { Configuration } from "@til-log.lab/tilog-api";

export default interface RepositoryConfig {
  configuration?: Configuration;
  basePath?: string;
  axios?: AxiosInstance;
}
