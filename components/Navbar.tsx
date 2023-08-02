"use client";

import { useState, useRef, ChangeEvent } from "react";
import { useRouter } from "next/navigation";
import { useOnClickOutside } from "@/hooks/useOnClickOutside";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useDispatch } from "react-redux";
import { toggleNavbar } from "@/features/navbar/navbarSlice";
import { setSearchValue } from "@/features/search/searchSlice";
import Hamburger from "./Icons/Hamburger";
import Search from "./Icons/Search";
import styles from "@/styles/Navbar.module.scss";

const Navbar = () => {
  const [showSearch, setShowSearch] = useState(false);
  const [searchVideo, setSearchVideo] = useState("");
  const pathname = usePathname();
  const showRef = useRef(null);
  const router = useRouter();
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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchVideo(e.target.value);
  };

  const handleInputSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(setSearchValue(searchVideo));
    router.push("/search");
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

      <form
        className={styles["search-input-desktop"]}
        onSubmit={handleInputSubmit}
      >
        <input
          type="text"
          placeholder="Search"
          value={searchVideo}
          onChange={handleInputChange}
        />
        <button type="submit">
          <Search width="1.8em" height="1.8em" />
        </button>
      </form>

      {showSearch ? (
        <form
          className={styles["search-input-mobile"]}
          ref={showRef}
          onSubmit={handleInputSubmit}
        >
          <input
            type="text"
            placeholder="Search"
            value={searchVideo}
            onChange={handleInputChange}
          />
          <button type="submit">
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
