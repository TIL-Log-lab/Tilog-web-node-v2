import React from "react";
import Link from "next/link";

import { GetUserCategoriesItem } from "@til-log.lab/tilog-api";
import { useRouter } from "next/router";

const CategoryCard = ({
  category,
}: {
  category: GetUserCategoriesItem;
  selectedCategory?: number;
}) => {
  const router = useRouter();
  console.log(router);
  if (!router.query.category || Array.isArray(router.query.category)) {
    return (
      <Link
        href={{
          pathname: router.pathname,
          query: { ...router.query, category: category.id },
        }}
      >
        <a>
          <p className="text-sm"># {category.categoryName}</p>
        </a>
      </Link>
    );
  }
  if (parseInt(router.query.category) != category.id) {
    return (
      <Link
        href={{
          pathname: router.pathname,
          query: { ...router.query },
        }}
      >
        <a>
          <p className="text-sm"># {category.categoryName}</p>
        </a>
      </Link>
    );
  }
  return (
    <Link
      href={{
        pathname: router.pathname,
        query: { ...router.query },
      }}
    >
      <a>
        <p className="text-sm text-neutral-800"># {category.categoryName}</p>
      </a>
    </Link>
  );
};

export default CategoryCard;
