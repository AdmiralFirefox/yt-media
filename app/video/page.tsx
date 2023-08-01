"use client";

import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { fetchData } from "@/utils/fetchData";
import { useSelector } from "react-redux";
import { RootState } from "@/app/store";
import ReactPlayer from "react-player/youtube";
import VideoDescription from "@/components/VideoDescription";
import { VideoTypes } from "@/types/VideoDetailsType";
import styles from "@/styles/Video.module.scss";

export default function Video() {
  const videoID = useSelector((state: RootState) => state.video.videoID);

  const {
    data: video,
    isLoading,
    isError,
    error,
  }: UseQueryResult<VideoTypes, Error> = useQuery<VideoTypes, Error>({
    queryKey: ["video", videoID],
    queryFn: () => fetchData(`videos?part=snippet,statistics&id=${videoID}`),
    staleTime: 30000,
    enabled: Boolean(videoID),
  });

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (isError) {
    return <h1>{error!.message}</h1>;
  }

  return (
    <main className={styles["container"]}>
      <div className={styles["video-details"]}>
        <div className={styles["video-wrapper"]}>
          <ReactPlayer
            url={`https://www.youtube.com/watch?v=${videoID}`}
            width="100%"
            height="100%"
            controls
          />
        </div>

        <VideoDescription video={video.items[0]} />
      </div>
      <div>
        {[...Array(10)].map((_e, key) => (
          <div key={key + 1} style={{ marginRight: "13em" }}>
            <h1>{key + 1}</h1>
          </div>
        ))}
      </div>
    </main>
  );
}
