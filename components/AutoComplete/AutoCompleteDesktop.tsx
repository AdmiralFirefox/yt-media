import { Dispatch, MutableRefObject, SetStateAction } from "react";
import Search from "../Icons/Search";
import styles from "@/styles/autocomplete/AutoCompleteDesktop.module.scss";

interface AutoCompleteDesktopProps {
  focused: boolean;
  unFocus: () => void;
  setSearchVideo: Dispatch<SetStateAction<string>>;
  autoCompleteRef: MutableRefObject<HTMLDivElement | null>;
}

const AutoCompleteDesktop = ({
  focused,
  unFocus,
  setSearchVideo,
  autoCompleteRef,
}: AutoCompleteDesktopProps) => {
  return (
    <>
      {focused ? (
        <div className={styles["auto-complete-desktop"]} ref={autoCompleteRef}>
          {[...Array(10)].map((_e, i) => (
            <div
              key={i}
              onClick={() => {
                unFocus();
                setSearchVideo("Test");
              }}
            >
              <Search width="1.5em" height="1.5em" />
              <p>Test</p>
            </div>
          ))}
        </div>
      ) : null}
    </>
  );
};

export default AutoCompleteDesktop;
