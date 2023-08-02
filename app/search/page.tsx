"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { v4 as uuidv4 } from "uuid";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store";
import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { setVideoID } from "@/features/video/videoSlice";
import { fetchData } from "@/utils/fetchData";
import { truncateText } from "@/utils/truncateText";
import { getTimePassed } from "@/utils/getTimePassed";
import { decode } from "html-entities";
import styles from "@/styles/Search.module.scss";

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
    error,
  }: UseQueryResult<unknown, Error> = useQuery<unknown, Error>({
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
    return <h1>Loading...</h1>;
  }

  if (isError) {
    return <h1>{error!.message}</h1>;
  }

  //  console.log(searchVideos.items);
  //  console.log(searchValue);

  return (
    <main>
      <ul className={styles["container"]}>
        {searchVideos.items
          .filter((video) => video.id.kind === "youtube#video")
          .map((video) => (
            <li
              key={uuidv4()}
              onClick={() => getVideoID(video.id.videoId)}
              className={styles["video-card"]}
            >
              <div className={styles["image-container"]}>
                <Image
                  src={video.snippet.thumbnails.medium.url}
                  alt={video.snippet.title}
                  width={600}
                  height={400}
                  quality={90}
                  unoptimized
                />
              </div>

              <div className={styles["video-details"]}>
                <p className={styles["video-title"]}>
                  {truncateText(decode(video.snippet.title), 70)}
                </p>
                <p className={styles["video-channel-title"]}>
                  {video.snippet.channelTitle}
                </p>
                <p className={styles["video-publish-date"]}>
                  {getTimePassed(video.snippet.publishTime)}
                </p>
              </div>
            </li>
          ))}
      </ul>
    </main>
  );
}
