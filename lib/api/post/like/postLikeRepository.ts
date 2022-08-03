import { AxiosInstance } from "axios";

import { Configuration, PostLikeApi } from "@til-log.lab/tilog-api";

export default class PostLikeRepository extends PostLikeApi {
  constructor(
    axios?: AxiosInstance,
    basePath?: string,
    configuration?: Configuration
  ) {
    super(configuration, basePath, axios);
  }
}
