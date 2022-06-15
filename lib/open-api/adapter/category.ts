import * as TILog from "@til-log.lab/tilog-api";
import axiosInstance from "@Api/axiosInstance";
import { Option } from "../interface";

const categoryApi = new TILog.CategoryApi(undefined, undefined, axiosInstance);

export const getCategory = (options?: Option) =>
  categoryApi.categoriesControllerGetCategories(options);

export const getUserCategory = (userId: number, options?: Option) =>
  categoryApi.categoriesControllerGetUsersCategories(userId, options);
