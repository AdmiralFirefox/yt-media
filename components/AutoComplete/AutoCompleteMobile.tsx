import { Dispatch, MutableRefObject, SetStateAction } from "react";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { setSearchValue } from "@/features/search/searchSlice";
import Search from "../Icons/Search";
import styles from "@/styles/autocomplete/AutoCompleteMobile.module.scss";

interface AutoCompleteMobileProps {
  focusedMobile: boolean;
  autoCompleteData: unknown;
  isLoading: boolean;
  autoCompleteRefMobile: MutableRefObject<HTMLDivElement | null>;
  unFocusMobile: () => void;
  setSearchVideo: Dispatch<SetStateAction<string>>;
}

const AutoCompleteMobile = ({
  focusedMobile,
  autoCompleteData,
  isLoading,
  autoCompleteRefMobile,
  unFocusMobile,
  setSearchVideo,
}: AutoCompleteMobileProps) => {
  const router = useRouter();
  const dispatch = useDispatch();

  return (
    <>
      {focusedMobile && autoCompleteData && autoCompleteData.data ? (
        <>
          {isLoading ? (
            ""
          ) : (
            <div
              className={styles["auto-complete-mobile"]}
              ref={autoCompleteRefMobile}
            >
              {autoCompleteData.data.map((suggestion, i) => (
                <div
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
                </div>
              ))}
            </div>
          )}
        </>
      ) : null}
    </>
  );
};

export default AutoCompleteMobile;
