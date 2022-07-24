import { AxiosInstance } from "axios";

import { CategoryApi, Configuration } from "@til-log.lab/tilog-api";

export default class CategoryRepository extends CategoryApi {
  constructor(
    axios?: AxiosInstance,
    basePath?: string,
    configuration?: Configuration
  ) {
    super(configuration, basePath, axios);
  }
}
