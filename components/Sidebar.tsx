"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { categories } from "@/utils/categories";

const Sidebar = () => {
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  return (
    <aside>
      <ul>
        <li>
          <Link href="/" style={{ background: isHomePage ? "red" : "" }}>
            Home
          </Link>
        </li>

        {categories.map((category) => {
          const isActive = pathname.startsWith(
            `/category/${category.category_name}`
          );

          return (
            <li key={category.id}>
              <Link
                style={{ background: isActive ? "red" : "" }}
                href={`/category/${category.category_name}`}
                key={category.category_name}
              >
                {category.category_name}
              </Link>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

export default Sidebar;
