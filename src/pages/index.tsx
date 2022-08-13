import type { NextPage } from "next";

import CardTitle from "@Components/common/atom/CardTitle";
import CategorySortButtonList from "@Components/common/organisms/list/CategorySortButtonList";
import MostPopularPostCardList from "@Components/common/organisms/list/MostPopularPostCardList";
import { PostCardList } from "@Components/modules/blog";
import IntroThumbnail from "@Components/modules/home/IntroThumbnail";
import {
  CATEGORY_MOST_POPULAR_POSTCARD,
  LATEST_CATEGORY_POSTCARD,
  LATEST_POSTCARD,
  MOST_POPULAR_POSTCARD,
} from "@Library/constants/post";
import useGetStringTypeToRouter from "@Hooks/router/useGetStringTypeToRouter";
import DateScopeLink from "@Components/common/molecules/link/DateScopeLink";
import RootBox from "@Components/common/atom/box/RootBox";

const Home: NextPage = () => {
  const categoryName = useGetStringTypeToRouter("category");

  return (
    <div>
      <IntroThumbnail />
      <CategorySortButtonList />
      <RootBox>
        <div className="my-10">
          <CardTitle
            title={
              !categoryName
                ? MOST_POPULAR_POSTCARD.ko
                : categoryName + CATEGORY_MOST_POPULAR_POSTCARD.ko
            }
          >
            <div>
              <DateScopeLink dateScope="Daily" />
              <DateScopeLink dateScope="Weekly" />
              <DateScopeLink dateScope="Monthly" />
            </div>
          </CardTitle>
          <MostPopularPostCardList
            sortScope="likes"
            page={0}
            maxContent={6}
            categoryName={categoryName}
          />
        </div>
        <div className="my-10">
          <CardTitle
            title={
              !categoryName
                ? LATEST_POSTCARD.ko
                : categoryName + LATEST_CATEGORY_POSTCARD.ko
            }
          />
          <div className="col-span-2 ml-auto">
            <PostCardList
              dateScope="All"
              sortScope="createdAt"
              page={0}
              maxContent={16}
              categoryName={categoryName}
              row="2"
            />
          </div>
        </div>
      </RootBox>
    </div>
  );
};
export default Home;
