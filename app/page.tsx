import { fetchData } from "@/utils/fetchData";
import Videos from "@/components/Videos";
import { VideosCategoryTypes } from "@/types/VideosType";

export default async function Home() {
  const data: Promise<VideosCategoryTypes> = fetchData(
    "search?part=snippet&regionCode=US&maxResults=50&q=Latest%20Videos"
  );
  const videos = await data;

  return (
    <main>
      <Videos videos={videos.items} />
    </main>
  );
}
