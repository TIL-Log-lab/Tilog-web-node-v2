import HttpClient from "@Library/api/httpclient/HttpClient";

const tilogApi = new HttpClient({
  baseURL: process.env.TILOG_API,
});

const githubApi = new HttpClient({});

export { tilogApi, githubApi };
