import { AxiosResponse } from "axios";
import { QueryObserverResult } from "react-query";

import ExceptionInterface from "@Api/errors/interfaces";
import { GetCommentsResponseDto } from "@til-log.lab/tilog-api";

export type CommentRefetch = Promise<
  QueryObserverResult<AxiosResponse<GetCommentsResponseDto>, ExceptionInterface>
>;
