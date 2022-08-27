import React from "react";

import LinkTo from "@Components/common/atom/LinkTo";

interface CategoryLinkProps {
  categoryName: string;
}

const CategoryLink = ({ categoryName }: CategoryLinkProps) => {
  return (
    <LinkTo
      href={{
        pathname: "/search",
        query: { category: categoryName },
      }}
      className={`underline decoration-${categoryName} text-xs font-semibold text-${categoryName}`}
    >
      #{" "}
      <span className="text-xs text-neutral-500 hover:text-neutral-800 dark:hover:text-neutral-50">
        {categoryName}
      </span>
    </LinkTo>
  );
};

export default CategoryLink;
