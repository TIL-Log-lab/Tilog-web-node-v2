import { TILOG_API } from "@Library/constants/environment";
import AuthRepository from "@Library/api/auth/authRepository";
import AuthService from "@Library/api/auth/authService";
import httpClient from "@Library/api/httpClient";

const authRepository = new AuthRepository(httpClient.http, TILOG_API);
const authService = new AuthService(authRepository, httpClient.http);

export default authService;
