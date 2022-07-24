import { AxiosInstance } from "axios";

import { Configuration, PostApi } from "@til-log.lab/tilog-api";

export default class PostRepository extends PostApi {
  constructor(
    axios?: AxiosInstance,
    basePath?: string,
    configuration?: Configuration
  ) {
    super(configuration, basePath, axios);
  }
}
