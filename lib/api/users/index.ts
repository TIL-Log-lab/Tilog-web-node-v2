import { tilogApi } from "@Library/api/httpclient";
import UserRepository from "@Library/api/users/userRepository";
import UserService from "@Library/api/users/userService";

const userRepository = new UserRepository({ axios: tilogApi.http });
const usersService = new UserService(userRepository);

export default usersService;
