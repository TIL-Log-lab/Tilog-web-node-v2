import { useRouter } from "next/router";
import React from "react";

import LinkTo from "@Components/molecules/LinkTo";

interface CategorySortCardProps {
  categoryName: string;
}

const CategorySortCard = ({ categoryName }: CategorySortCardProps) => {
  const router = useRouter();

  if (router.query.category !== categoryName) {
    return (
      <LinkTo
        href={{
          pathname: router.pathname,
          query: { ...router.query, category: categoryName },
        }}
        className={`text-${categoryName} p-2 text-sm font-medium rounded-md ring-1 bg-neutral-50  ring-neutral-300 font-eng-sub-font-2 hover:ring-neutral-400 dark:bg-neutral-900 dark:ring-neutral-50 hover:dark:ring-neutral-600 dark:text-neutral-50 hover:dark:text-neutral-500`}
      >
        # <span className="text-neutral-800">{categoryName}</span>
      </LinkTo>
    );
  }
  return (
    <LinkTo
      href={`${router.asPath.split("?")[0]}`}
      className={`p-2 text-sm font-medium rounded-md ring-1 bg-neutral-50 text-${categoryName} ring-neutral-300 hover:ring-neutral-400 font-eng-sub-font-2 dark:bg-neutral-900`}
    >
      # {categoryName}
    </LinkTo>
  );
};

export default CategorySortCard;
