"use client";

import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { fetchData } from "@/utils/fetchData";
import { useSelector } from "react-redux";
import { RootState } from "@/app/store";
import ReactPlayer from "react-player/youtube";
import VideoDescription from "@/components/VideoDescription";
import { VideoTypes } from "@/types/VideoDetailsType";
import SuggestedVideos from "@/components/SuggestedVideos";
import { SuggestedVideosType } from "@/types/SuggestedVideos";
import styles from "@/styles/Video.module.scss";

export default function Video() {
  const videoID = useSelector((state: RootState) => state.video.videoID);

  const {
    data: video,
    isLoading: isVideoLoading,
    isError: isVideoError,
    error: videoError,
  }: UseQueryResult<VideoTypes, Error> = useQuery<VideoTypes, Error>({
    queryKey: ["video", videoID],
    queryFn: () => fetchData(`videos?part=snippet,statistics&id=${videoID}`),
    staleTime: 30000,
    enabled: Boolean(videoID),
  });

  const {
    data: suggestedVideos,
    isLoading: isVideosLoading,
    isError: isVideosError,
    error: videosError,
  }: UseQueryResult<SuggestedVideosType, Error> = useQuery<
    SuggestedVideosType,
    Error
  >({
    queryKey: ["suggested_videos", videoID],
    queryFn: () =>
      fetchData(`search?part=snippet&relatedToVideoId=${videoID}&type=video`),
    staleTime: 30000,
    enabled: Boolean(videoID),
  });

  if (isVideoLoading) {
    return <h1>Loading...</h1>;
  }

  if (isVideoError) {
    return <h1>{videoError!.message}</h1>;
  }

  if (isVideosLoading) {
    return <h1>Loading...</h1>;
  }

  if (isVideosError) {
    return <h1>{videosError!.message}</h1>;
  }

  // console.log(suggestedVideos.items)

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

      <SuggestedVideos videos={suggestedVideos.items} />
    </main>
  );
}
