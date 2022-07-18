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
      className={`underline decoration-${categoryName} text-base font-semibold text-${categoryName} font-eng-sub-font-1`}
    >
      #<span className={`${categoryCardStyle}`}>{categoryName}</span>
    </LinkTo>
  );
};

export default CategoryRedirectCard;
