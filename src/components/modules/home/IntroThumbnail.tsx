import PrimaryButton from "@Components/common/atom/buttons/PrimaryButton";
import LinkTo from "@Components/common/atom/LinkTo";
import LoginButton from "@Components/common/molecules/buttons/LoginButton";
import {
  INTRO_SUBTITLE,
  INTRO_TITLE,
  LOGGED_IN,
  LOGGED_IN_BUTTON,
  LOGGED_OUT,
} from "@Library/constants/home/intro";
import useGetMeQuery from "@Hooks/react-query/user/useGetMeQuery";

const IntroThumbnail = () => {
  const userInfo = useGetMeQuery();
  return (
    <div className="w-full px-3 py-60 bg-neutral-900 dark:bg-neutral-800 ">
      <div className="m-auto max-w-[1280px]">
        <h1 className="text-6xl font-semibold text-neutral-300 ">
          {INTRO_TITLE.ko}
        </h1>
        <div className="pt-3">
          <h3 className="font-semibold text-neutral-300 ">
            {INTRO_SUBTITLE.ko}
          </h3>
        </div>
        <div className="mt-10">
          {userInfo.isSuccess && (
            <div>
              <p>{LOGGED_IN.ko}</p>
              <div className="mt-2">
                <LinkTo href="/writer">
                  <PrimaryButton className="w-48">
                    <h3 className="text-xl font-semibold text-neutral-50">
                      {LOGGED_IN_BUTTON.ko}
                    </h3>
                  </PrimaryButton>
                </LinkTo>
              </div>
            </div>
          )}
          {userInfo.isError && (
            <div>
              <div>
                <p>{LOGGED_OUT.ko}</p>
              </div>
              <div className="mt-5 w-fit">
                <LoginButton />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default IntroThumbnail;
