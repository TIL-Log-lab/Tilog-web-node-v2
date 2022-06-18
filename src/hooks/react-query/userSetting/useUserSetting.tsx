import { useMutation } from "react-query";

import { SetSettingRequestBodyDto } from "@til-log.lab/tilog-api";
import clientSideAuthentication from "@Auth/clientSideAuthentication";
import { setSetting } from "@Api/adapter";

export const useSetUserSetting = () => {
  return useMutation(async (newSetting: SetSettingRequestBodyDto) =>
    clientSideAuthentication(() => setSetting(newSetting))
  );
};
