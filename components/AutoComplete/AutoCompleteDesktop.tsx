import { Dispatch, SetStateAction } from "react";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { setSearchValue } from "@/features/search/searchSlice";
import Search from "../Icons/Search";
import { AutoCompleteDataType } from "@/types/AutoCompleteType";
import styles from "@/styles/autocomplete/AutoCompleteDesktop.module.scss";

interface AutoCompleteDesktopProps {
  focused: boolean;
  focusedButtonIndex: number;
  autoCompleteData: AutoCompleteDataType;
  isLoading: boolean;
  unFocus: () => void;
  setSearchVideo: Dispatch<SetStateAction<string>>;
}

const AutoCompleteDesktop = ({
  focused,
  focusedButtonIndex,
  autoCompleteData,
  isLoading,
  unFocus,
  setSearchVideo,
}: AutoCompleteDesktopProps) => {
  const router = useRouter();
  const dispatch = useDispatch();

  return (
    <>
      {focused && autoCompleteData && autoCompleteData.data ? (
        <>
          {isLoading ? (
            ""
          ) : (
            <ul className={styles["auto-complete-desktop"]}>
              {autoCompleteData.data.map((suggestion, i) => (
                <li
                  className={
                    i === focusedButtonIndex
                      ? styles["auto-complete-desktop-list-active"]
                      : styles["auto-complete-desktop-list"]
                  }
                  key={i}
                  onClick={() => {
                    unFocus();
                    setSearchVideo(suggestion.title);
                    dispatch(setSearchValue(suggestion.title));
                    router.push("/search");
                  }}
                >
                  <Search width="1.5em" height="1.5em" />
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

export default AutoCompleteDesktop;
