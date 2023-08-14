import { Dispatch, MutableRefObject, SetStateAction } from "react";
import Search from "../Icons/Search";
import styles from "@/styles/autocomplete/AutoCompleteMobile.module.scss";

interface AutoCompleteMobileProps {
  focusedMobile: boolean;
  autoCompleteRefMobile: MutableRefObject<HTMLDivElement | null>;
  unFocusMobile: () => void;
  setSearchVideo: Dispatch<SetStateAction<string>>;
}

const AutoCompleteMobile = ({
  focusedMobile,
  autoCompleteRefMobile,
  unFocusMobile,
  setSearchVideo,
}: AutoCompleteMobileProps) => {
  return (
    <>
      {focusedMobile ? (
        <div
          className={styles["auto-complete-mobile"]}
          ref={autoCompleteRefMobile}
        >
          {[...Array(10)].map((_e, i) => (
            <div
              key={i}
              onClick={() => {
                unFocusMobile();
                setSearchVideo("Test Mobile");
              }}
            >
              <Search width="1.7em" height="1.7em" />
              <p>Test</p>
            </div>
          ))}
        </div>
      ) : null}
    </>
  );
};

export default AutoCompleteMobile;
