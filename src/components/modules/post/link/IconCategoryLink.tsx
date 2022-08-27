import React from "react";

import LinkTo from "@Components/common/atom/LinkTo";
import RenderTechIcons from "@Components/common/molecules/tech-icons/RenderTechIcons";

interface IconCategoryLinkProps {
  categoryName: string;
}

const IconCategoryLink = ({ categoryName }: IconCategoryLinkProps) => {
  return (
    <LinkTo
      href={{
        pathname: "search",
        query: { category: categoryName },
      }}
      className="flex items-center hover:no-underline gap-x-3"
    >
      <div className="text-2xl md:text-5xl">
        <RenderTechIcons categoryName={categoryName} />
      </div>
      <span className="text-xl font-medium md:text-4xl text-neutral-800 dark:text-neutral-50">
        {categoryName}
      </span>
    </LinkTo>
  );
};

export default IconCategoryLink;
