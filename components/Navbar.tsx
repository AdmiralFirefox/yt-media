"use client";

import { useState, useRef } from "react";
import { useOnClickOutside } from "@/hooks/useOnClickOutside";
import Image from "next/image";
import Hamburger from "./Icons/Hamburger";
import styles from "@/styles/Navbar.module.scss";
import Search from "./Icons/Search";

const Navbar = () => {
  const showRef = useRef(null);
  const [showSearch, setShowSearch] = useState(false);

  const toggleShowSearch = () => {
    setShowSearch((search) => !search);
  };

  const handleClickOutside = () => {
    setShowSearch(false);
  };

  useOnClickOutside(showRef, handleClickOutside);

  return (
    <nav className={styles["navbar"]}>
      <div className={styles["web-icons"]}>
        <button>
          <Hamburger width="3em" height="3em" />
        </button>
        {showSearch ? null : (
          <Image
            src="/youtube.png"
            alt="Youtube Icon"
            width={55}
            height={55}
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
