/* eslint-disable func-names */
/* eslint-disable no-param-reassign */

import http from "@Library/api";
import httpClient from "@Library/api/httpClient";
import getAccessTokenToAxiosHeader from "@Library/api/utility/getAccessTokenToAxiosHeader";
import isTokenExpired from "@Library/api/utility/isTokenExpired";

export default function validateToken() {
  return (
    _target: any,
    _propertyKey: string,
    descriptor: PropertyDescriptor
  ) => {
    const originMethod = descriptor.value;
    descriptor.value = async function (...args: unknown[]) {
      const accessToken = getAccessTokenToAxiosHeader(httpClient.http);

      if (!accessToken || isTokenExpired(accessToken)) {
        await http.authService.getAccessTokenUsingRefreshToken();
      }
      return originMethod.apply(this, args);
    };
  };
}
