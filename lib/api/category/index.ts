import CategoryRepository from "@Library/api/category/categoryRepository";
import CategoryService from "@Library/api/category/categoryService";
import { tilogApi } from "@Library/api/httpclient";

const categoryRepository = new CategoryRepository({ axios: tilogApi.http });
const categoryService = new CategoryService(categoryRepository);

export default categoryService;
