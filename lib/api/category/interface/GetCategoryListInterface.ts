import { AxiosRequestConfig } from "axios";

export default interface GetCategoryListInterface {
  userId?: number;
  options?: AxiosRequestConfig;
}
