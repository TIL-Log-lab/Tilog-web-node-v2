import { GetMeResponseDto } from "@til-log.lab/tilog-api";

declare module "iron-session" {
  interface IronSessionUser {
    user?: GetMeResponseDto;
  }
}
