import React from "react";

import LinkTo from "@Components/molecules/LinkTo";

import { CategoryCardProps } from "@Components/atom/card/category/interface";

const CategoryRedirectCard = ({
  categoryCardStyle,
  categoryName,
}: CategoryCardProps) => {
  return (
    <LinkTo
      href={{
        pathname: "search",
        query: { category: categoryName },
      }}
      className={`underline decoration-${categoryName} text-sm font-semibold text-${categoryName} font-eng-sub-font-1`}
    >
      #
      <span
        className={`${categoryCardStyle} text-neutral-800 dark:text-neutral-50`}
      >
        {categoryName}
      </span>
    </LinkTo>
  );
};

export default CategoryRedirectCard;
