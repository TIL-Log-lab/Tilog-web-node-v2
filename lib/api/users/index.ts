import { TILOG_API } from "@Library/constants/environment";
import httpClient from "@Library/api/httpClient";
import UserRepository from "@Library/api/users/userRepository";
import UserService from "@Library/api/users/userService";

const userRepository = new UserRepository(httpClient.http, TILOG_API);
const usersService = new UserService(userRepository);

export default usersService;
