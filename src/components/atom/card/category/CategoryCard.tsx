import { useRouter } from "next/router";
import React from "react";

import LinkTo from "@Components/molecules/LinkTo";

import { CategoryCardProps } from "@Components/atom/card/category/interface";

const CategoryCard = ({
  categoryCardStyle,
  categoryName,
}: CategoryCardProps) => {
  const router = useRouter();

  if (router.query.category !== categoryName) {
    return (
      <LinkTo
        href={{
          pathname: router.pathname,
          query: { ...router.query, category: categoryName },
        }}
      >
        <span
          className={`${categoryCardStyle} text-neutral-400 text-xl font-eng-sub-font-1`}
        >
          # {categoryName}
        </span>
      </LinkTo>
    );
  }
  return (
    <LinkTo
      href={{
        pathname: router.pathname,
        query: { ...router.query, category: null },
      }}
    >
      <span
        className={`${categoryCardStyle} text-xl text-${categoryName} font-semibold font-eng-sub-font-1`}
      >
        # {categoryName}
      </span>
    </LinkTo>
  );
};

export default CategoryCard;
