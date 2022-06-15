import React from "react";
import Link from "next/link";

import { GetCategoriesItem } from "@til-log.lab/tilog-api";

const CategoryCard = ({
  category,
  selectedCategory,
}: {
  category: GetCategoriesItem;
  selectedCategory?: number;
}) => {
  if (selectedCategory != category.id) {
    return (
      <Link href={{ query: { category: category.id } }}>
        <a>
          <p className="text-sm"># {category.categoryName}</p>
        </a>
      </Link>
    );
  }
  return (
    <Link href={{ query: {} }}>
      <a>
        <p className="text-sm text-neutral-800"># {category.categoryName}</p>
      </a>
    </Link>
  );
};

export default CategoryCard;
