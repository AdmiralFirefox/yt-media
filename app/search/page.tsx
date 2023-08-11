"use client";

import { useRouter } from "next/navigation";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store";
import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { setVideoID } from "@/features/video/videoSlice";
import { fetchData } from "@/utils/fetchData";
import SearchVideos from "@/components/SearchVideos";
import { SearchVideosType } from "@/types/SearchVideosType";
import SearchChannels from "@/components/SearchChannels";
import SearchLoading from "@/components/Loading/SearchLoading";
import ErrorFetchingRequests from "@/components/Error/ErrorFetchingRequests";
import styles from "@/styles/SearchFeed.module.scss";

export default function Search() {
  const router = useRouter();
  const dispatch = useDispatch();
  const searchValue = useSelector(
    (state: RootState) => state.search.searchValue
  );

  const {
    data: searchVideos,
    isLoading,
    isError,
  }: UseQueryResult<SearchVideosType, Error> = useQuery<
    SearchVideosType,
    Error
  >({
    queryKey: ["video", searchValue],
    queryFn: () =>
      fetchData(`search?part=snippet&maxResults=50&q=${searchValue}`),
    staleTime: 30000,
    enabled: Boolean(searchValue),
  });

  const getVideoID = (id: string) => {
    dispatch(setVideoID(id));
    router.push("/video");
  };

  if (isLoading) {
    return <SearchLoading />;
  }

  if (isError) {
    return <ErrorFetchingRequests />;
  }

  //  console.log(searchVideos.items);
  //  console.log(searchValue);

  return (
    <main className={styles["container"]}>
      <SearchChannels searchChannels={searchVideos.items} />
      <SearchVideos searchVideos={searchVideos.items} getVideoID={getVideoID} />
    </main>
  );
}
