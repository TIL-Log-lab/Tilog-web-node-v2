import AuthRepository from "@Library/api/auth/authRepository";
import AuthService from "@Library/api/auth/authService";
import { tilogApi } from "@Library/api/http-client";

const authRepository = new AuthRepository({ axios: tilogApi.http });
const authService = new AuthService(authRepository, tilogApi.http);

export default authService;
