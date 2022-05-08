import toast from "react-hot-toast";

import { ExceptionBodyInterface } from "@Api/errors/interface/exception";

// NOTE: 에러에 대한 토스트를 반환합니다.
export default function errorToast(error: ExceptionBodyInterface): void {
  if (error.statusCode === 401) {
    toast.error(error.message);
  } else {
    toast.error(error.message);
  }
}
