import { TILOG_API } from "@Library/constants/environment";
import CategoryRepository from "@Library/api/category/categoryRepository";
import CategoryService from "@Library/api/category/categoryService";
import httpClient from "@Library/api/httpClient";

const categoryRepository = new CategoryRepository(httpClient.http, TILOG_API);
const categoryService = new CategoryService(
  categoryRepository,
  httpClient.http
);

export default categoryService;
