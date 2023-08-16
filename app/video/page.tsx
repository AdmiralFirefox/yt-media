"use client";

import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { fetchData } from "@/utils/fetchData";
import { fetchAlternateData } from "@/utils/fetchAlternateData";
import { useSelector } from "react-redux";
import { RootState } from "@/app/store";
import ReactPlayer from "react-player/youtube";
import VideoDescription from "@/components/VideoDescription";
import { VideoTypes } from "@/types/VideoDetailsType";
import SuggestedVideos from "@/components/SuggestedVideos";
import VideoLoading from "@/components/Loading/VideoLoading";
import ErrorFetchingData from "@/components/Error/ErrorFetchingData";
import { SuggestedVideosType } from "@/types/SuggestedVideosType";
import styles from "@/styles/Video.module.scss";

export default function Video() {
  const videoID = useSelector((state: RootState) => state.video.videoID);

  const {
    data: video,
    isLoading: isVideoLoading,
    isError: isVideoError,
  }: UseQueryResult<VideoTypes, Error> = useQuery<VideoTypes, Error>({
    queryKey: ["video", videoID],
    queryFn: () =>
      fetchData(
        `videos?part=contentDetails%2Csnippet%2Cstatistics&id=${videoID}`
      ),
    staleTime: 30000,
    enabled: Boolean(videoID),
  });

  const {
    data: suggestedVideos,
    isLoading: isSuggestedVideosLoading,
    isError: isSuggestedVideosError,
  }: UseQueryResult<SuggestedVideosType, Error> = useQuery<
    SuggestedVideosType,
    Error
  >({
    queryKey: ["suggested_videos", videoID],
    queryFn: () => fetchAlternateData(`related?id=${videoID}&geo=US`),
    staleTime: 30000,
    enabled: Boolean(videoID),
  });

  if (isVideoLoading) {
    return <VideoLoading />;
  }

  if (isSuggestedVideosLoading) {
    return <VideoLoading />;
  }

  if (isVideoError) {
    return <ErrorFetchingData />;
  }

  if (isSuggestedVideosError) {
    return <ErrorFetchingData />;
  }

  // console.log(suggestedVideos.items)
  // console.log(suggestedVideosAlt.data);

  return (
    <main className={styles["container"]}>
      <div className={styles["video-details"]}>
        <div className={styles["video-wrapper"]}>
          <ReactPlayer
            url={`https://www.youtube.com/embed/${videoID}`}
            width="100%"
            height="100%"
            controls
          />
        </div>

        <VideoDescription video={video.items[0]} />
      </div>

      <SuggestedVideos videos={suggestedVideos.data} />
    </main>
  );
}
