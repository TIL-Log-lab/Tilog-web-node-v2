import { AxiosInstance } from "axios";

import { CommentApi, Configuration } from "@til-log.lab/tilog-api";

export default class CommentRepository extends CommentApi {
  constructor(
    axios?: AxiosInstance,
    basePath?: string,
    configuration?: Configuration
  ) {
    super(configuration, basePath, axios);
  }
}
