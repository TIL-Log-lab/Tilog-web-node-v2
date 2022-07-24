import React from "react";

import LinkTo from "@Components/molecules/LinkTo";

interface CategorySearchCardProps {
  categoryName: string;
}

const CategorySearchCard = ({ categoryName }: CategorySearchCardProps) => {
  return (
    <LinkTo
      href={{
        pathname: "search",
        query: { category: categoryName },
      }}
      className={`underline decoration-${categoryName} text-sm font-semibold text-${categoryName} font-eng-sub-font-1`}
    >
      #
      <span className="text-neutral-600 hover:text-neutral-800 dark:text-neutral-50">
        {categoryName}
      </span>
    </LinkTo>
  );
};

export default CategorySearchCard;
