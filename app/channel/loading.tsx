import ChannelDetailsLoading from "@/components/Loading/ChannelDetailsLoading";
import ChannelVideosLoading from "@/components/Loading/ChannelVideosLoading";

export default function Loading() {
  return (
    <main>
      <ChannelDetailsLoading />
      <ChannelVideosLoading />
    </main>
  );
}
