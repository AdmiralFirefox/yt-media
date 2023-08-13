import Videos from "@/components/Videos";
import { fetchCategoryData } from "@/utils/fetchCategoryData";
import { VideosCategoryTypes } from "@/types/VideosType";

type Params = {
  params: {
    category_name: string;
  };
};

export default async function Category({ params }: Params) {
  const data: Promise<VideosCategoryTypes> = fetchCategoryData(
    params.category_name
  );
  const category = await data;

  return (
    <main>
      <Videos videos={category.items} />
    </main>
  );
}
