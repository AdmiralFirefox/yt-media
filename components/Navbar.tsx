"use client";

import { useState, useRef } from "react";
import { useOnClickOutside } from "@/hooks/useOnClickOutside";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useDispatch } from "react-redux";
import { toggleNavbar } from "@/features/navbar/navbarSlice";
import Hamburger from "./Icons/Hamburger";
import Search from "./Icons/Search";
import styles from "@/styles/Navbar.module.scss";

const Navbar = () => {
  const pathname = usePathname();

  const [showSearch, setShowSearch] = useState(false);

  const showRef = useRef(null);

  const dispatch = useDispatch();

  const toggleShowSearch = () => {
    setShowSearch((search) => !search);
  };

  const handleClickOutside = () => {
    setShowSearch(false);
  };

  const showNavbar = () => {
    dispatch(toggleNavbar(true));
  };

  useOnClickOutside(showRef, handleClickOutside);

  return (
    <nav
      className={
        pathname === "/video"
          ? styles["navbar-video-section"]
          : styles["navbar"]
      }
    >
      <div className={styles["web-icons"]}>
        <button onClick={showNavbar}>
          <Hamburger width="3.8em" height="3.8em" />
        </button>
        {showSearch ? null : (
          <Image
            src="/youtube.png"
            alt="Youtube Icon"
            width={50}
            height={50}
            priority
          />
        )}
      </div>

      <form className={styles["search-input-desktop"]}>
        <input type="text" placeholder="Search" />
        <button>
          <Search width="1.8em" height="1.8em" />
        </button>
      </form>

      {showSearch ? (
        <form className={styles["search-input-mobile"]} ref={showRef}>
          <input type="text" placeholder="Search" />
          <button>
            <Search width="1.8em" height="1.8em" />
          </button>
        </form>
      ) : null}

      {showSearch ? null : (
        <button onClick={toggleShowSearch} className={styles["mobile-search"]}>
          <Search width="1.8em" height="1.8em" />
        </button>
      )}
    </nav>
  );
};

export default Navbar;
