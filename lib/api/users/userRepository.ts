import { AxiosInstance } from "axios";

import { UserApi, Configuration } from "@til-log.lab/tilog-api";

export default class UserRepository extends UserApi {
  constructor(
    axios?: AxiosInstance,
    basePath?: string,
    configuration?: Configuration
  ) {
    super(configuration, basePath, axios);
  }
}
