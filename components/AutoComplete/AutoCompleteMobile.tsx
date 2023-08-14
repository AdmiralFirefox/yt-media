import { Dispatch, SetStateAction } from "react";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { useWindowSize } from "@/hooks/useWindowSize";
import { setSearchValue } from "@/features/search/searchSlice";
import Search from "../Icons/Search";
import styles from "@/styles/autocomplete/AutoCompleteMobile.module.scss";

interface AutoCompleteMobileProps {
  focusedMobile: boolean;
  autoCompleteData: unknown;
  isLoading: boolean;
  unFocusMobile: () => void;
  setSearchVideo: Dispatch<SetStateAction<string>>;
}

const AutoCompleteMobile = ({
  focusedMobile,
  autoCompleteData,
  isLoading,
  unFocusMobile,
  setSearchVideo,
}: AutoCompleteMobileProps) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { height } = useWindowSize();

  return (
    <>
      {focusedMobile && autoCompleteData && autoCompleteData.data ? (
        <>
          {isLoading ? (
            ""
          ) : (
            <ul
              className={styles["auto-complete-mobile"]}
              style={{ height: `calc(${height}px - 5em)` }}
            >
              {autoCompleteData.data.map((suggestion, i) => (
                <li
                  key={i}
                  onClick={() => {
                    unFocusMobile();
                    setSearchVideo(suggestion.title);
                    dispatch(setSearchValue(suggestion.title));
                    router.push("/search");
                  }}
                >
                  <Search width="1.7em" height="1.7em" />
                  <p>{suggestion.title}</p>
                </li>
              ))}
            </ul>
          )}
        </>
      ) : null}
    </>
  );
};

export default AutoCompleteMobile;
