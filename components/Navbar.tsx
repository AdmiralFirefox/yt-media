"use client";

import { useState, useRef, ChangeEvent } from "react";
import { useRouter } from "next/navigation";
import { useOnClickOutside } from "@/hooks/useOnClickOutside";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useDispatch } from "react-redux";
import useLockedBody from "@/hooks/useLockedBody";
import { toggleNavbar } from "@/features/navbar/navbarSlice";
import { setSearchValue } from "@/features/search/searchSlice";
import Hamburger from "./Icons/Hamburger";
import Search from "./Icons/Search";
import Back from "./Icons/Back";
import styles from "@/styles/Navbar.module.scss";
import AutoCompleteDesktop from "./AutoComplete/AutoCompleteDesktop";
import AutoCompleteMobile from "./AutoComplete/AutoCompleteMobile";

const Navbar = () => {
  const [showSearch, setShowSearch] = useState(false);
  const [searchVideo, setSearchVideo] = useState("");
  const [focused, setFocused] = useState(false);
  const [focusedMobile, setFocusedMobile] = useState(false);
  const onFocus = () => setFocused(true);
  const onFocusMobile = () => setFocusedMobile(true);
  const pathname = usePathname();
  const showRef = useRef(null);
  const autoCompleteRef = useRef<HTMLDivElement | null>(null);
  const autoCompleteRefMobile = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const router = useRouter();
  const dispatch = useDispatch();

  const toggleShowSearch = () => {
    setShowSearch((search) => !search);
  };

  const handleClickOutside = () => {
    setShowSearch(false);
    setFocusedMobile(false);
  };

  const showNavbar = () => {
    dispatch(toggleNavbar(true));
  };

  const unFocus = () => {
    setFocused(false);
  };

  const unFocusMobile = () => {
    setFocusedMobile(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchVideo(e.target.value);
  };

  const handleInputSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(setSearchValue(searchVideo));
    router.push("/search");

    if (inputRef.current) {
      inputRef.current.blur();
    }

    setFocused(false);
    setFocusedMobile(false);
  };

  useOnClickOutside(showRef, handleClickOutside);
  useOnClickOutside(autoCompleteRef, unFocus);
  useOnClickOutside(autoCompleteRefMobile, unFocusMobile);

  useLockedBody(focusedMobile, "root");

  return (
    <nav
      className={
        pathname === "/video"
          ? styles["navbar-video-section"]
          : styles["navbar"]
      }
    >
      <div className={styles["web-icons"]}>
        {showSearch ? (
          <button onClick={unFocusMobile}>
            <Back width="3em" height="3em" />
          </button>
        ) : (
          <button onClick={showNavbar}>
            <Hamburger width="3.8em" height="3.8em" />
          </button>
        )}

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

      <div className={styles["search-wrapper-desktop"]}>
        <form
          className={styles["search-input-desktop"]}
          onSubmit={handleInputSubmit}
        >
          <input
            type="text"
            placeholder="Search"
            value={searchVideo}
            onChange={handleInputChange}
            ref={inputRef}
            onFocus={onFocus}
          />
          <button type="submit">
            <Search width="1.8em" height="1.8em" />
          </button>
        </form>
        <AutoCompleteDesktop
          focused={focused}
          unFocus={unFocus}
          setSearchVideo={setSearchVideo}
          autoCompleteRef={autoCompleteRef}
        />
      </div>

      {showSearch ? (
        <div className={styles["search-wrapper-mobile"]} ref={showRef}>
          <form
            className={styles["search-input-mobile"]}
            onSubmit={handleInputSubmit}
          >
            <input
              type="text"
              placeholder="Search"
              value={searchVideo}
              onChange={handleInputChange}
              ref={inputRef}
              onFocus={onFocusMobile}
            />
            <button type="submit">
              <Search width="1.8em" height="1.8em" />
            </button>
          </form>
          <AutoCompleteMobile
            focusedMobile={focusedMobile}
            autoCompleteRefMobile={autoCompleteRefMobile}
            unFocusMobile={unFocusMobile}
            setSearchVideo={setSearchVideo}
          />
        </div>
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
