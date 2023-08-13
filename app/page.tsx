import Videos from "@/components/Videos";
import { fetchCategoryData } from "@/utils/fetchCategoryData";
import { VideosCategoryTypes } from "@/types/VideosType";

export default async function Home() {
  const data: Promise<VideosCategoryTypes> =
    fetchCategoryData("Latest%20Videos");
  const videos = await data;

  return (
    <main>
      <Videos videos={videos.items} />
    </main>
  );
}
