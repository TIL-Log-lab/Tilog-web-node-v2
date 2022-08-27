import axios, { AxiosError, AxiosInstance, AxiosRequestConfig } from "axios";

import RequestError from "@Library/api/exception/requestError";
import ResponseError from "@Library/api/exception/responseError";
import UnknownError from "@Library/api/exception/unknownError";

export default class HttpClient {
  public http: AxiosInstance;

  constructor(config: AxiosRequestConfig) {
    this.http = axios.create(config);
    this.interceptors();
  }
  private interceptors = () => {
    this.http.interceptors.response.use(
      (response) => response,
      (error) => this.interceptorError(error)
    );
  };

  private interceptorError = (error: AxiosError) => {
    // NOTE: 서버에서 응답한 상태
    if (error.response) {
      const { data } = error.response;
      return Promise.reject(new ResponseError(data));
    }

    // NOTE: 서버에서 응답하지 못한 상태
    if (error.request) {
      return Promise.reject(new RequestError());
    }

    // NOTE: 요청, 응답이 모두 이루지지 않은 상태
    return Promise.reject(new UnknownError());
  };
}
