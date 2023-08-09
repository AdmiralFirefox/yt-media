"use client";

import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { fetchData } from "@/utils/fetchData";
import { useSelector } from "react-redux";
import { RootState } from "@/app/store";
import Videos from "@/components/Videos";
import { VideosCategoryTypes } from "@/types/VideosType";
import { ChannelType } from "@/types/ChannelDetailsType";
import ChannelDetails from "@/components/ChannelDetails";

export default function Channel() {
  const channelID = useSelector((state: RootState) => state.channel.channelID);

  const {
    data: channelData,
    isLoading: isChannelLoading,
    isError: isChannelError,
    error: channelError,
  }: UseQueryResult<ChannelType, Error> = useQuery<ChannelType, Error>({
    queryKey: ["channel_data", channelID],
    queryFn: () => fetchData(`channels?part=snippet&id=${channelID}`),
    staleTime: 30000,
    enabled: Boolean(channelID),
  });

  const {
    data: channelVideos,
    isLoading: isVideosLoading,
    isError: isVideosError,
    error: videosError,
  }: UseQueryResult<VideosCategoryTypes, Error> = useQuery<
    VideosCategoryTypes,
    Error
  >({
    queryKey: ["channel_videos", channelID],
    queryFn: () =>
      fetchData(
        `search?channelId=${channelID}&part=snippet%2Cid&order=date&maxResults=50`
      ),
    staleTime: 30000,
    enabled: Boolean(channelID),
  });

  if (isChannelLoading) {
    return <h1>Loading...</h1>;
  }

  if (isVideosLoading) {
    return <h1>Loading...</h1>;
  }

  // console.log(channelData.items[0]);
  // console.log(channelVideos.items);

  return (
    <main>
      <ChannelDetails channel={channelData!.items[0]} />
      <Videos videos={channelVideos!.items} />
    </main>
  );
}