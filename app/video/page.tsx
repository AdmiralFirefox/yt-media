"use client";

import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { fetchData } from "@/utils/fetchData";
import { fetchAlternateVideos } from "@/utils/fetchAlternateVideos";
import { useSelector } from "react-redux";
import { RootState } from "@/app/store";
import ReactPlayer from "react-player/youtube";
import VideoDescription from "@/components/VideoDescription";
import { VideoTypes } from "@/types/VideoDetailsType";
import SuggestedVideos from "@/components/SuggestedVideos";
import SuggestedVideosAlternative from "@/components/Alternative/SuggestedVideosAlternative";
import VideoLoading from "@/components/Loading/VideoLoading";
import ErrorFetchingData from "@/components/Error/ErrorFetchingData";
import { SuggestedVideosType } from "@/types/SuggestedVideosType";
import { SuggestedVideosAltType } from "@/types/Alternative/SuggestedVideosAltType";
import styles from "@/styles/Video.module.scss";

export default function Video() {
  const videoID = useSelector((state: RootState) => state.video.videoID);

  const {
    data: video,
    isLoading: isVideoLoading,
    isError: isVideoError,
  }: UseQueryResult<VideoTypes, Error> = useQuery<VideoTypes, Error>({
    queryKey: ["video", videoID],
    queryFn: () => fetchData(`videos?part=snippet,statistics&id=${videoID}`),
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
    queryFn: () =>
      fetchData(`search?part=snippet&relatedToVideoId=${videoID}&type=video`),
    staleTime: 30000,
    enabled: Boolean(videoID),
  });

  const {
    data: suggestedVideosAlt,
    isLoading: isSuggestedVideosAltLoading,
    isError: isSuggestedVideosAltError,
  }: UseQueryResult<SuggestedVideosAltType, Error> = useQuery<
    SuggestedVideosAltType,
    Error
  >({
    queryKey: ["suggested_videos_alt", videoID],
    queryFn: () => fetchAlternateVideos(`related?id=${videoID}&geo=US`),
    staleTime: 30000,
    enabled: Boolean(videoID),
  });

  if (isVideoLoading) {
    return <VideoLoading />;
  }

  if (isSuggestedVideosLoading) {
    return <VideoLoading />;
  }

  if (isSuggestedVideosAltLoading) {
    return <VideoLoading />;
  }

  if (isVideoError) {
    return <ErrorFetchingData />;
  }

  if (isSuggestedVideosError) {
    return <ErrorFetchingData />;
  }

  if (isSuggestedVideosAltError) {
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

      {suggestedVideos.items !== undefined ? (
        <SuggestedVideos videos={suggestedVideos.items} />
      ) : (
        <SuggestedVideosAlternative videos={suggestedVideosAlt.data} />
      )}
    </main>
  );
}
