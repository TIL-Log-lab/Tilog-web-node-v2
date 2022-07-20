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
        className={`underline decoration-${categoryName} text-sm font-semibold text-${categoryName} font-eng-sub-font-1`}
      >
        #
        <span className="text-neutral-600 hover:text-neutral-800 dark:text-neutral-50">
          {categoryName}
        </span>
      </LinkTo>
    );
  }
  return (
    <LinkTo
      href={`${router.asPath.split("?")[0]}`}
      className={`underline decoration-${categoryName} text-sm font-semibold text-${categoryName} font-eng-sub-font-1`}
    >
      #<span className="">{categoryName}</span>
    </LinkTo>
  );
};

export default CategorySortCard;
