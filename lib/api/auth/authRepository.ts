import { AxiosInstance } from "axios";

import { AuthApi, Configuration } from "@til-log.lab/tilog-api";

export default class AuthRepository extends AuthApi {
  constructor(
    axios?: AxiosInstance,
    basePath?: string,
    configuration?: Configuration
  ) {
    super(configuration, basePath, axios);
  }
}
