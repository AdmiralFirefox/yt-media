"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import useLockedBody from "@/hooks/useLockedBody";
import { useWindowSize } from "@/hooks/useWindowSize";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/app/store";
import { toggleNavbar } from "@/features/navbar/navbarSlice";
import { categories } from "@/utils/categories";
import { IoHomeSharp } from "react-icons/io5";
import { IconContext } from "react-icons";
import styles from "@/styles/Sidebar.module.scss";

interface SidebarContentProps {
  isHomePage: boolean;
  pathname: string;
  hideNavbar: () => void;
}

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

const SidebarContent = ({
  isHomePage,
  pathname,
  hideNavbar,
}: SidebarContentProps) => {
  return (
    <ul>
      <li
        className={
          isHomePage ? styles["active-category-link"] : styles["category-link"]
        }
      >
        <Link href="/" onClick={hideNavbar}>
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
              onClick={hideNavbar}
            >
              <CategoryIcon>{category.icon}</CategoryIcon>
              {category.category_name}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

const Sidebar = () => {
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const dispatch = useDispatch();

  const { height } = useWindowSize();

  const isToggled = useSelector((state: RootState) => state.navbar.showNavbar);

  const hideNavbar = () => {
    dispatch(toggleNavbar(false));
  };

  useLockedBody(isToggled, "root");

  return (
    <>
      {pathname === "/video" ? null : (
        <aside
          className={styles["sidebar-desktop"]}
          style={{ height: `${height}px` }}
        >
          <SidebarContent
            isHomePage={isHomePage}
            pathname={pathname}
            hideNavbar={hideNavbar}
          />
        </aside>
      )}

      <aside
        className={
          isToggled ? styles["sidebar-mobile-active"] : styles["sidebar-mobile"]
        }
        style={{ height: `${height}px` }}
      >
        <SidebarContent
          isHomePage={isHomePage}
          pathname={pathname}
          hideNavbar={hideNavbar}
        />
      </aside>

      <div
        className={isToggled ? styles["overlay-active"] : styles["overlay"]}
        style={{ height: `${height}px` }}
        onClick={hideNavbar}
      ></div>
    </>
  );
};

export default Sidebar;
