import { Dispatch, SetStateAction } from "react";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { setSearchValue } from "@/features/search/searchSlice";
import Search from "../Icons/Search";
import styles from "@/styles/autocomplete/AutoCompleteDesktop.module.scss";

interface AutoCompleteDesktopProps {
  focused: boolean;
  autoCompleteData: unknown;
  isLoading: boolean;
  unFocus: () => void;
  setSearchVideo: Dispatch<SetStateAction<string>>;
}

const AutoCompleteDesktop = ({
  focused,
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
