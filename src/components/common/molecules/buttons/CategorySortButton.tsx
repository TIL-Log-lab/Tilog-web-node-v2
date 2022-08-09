import { useRouter } from "next/router";
import React from "react";

import LinkTo from "@Components/common/atom/LinkTo";

interface CategorySortButtonProps {
  categoryName: string;
}

const CategorySortButton = ({ categoryName }: CategorySortButtonProps) => {
  const router = useRouter();

  if (router.query.category !== categoryName) {
    return (
      <LinkTo
        scroll={false}
        href={{
          pathname: router.pathname,
          query: { ...router.query, category: categoryName },
        }}
        className="p-2 text-sm font-semibold rounded-sm hover:no-underline font-eng-sub-font-2 bg-neutral-50 dark:bg-neutral-800 ring-1 ring-neutral-200 dark:ring-neutral-700 hover:bg-neutral-100 hover:dark:bg-neutral-700"
      >
        <span className={`text-${categoryName}`}># </span>
        <span className="text-neutral-900 dark:text-neutral-50">
          {categoryName}
        </span>
      </LinkTo>
    );
  }
  return (
    <LinkTo
      scroll={false}
      href={`${router.asPath.split("?")[0]}`}
      className="p-2 text-sm font-semibold rounded-sm hover:no-underline font-eng-sub-font-2 bg-neutral-50 dark:bg-neutral-800 ring-1 ring-neutral-200 dark:ring-neutral-700 hover:bg-neutral-100 hover:dark:bg-neutral-700"
    >
      <span className={`text-${categoryName}`}># {categoryName}</span>
    </LinkTo>
  );
};

export default CategorySortButton;
