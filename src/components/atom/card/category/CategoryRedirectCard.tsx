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
    >
      <span
        className={`${categoryCardStyle} text-xl text-${categoryName} font-semibold font-eng-sub-font-1`}
      >
        # {categoryName}
      </span>
    </LinkTo>
  );
};

export default CategoryRedirectCard;
