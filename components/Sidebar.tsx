"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { categories } from "@/utils/categories";
import { IoHomeSharp } from "react-icons/io5";
import { IconContext } from "react-icons";
import styles from "@/styles/Sidebar.module.scss";

type CategoryIcon = {
  children: React.ReactNode;
};

const CategoryIcon = ({ children }: CategoryIcon) => {
  return (
    <IconContext.Provider value={{ className: styles["category-icon"] }}>
      {children}
    </IconContext.Provider>
  );
};

const Sidebar = () => {
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  return (
    <aside className={styles["sidebar"]}>
      <ul>
        <li
          className={
            isHomePage
              ? styles["active-category-link"]
              : styles["category-link"]
          }
        >
          <Link href="/">
            <CategoryIcon>
              <IoHomeSharp />
            </CategoryIcon>
            Home
          </Link>
        </li>

        {categories.map((category) => {
          const isActive = pathname.startsWith(
            `/category/${category.category_name}`
          );

          return (
            <li
              key={category.id}
              className={
                isActive
                  ? styles["active-category-link"]
                  : styles["category-link"]
              }
            >
              <Link
                href={`/category/${category.category_name}`}
                key={category.category_name}
              >
                <CategoryIcon>{category.icon}</CategoryIcon>
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
